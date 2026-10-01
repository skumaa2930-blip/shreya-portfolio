import React, { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X, ArrowLeft, Maximize2, Compass } from 'lucide-react';

interface CylinderMediaWallProps {
  isOpen: boolean;
  onClose: () => void;
}

// Expansive 360° panorama with larger, cinematic media tiles
const NUM_COLUMNS = 26;
const NUM_ROWS = 3;
const ARC_SPACE = 24; // px space between adjacent column tiles
const COL_WIDTH = 220; // px (increased from 150px for larger, bold portrait presentation)
const ROW_HEIGHT = 293; // px (220 * 4 / 3 ≈ 293px for exact 3:4 portrait ratio)
const ROW_GAP = 24; // px space between rows
const TOTAL_HEIGHT = NUM_ROWS * ROW_HEIGHT + (NUM_ROWS - 1) * ROW_GAP; // 3 * 293 + 2 * 24 = 927px
const ANGLE_STEP = 360 / NUM_COLUMNS; // ~13.846 deg

// Camera depth push: increasing it (e.g. 400–500) brings the wall closer/bigger, decreasing or going negative pushes it further away, and 0 restores original framing
const CAMERA_PUSH = 1000; // px — positive values pull the whole wall toward the viewer

// Inward radius calculated from the exact arc length subtended per column:
// Arc length per column segment = COL_WIDTH + ARC_SPACE = 220 + 24 = 244px
// Circumference = 26 * 244 = 6344px
// Radius R = (NUM_COLUMNS * (COL_WIDTH + ARC_SPACE)) / (2 * Math.PI) ≈ 1010px
const RADIUS = Math.round((NUM_COLUMNS * (COL_WIDTH + ARC_SPACE)) / (2 * Math.PI));

interface AssetSlot {
  id: number;
  src?: string;
  title: string;
  tag: string;
  isEmpty: boolean;
}

// Base 32 photography assets
const BASE_32_PHOTOS = [
  { src: '/assets/photowall (1).JPG',  title: 'Photowall 01', tag: 'Visual Archive' },
  { src: '/assets/photowall (2).JPG',  title: 'Photowall 02', tag: 'Visual Archive' },
  { src: '/assets/photowall (3).jpg',  title: 'Photowall 03', tag: 'Visual Archive' },
  { src: '/assets/photowall (4).jpg',  title: 'Photowall 04', tag: 'Visual Archive' },
  { src: '/assets/photowall (5).jpg',  title: 'Photowall 05', tag: 'Visual Archive' },
  { src: '/assets/photowall (6).jpg',  title: 'Photowall 06', tag: 'Visual Archive' },
  { src: '/assets/photowall (7).jpg',  title: 'Photowall 07', tag: 'Visual Archive' },
  { src: '/assets/photowall (8).jpg',  title: 'Photowall 08', tag: 'Visual Archive' },
  { src: '/assets/photowall (9).jpg',  title: 'Photowall 09', tag: 'Visual Archive' },
  { src: '/assets/photowall (10).jpg', title: 'Photowall 10', tag: 'Visual Archive' },
  { src: '/assets/photowall (11).jpg', title: 'Photowall 11', tag: 'Visual Archive' },
  { src: '/assets/photowall (12).jpg', title: 'Photowall 12', tag: 'Visual Archive' },
  { src: '/assets/photowall (13).jpg', title: 'Photowall 13', tag: 'Visual Archive' },
  { src: '/assets/photowall (14).jpg', title: 'Photowall 14', tag: 'Visual Archive' },
  { src: '/assets/photowall (15).jpg', title: 'Photowall 15', tag: 'Visual Archive' },
  { src: '/assets/photowall (16).jpg', title: 'Photowall 16', tag: 'Visual Archive' },
  { src: '/assets/photowall (17).jpg', title: 'Photowall 17', tag: 'Visual Archive' },
  { src: '/assets/photowall (18).jpg', title: 'Photowall 18', tag: 'Visual Archive' },
  { src: '/assets/photowall (19).jpg', title: 'Photowall 19', tag: 'Visual Archive' },
  { src: '/assets/photowall (20).jpg', title: 'Photowall 20', tag: 'Visual Archive' },
  { src: '/assets/photowall (21).jpg', title: 'Photowall 21', tag: 'Visual Archive' },
  { src: '/assets/photowall (22).jpg', title: 'Photowall 22', tag: 'Visual Archive' },
  { src: '/assets/photowall (23).jpg', title: 'Photowall 23', tag: 'Visual Archive' },
  { src: '/assets/photowall (24).jpg', title: 'Photowall 24', tag: 'Visual Archive' },
  { src: '/assets/photowall (25).jpg', title: 'Photowall 25', tag: 'Visual Archive' },
  { src: '/assets/photowall (26).jpg', title: 'Photowall 26', tag: 'Visual Archive' },
  { src: '/assets/photowall (27).jpg', title: 'Photowall 27', tag: 'Visual Archive' },
  { src: '/assets/photowall (28).jpg', title: 'Photowall 28', tag: 'Visual Archive' },
  { src: '/assets/photowall (29).jpg', title: 'Photowall 29', tag: 'Visual Archive' },
  { src: '/assets/photowall (30).jpg', title: 'Photowall 30', tag: 'Visual Archive' },
  { src: '/assets/photowall (31).jpg', title: 'Photowall 31', tag: 'Visual Archive' },
  { src: '/assets/photowall (32).jpg', title: 'Photowall 32', tag: 'Visual Archive' },
];

// 78 slots (26 columns x 3 rows): repeats the 32 images across all remaining slots
const ASSET_LIBRARY: AssetSlot[] = Array.from({ length: NUM_COLUMNS * NUM_ROWS }, (_, idx) => {
  const photo = BASE_32_PHOTOS[idx % BASE_32_PHOTOS.length];
  return {
    id: idx + 1,
    src: photo.src,
    title: `Photowall ${String(idx + 1).padStart(2, '0')}`,
    tag: photo.tag,
    isEmpty: false,
  };
});

export const CylinderMediaWall: React.FC<CylinderMediaWallProps> = ({ isOpen, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cylinderGroupRef = useRef<HTMLDivElement>(null);

  // Layout scale & state
  const [scale, setScale] = useState(1);
  const [isAutoSpin, setIsAutoSpin] = useState(true);
  const [isDraggingState, setIsDraggingState] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<typeof ASSET_LIBRARY[0] | null>(null);

  // Physics refs (avoiding React re-renders during high-frequency animations)
  const rotationYRef = useRef(0);
  const isDraggingRef = useRef(false);
  const lastPointerXRef = useRef(0);
  const lastPointerTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);
  const pointerDownPosRef = useRef({ x: 0, y: 0 });
  const hasMovedRef = useRef(false);

  // Edge-proximity cursor tracking (-1 far left, 0 center, +1 far right)
  const cursorNormXRef = useRef(0);
  const isCursorActiveRef = useRef(false);

  // Helper to directly apply 3D transform to DOM without triggering React reconciliation
  const applyRotation = useCallback((angleDeg: number) => {
    const normalized = ((angleDeg % 360) + 360) % 360;
    rotationYRef.current = normalized;
    if (cylinderGroupRef.current) {
      cylinderGroupRef.current.style.transform = `rotateY(${normalized}deg)`;
    }
  }, []);

  // Auto-scale to viewport height so cylinder fills the screen seamlessly
  const updateScale = useCallback(() => {
    if (typeof window === 'undefined') return;
    const vh = window.innerHeight;
    // Expansive vertical presence filling 92% of the viewport height
    const targetAllowedHeight = vh * 0.92;
    const computedScale = Math.min(1.45, Math.max(0.45, targetAllowedHeight / TOTAL_HEIGHT));
    setScale(computedScale);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [isOpen, updateScale]);

  // Track global cursor position relative to viewport width for edge-speed acceleration
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerMoveGlobal = (e: PointerEvent) => {
      const norm = (e.clientX / window.innerWidth) * 2 - 1; // -1 on far left, 0 in center, +1 on far right
      cursorNormXRef.current = Math.max(-1, Math.min(1, norm));
      isCursorActiveRef.current = true;
    };

    const handlePointerLeaveGlobal = () => {
      isCursorActiveRef.current = false;
      cursorNormXRef.current = 0;
    };

    window.addEventListener('pointermove', handlePointerMoveGlobal, { passive: true });
    window.addEventListener('blur', handlePointerLeaveGlobal);
    document.addEventListener('mouseleave', handlePointerLeaveGlobal);

    return () => {
      window.removeEventListener('pointermove', handlePointerMoveGlobal);
      window.removeEventListener('blur', handlePointerLeaveGlobal);
      document.removeEventListener('mouseleave', handlePointerLeaveGlobal);
    };
  }, [isOpen]);

  // Lock body scroll and remove site navigation when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('photo-wall-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('photo-wall-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('photo-wall-open');
    };
  }, [isOpen]);

  // Keydown listener (ESC to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedAsset) {
          setSelectedAsset(null);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, selectedAsset]);

  // Main high-performance 60FPS animation & momentum loop using direct DOM writes
  useEffect(() => {
    if (!isOpen) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    // Set initial transform
    applyRotation(rotationYRef.current);

    let lastTime = performance.now();
    const friction = 0.95; // Natural inertia decay

    const loop = () => {
      const now = performance.now();
      const dt = Math.min(32, now - lastTime);
      const timeScale = dt / 16.67;
      lastTime = now;

      if (!isDraggingRef.current) {
        // If there's active momentum velocity from a drag release
        if (Math.abs(velocityRef.current) > 0.002) {
          const delta = velocityRef.current * dt;
          applyRotation(rotationYRef.current + delta);
          velocityRef.current *= Math.pow(friction, timeScale);
        } else {
          velocityRef.current = 0;

          // Edge-proximity interactive speed:
          // Center deadzone [-0.12, +0.12]
          const normX = cursorNormXRef.current;
          let edgeSpeedDelta = 0;
          const deadzone = 0.12;

          if (isCursorActiveRef.current && Math.abs(normX) > deadzone) {
            // Right edge (normX > 0) -> move things to the right (+deg)
            // Left edge (normX < 0) -> move things to the left (-deg)
            const sign = normX > 0 ? 1 : -1;
            const intensity = (Math.abs(normX) - deadzone) / (1 - deadzone); // 0 to 1
            // Smooth non-linear acceleration curve for quick edge response
            const maxEdgeSpeed = 0.75; // deg/frame
            edgeSpeedDelta = sign * Math.pow(intensity, 1.3) * maxEdgeSpeed;
          }

          // Increased base ambient rotation speed (0.05 deg/frame) when not on edges
          const baseSpeed = isAutoSpin ? 0.05 : 0;
          const totalSpeed = (baseSpeed + edgeSpeedDelta) * timeScale;

          applyRotation(rotationYRef.current + totalSpeed);
        }
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isOpen, isAutoSpin, applyRotation]);

  // Pointer drag events
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only respond to primary mouse button or touch
    if (e.button !== 0 && e.pointerType === 'mouse') return;

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignore if pointer capture fails
    }

    isDraggingRef.current = true;
    setIsDraggingState(true);
    hasMovedRef.current = false;
    pointerDownPosRef.current = { x: e.clientX, y: e.clientY };

    lastPointerXRef.current = e.clientX;
    lastPointerTimeRef.current = performance.now();
    velocityRef.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    const now = performance.now();
    const deltaX = e.clientX - lastPointerXRef.current;
    const totalDistX = Math.abs(e.clientX - pointerDownPosRef.current.x);
    const totalDistY = Math.abs(e.clientY - pointerDownPosRef.current.y);

    if (totalDistX > 5 || totalDistY > 5) {
      hasMovedRef.current = true;
    }

    const dt = Math.max(1, now - lastPointerTimeRef.current);
    // Sensitivity: degrees turned per pixel dragged
    const sensitivity = 0.18;
    const angleDelta = deltaX * sensitivity;

    applyRotation(rotationYRef.current + angleDelta);

    // Compute smoothed instantaneous velocity (deg/ms)
    const instantVelocity = angleDelta / dt;
    velocityRef.current = velocityRef.current * 0.2 + instantVelocity * 0.8;

    lastPointerXRef.current = e.clientX;
    lastPointerTimeRef.current = now;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDraggingState(false);

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore
    }

    // Clamp max velocity to avoid wild spinning
    const maxVelocity = 0.9;
    velocityRef.current = Math.max(-maxVelocity, Math.min(maxVelocity, velocityRef.current));
  };

  // Wheel handling for touchpad or mouse scroll rotation
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    const deltaAngle = delta * 0.08;
    applyRotation(rotationYRef.current - deltaAngle);
    velocityRef.current = -delta * 0.008;
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[200] bg-black select-none overflow-hidden touch-none"
    >
      {/* FULL-HEIGHT BLACK GRADIENT OVERLAYS on Left and Right Edges (Soft & subtle) */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[10vw] sm:w-[12vw] md:w-[14vw] max-w-[160px] pointer-events-none z-30"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 50%, transparent 100%)',
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-[10vw] sm:w-[12vw] md:w-[14vw] max-w-[160px] pointer-events-none z-30"
        style={{
          background:
            'linear-gradient(to left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 50%, transparent 100%)',
        }}
      />

      {/* Top & Bottom Ambient Vignettes */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-30"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0) 100%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-30"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0) 100%)',
        }}
      />

      {/* TOP CONTROLS (Positioned at top of screen with Back button; site navbar is hidden) */}
      <header className="absolute top-5 sm:top-6 left-0 right-0 z-[70] px-4 sm:px-8 flex items-center justify-between pointer-events-none isolate">
        {/* Left: Prominent Back Button */}
        <div className="pointer-events-auto">
          <button
            type="button"
            onClick={onClose}
            aria-label="Back"
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-[#181818]/90 hover:bg-[#252525] border border-white/25 hover:border-[#B6D63A] text-white hover:text-[#B6D63A] font-syne text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer shadow-xl backdrop-blur-md group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>BACK</span>
          </button>
        </div>

        {/* Center Drag Hint */}
        <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-syne text-white/70 backdrop-blur-sm pointer-events-none">
          <Compass className="w-3.5 h-3.5 text-[#B6D63A] animate-spin" style={{ animationDuration: '8s' }} />
          <span>DRAG TO ROTATE WITH MOMENTUM</span>
        </div>

        {/* Spacer to balance center alignment */}
        <div className="w-[140px] hidden md:block pointer-events-none" />
      </header>

      {/* 3D SCENE VIEWPORT */}
      {/* Outer viewport applies expansive 1200px perspective */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
        className={`w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing ${
          isDraggingState ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{
          perspective: '1200px',
          perspectiveOrigin: '50% 50%',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* CYLINDER ROOT WITH AUTO-SCALE */}
        {/* Auto-scales to fit the viewport height so top/bottom corners are never clipped */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: 0,
            height: 0,
            transform: `translateZ(${CAMERA_PUSH}px) scale(${scale})`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* ROTATING CYLINDER GROUP (Hardware Accelerated 3D Composite) */}
          <div
            ref={cylinderGroupRef}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: 0,
              height: 0,
              willChange: 'transform',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* 26 Narrow Columns wrapping around inside of cylinder */}
            {Array.from({ length: NUM_COLUMNS }).map((_, colIdx) => {
              const colAngle = colIdx * ANGLE_STEP;

              return (
                <div
                  key={colIdx}
                  className="cylinder-column"
                  style={{
                    position: 'absolute',
                    left: `-${COL_WIDTH / 2}px`,
                    top: `-${TOTAL_HEIGHT / 2}px`,
                    width: `${COL_WIDTH}px`,
                    height: `${TOTAL_HEIGHT}px`,
                    /* 
                       Concave Cylinder Inside:
                       rotateY(colAngle) then translateZ(-RADIUS)
                       Walls recede in front (-Z) and curve toward the viewer at the edges.
                       backface-visibility: hidden culls columns facing away from the center!
                    */
                    transform: `rotateY(${colAngle}deg) translateZ(-${RADIUS}px)`,
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* 4 Rows of 3:4 portrait screen tiles with 22px vertical gap */}
                  <div
                    className="w-full h-full flex flex-col justify-between"
                    style={{ gap: `${ROW_GAP}px` }}
                  >
                    {Array.from({ length: NUM_ROWS }).map((_, rowIdx) => {
                      const slotIndex = colIdx * NUM_ROWS + rowIdx;
                      const asset = ASSET_LIBRARY[slotIndex] || {
                        id: slotIndex + 1,
                        title: `Frame ${slotIndex + 1}`,
                        tag: 'Empty Slot',
                        isEmpty: true,
                      };

                      return (
                        <div
                          key={rowIdx}
                          onClick={(e) => {
                            // Only trigger preview if not a drag gesture
                            if (!hasMovedRef.current) {
                              e.stopPropagation();
                              setSelectedAsset(asset);
                            }
                          }}
                          style={{
                            width: `${COL_WIDTH}px`,
                            height: `${ROW_HEIGHT}px`,
                            aspectRatio: '3 / 4',
                          }}
                          className={`relative w-full rounded-md overflow-hidden border transition-all duration-200 group/tile shadow-lg cursor-pointer shrink-0 select-none ${
                            !asset.isEmpty
                              ? 'bg-black border-white/15 hover:border-[#B6D63A]'
                              : 'bg-gradient-to-b from-[#161616] to-[#0d0d0d] border-white/10 hover:border-white/30 flex flex-col items-center justify-center'
                          }`}
                        >
                          {!asset.isEmpty && asset.src ? (
                            <>
                              {/* Photo Image Tile with 3:4 portrait cover (Crisp, pure high-resolution) */}
                              <img
                                src={asset.src}
                                alt={asset.title}
                                draggable={false}
                                decoding="async"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  const fallbackCount = parseInt(target.dataset.fallbackCount || '0', 10);
                                  if (fallbackCount === 0) {
                                    target.dataset.fallbackCount = '1';
                                    if (asset.src?.endsWith('.jpg')) {
                                      target.src = asset.src.replace('.jpg', '.JPG');
                                    } else if (asset.src?.endsWith('.JPG')) {
                                      target.src = asset.src.replace('.JPG', '.jpg');
                                    } else {
                                      target.src = `/assets/photowall (${asset.id}).jpg`;
                                    }
                                  } else if (fallbackCount === 1) {
                                    target.dataset.fallbackCount = '2';
                                    target.src = `/assets/photowall (${asset.id}).jpg`;
                                  } else if (fallbackCount === 2) {
                                    target.dataset.fallbackCount = '3';
                                    target.src = `/assets/f${((asset.id - 1) % 15) + 1}.png`;
                                  }
                                }}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover/tile:scale-105 pointer-events-none"
                                loading="lazy"
                              />

                              {/* Monitor Corner Tag */}
                              <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between opacity-0 group-hover/tile:opacity-100 transition-opacity pointer-events-none bg-black/80 px-2 py-1 rounded text-[9px] font-syne text-white/90">
                                <span className="truncate max-w-[90px]">{asset.title}</span>
                                <Maximize2 className="w-2.5 h-2.5 text-[#B6D63A] shrink-0" />
                              </div>

                              {/* Subtle glass reflection highlight */}
                              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none opacity-40 group-hover/tile:opacity-0 transition-opacity" />
                            </>
                          ) : (
                            <>
                              {/* Corner Frame Accents */}
                              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20 group-hover/tile:border-[#B6D63A] transition-colors" />
                              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20 group-hover/tile:border-[#B6D63A] transition-colors" />
                              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/20 group-hover/tile:border-[#B6D63A] transition-colors" />
                              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20 group-hover/tile:border-[#B6D63A] transition-colors" />

                              {/* Center Minimalist Frame Wireframe */}
                              <div className="flex flex-col items-center justify-center p-4 text-center">
                                <div className="w-11 h-11 rounded-lg border border-dashed border-white/15 group-hover/tile:border-[#B6D63A]/50 flex items-center justify-center mb-1.5 transition-colors">
                                  <span className="font-syne text-[11px] text-white/40 group-hover/tile:text-[#B6D63A] font-bold">
                                    #{String(asset.id).padStart(2, '0')}
                                  </span>
                                </div>
                                <span className="font-syne text-[9px] tracking-wider uppercase text-white/40 group-hover/tile:text-white/70 transition-colors">
                                  Empty
                                </span>
                                <span className="font-sans text-[8px] text-white/25 mt-0.5">
                                  R{rowIdx + 1} · C{colIdx + 1}
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* DETAIL INSPECTION MODAL */}
      {selectedAsset && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedAsset(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-[#181818] border border-white/20 rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Modal Top Bar with Close X */}
            <div className="px-5 py-3.5 bg-black/40 border-b border-white/10 flex items-center justify-between">
              <span className="font-syne text-[10px] uppercase tracking-widest text-[#B6D63A]">
                {selectedAsset.tag}
              </span>
              <button
                type="button"
                onClick={() => setSelectedAsset(null)}
                className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body: Photo Preview or Slot Info */}
            {!selectedAsset.isEmpty && selectedAsset.src ? (
              <div className="w-full max-h-[60vh] bg-black flex items-center justify-center overflow-hidden border-b border-white/10">
                <img
                  src={selectedAsset.src}
                  alt={selectedAsset.title}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const fallbackCount = parseInt(target.dataset.fallbackCount || '0', 10);
                    if (fallbackCount === 0) {
                      target.dataset.fallbackCount = '1';
                      if (selectedAsset.src?.endsWith('.jpg')) {
                        target.src = selectedAsset.src.replace('.jpg', '.JPG');
                      } else if (selectedAsset.src?.endsWith('.JPG')) {
                        target.src = selectedAsset.src.replace('.JPG', '.jpg');
                      } else {
                        target.src = `/assets/photowall (${selectedAsset.id}).jpg`;
                      }
                    } else if (fallbackCount === 1) {
                      target.dataset.fallbackCount = '2';
                      target.src = `/assets/photowall (${selectedAsset.id}).jpg`;
                    } else if (fallbackCount === 2) {
                      target.dataset.fallbackCount = '3';
                      target.src = `/assets/f${((selectedAsset.id - 1) % 15) + 1}.png`;
                    }
                  }}
                  className="w-full h-full max-h-[60vh] object-contain"
                />
              </div>
            ) : (
              <div className="w-full h-72 bg-gradient-to-b from-[#141414] to-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden border-b border-white/10 relative">
                <div className="w-24 h-24 rounded-2xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center mb-3">
                  <span className="font-syne text-2xl text-[#B6D63A] font-bold">
                    #{String(selectedAsset.id).padStart(2, '0')}
                  </span>
                </div>
                <p className="font-syne text-xs uppercase tracking-widest text-white/60">
                  Slot Available
                </p>
                <p className="font-sans text-[11px] text-white/40 mt-1">
                  No image loaded in this frame
                </p>
              </div>
            )}

            {/* Modal Meta & Action */}
            <div className="p-5 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-syne text-lg font-bold text-white">
                  {selectedAsset.title}
                </h3>
                <p className="font-sans text-xs text-neutral-400 mt-0.5">
                  {!selectedAsset.isEmpty ? 'Selected Work from Archive' : 'Visual Archive Slot'}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedAsset(null)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#B6D63A] hover:brightness-110 text-black font-syne text-xs uppercase tracking-wider font-bold transition-all cursor-pointer shadow-md"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Cylinder</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
};
