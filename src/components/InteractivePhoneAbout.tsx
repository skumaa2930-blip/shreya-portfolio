import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import {
  X,
  ArrowLeft,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Volume1,
  Instagram,
  Clapperboard,
  Music,
  Camera,
  FileText,
  Sparkles,
  Smartphone,
  ExternalLink,
  ArrowUpRight,
  Power,
  Upload,
  Image as ImageIcon,
  Check,
  RotateCcw,
  Sun,
  MapPin,
  Heart,
  MessageCircle,
  Share2,
  Disc,
} from 'lucide-react';

export interface PhoneAppConfig {
  id: string;
  name: string;
  label: string;
  category: 'video' | 'notes' | 'gallery' | 'interactive' | 'system';
  // Primary image asset path (user can provide this or upload in UI)
  imageAsset?: string;
  // Fallback vector icon renderer
  renderVectorIcon: () => React.ReactNode;
  // Associated video or notes metadata
  tagline?: string;
  title?: string;
  description?: string;
  videoSrc?: string;
  videoFallback?: string;
}

interface InteractivePhoneAboutProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPhotoWall: () => void;
}

export const InteractivePhoneAbout: React.FC<InteractivePhoneAboutProps> = ({
  isOpen,
  onClose,
  onOpenPhotoWall,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const phoneWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Phone Screen Power & Sleep state
  const [isScreenOn, setIsScreenOn] = useState<boolean>(true);
  const [volumeLevel, setVolumeLevel] = useState<number>(70);
  const [showVolumeHud, setShowVolumeHud] = useState<boolean>(false);
  const volumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Active App State
  const [activeApp, setActiveApp] = useState<PhoneAppConfig | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<string>('0:00');
  const [duration, setDuration] = useState<string>('0:00');
  const [videoSrc, setVideoSrc] = useState<string>('');

  // Toast indicator for apps
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // App Icon Image Assets mapping (custom images provided by user in assets folder)
  const [customIconImages, setCustomIconImages] = useState<Record<string, string>>({
    meet: '/assets/meet.png',
    outlook: '/assets/outlook.png',
    notes: '/assets/notes.png',
    youtube: '/assets/yt.png',
    maps: '/assets/maps.png',
    ytmusic: '/assets/ytm.png',
    whatsapp: '/assets/wp.png',
    capcut: '/assets/capcut.png',
    phone: '/assets/phone.png',
    gallery: '/assets/gallery.png',
    spotify: '/assets/spotify.png',
    instagram: '/assets/insta.png',
    vn: '/assets/vn.png',
  });

  // Track which images failed to load so we seamlessly show the inline vector SVG fallback
  const [failedImageLoads, setFailedImageLoads] = useState<Record<string, boolean>>({});

  // Asset manager drawer state
  const [isAssetDrawerOpen, setIsAssetDrawerOpen] = useState<boolean>(false);
  const [selectedAppForUpload, setSelectedAppForUpload] = useState<string>('meet');

  // Display mode: show dedicated app icon assets (toggleable to grey holders)
  const [showGreySquareHolders, setShowGreySquareHolders] = useState<boolean>(false);

  // Wallpaper asset from assets folder
  const [wallpaperSrc, setWallpaperSrc] = useState<string>('/assets/wallpaper.jpg');

  // Spotify Widget State & Tracks
  const [isSpotifyPlaying, setIsSpotifyPlaying] = useState<boolean>(false);
  const [spotifyTrackIndex, setSpotifyTrackIndex] = useState<number>(0);

  // Samsung Notes State (Tools vs Skills pages)
  const [activeNoteTab, setActiveNoteTab] = useState<'tools' | 'skills'>('tools');

  // Configurable Spotify playlist — add your song file (e.g. /assets/Song.mp3) or direct audio URL here:
  const SPOTIFY_TRACKS = [
    {
      title: 'Ek Zindagi',
      artist: 'Sachin-Jigar',
      duration: '3:12',
      src: '/assets/Song.mp3',
      fallbackSrc: '/assets/album/Song.mp3',
      albumArt: '/assets/album/songcover.jpg',
    },
    {
      title: 'Late Night Synthesis',
      artist: 'Focus Mix • Modular Synths',
      duration: '2:48',
      src: '/assets/song2.mp3',
      fallbackSrc: 'https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg',
      albumArt: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=300&auto=format&fit=crop',
    },
    {
      title: 'Midnight City Drift',
      artist: 'Lo-Fi Chill • Deep Flow',
      duration: '2:30',
      src: '/assets/song3.mp3',
      fallbackSrc: 'https://actions.google.com/sounds/v1/ambiences/outdoor_evening.ogg',
      albumArt: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=300&auto=format&fit=crop',
    },
  ];

  // Spotify Audio Playback synchronization
  useEffect(() => {
    if (!audioRef.current) return;
    const currentTrack = SPOTIFY_TRACKS[spotifyTrackIndex];
    if (isSpotifyPlaying) {
      // Set track source if not already set
      if (!audioRef.current.src || !audioRef.current.src.includes(currentTrack.src.replace(/^\//, ''))) {
        audioRef.current.src = currentTrack.src;
      }
      audioRef.current.volume = volumeLevel / 100;
      audioRef.current.play().catch(() => {
        // If local /assets/song.mp3 does not exist, try fallback stream
        if (audioRef.current && currentTrack.fallbackSrc) {
          audioRef.current.src = currentTrack.fallbackSrc;
          audioRef.current.play().catch(() => {
            setIsSpotifyPlaying(false);
          });
        }
      });
    } else {
      audioRef.current.pause();
    }
  }, [isSpotifyPlaying, spotifyTrackIndex, volumeLevel]);

  // Pause audio when phone is closed
  useEffect(() => {
    if (!isOpen && audioRef.current) {
      audioRef.current.pause();
      setIsSpotifyPlaying(false);
    }
  }, [isOpen]);

  // Live Date & Time
  const [useLiveClock, setUseLiveClock] = useState<boolean>(true);
  const [currentTimeDisplay, setCurrentTimeDisplay] = useState<string>(() => {
    const now = new Date();
    let hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes();
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  });

  const [liveDate, setLiveDate] = useState<{
    dayNumber: number;
    monthShort: string;
    weekday: string;
    fullFormatted: string;
  }>(() => {
    const now = new Date();
    return {
      dayNumber: now.getDate(),
      monthShort: now.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
      weekday: now.toLocaleDateString('en-US', { weekday: 'long' }),
      fullFormatted: now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }),
    };
  });

  // Keep live time and date updating continuously every second
  useEffect(() => {
    const updateTimeAndDate = () => {
      const now = new Date();
      let hours = now.getHours() % 12 || 12;
      const minutes = now.getMinutes();
      setCurrentTimeDisplay(`${hours}:${minutes < 10 ? '0' : ''}${minutes}`);

      setLiveDate({
        dayNumber: now.getDate(),
        monthShort: now.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
        weekday: now.toLocaleDateString('en-US', { weekday: 'long' }),
        fullFormatted: now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }),
      });
    };

    updateTimeAndDate();
    const interval = setInterval(updateTimeAndDate, 1000);
    return () => clearInterval(interval);
  }, []);

  // Lock body scroll and handle cleanup
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('photo-wall-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('photo-wall-open');
      setActiveApp(null);
      setIsScreenOn(true);
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('photo-wall-open');
    };
  }, [isOpen]);

  // Animate phone in on open
  useEffect(() => {
    if (!isOpen) return;

    const overlay = overlayRef.current;
    const phone = phoneWrapperRef.current;
    if (!overlay || !phone) return;

    gsap.set(overlay, { autoAlpha: 0 });
    gsap.set(phone, {
      autoAlpha: 0,
      scale: 0.82,
      y: 60,
      rotationX: 10,
      rotationY: -3,
      transformPerspective: 1200,
    });

    const tl = gsap.timeline();
    tl.to(overlay, {
      autoAlpha: 1,
      duration: 0.35,
      ease: 'power2.out',
    });
    tl.to(
      phone,
      {
        autoAlpha: 1,
        scale: 1,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        duration: 0.65,
        ease: 'power3.out',
      },
      '-=0.15'
    );

    return () => {
      tl.kill();
    };
  }, [isOpen]);

  // ESC to close or back
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isAssetDrawerOpen) {
          setIsAssetDrawerOpen(false);
        } else if (activeApp) {
          setActiveApp(null);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeApp, isAssetDrawerOpen, onClose]);

  // Trigger volume HUD on button click
  const triggerVolumeHud = (newVol: number) => {
    setVolumeLevel(newVol);
    setShowVolumeHud(true);
    if (volumeTimerRef.current) clearTimeout(volumeTimerRef.current);
    volumeTimerRef.current = setTimeout(() => {
      setShowVolumeHud(false);
    }, 1800);
  };

  const handleVolumeUp = () => {
    if (!isScreenOn) {
      setIsScreenOn(true);
      return;
    }
    const next = Math.min(100, volumeLevel + 10);
    triggerVolumeHud(next);
  };

  const handleVolumeDown = () => {
    if (!isScreenOn) {
      setIsScreenOn(true);
      return;
    }
    const next = Math.max(0, volumeLevel - 10);
    triggerVolumeHud(next);
  };

  const handlePowerToggle = () => {
    setIsScreenOn((prev) => !prev);
    if (isScreenOn) {
      showToast('Screen Locked');
    } else {
      showToast('Screen Unlocked');
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2200);
  };

  // Launch an app
  const handleLaunchApp = (app: PhoneAppConfig) => {
    if (!isScreenOn) return;

    // 1. Gallery / Photo Wall
    if (app.id === 'gallery') {
      handleGalleryClick();
      return;
    }

    // 2. Instagram
    if (app.id === 'instagram') {
      const instaUrl = 'https://www.instagram.com/the.unscripted.storiess?stkn=MXNnc3N2bHluaWxtNw==';
      const link = document.createElement('a');
      link.href = instaUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('Opening Instagram (@the.unscripted.storiess) ↗');
      return;
    }

    // 3. Samsung Notes (directed by user)
    if (app.id === 'notes' || app.category === 'notes') {
      setActiveApp(app);
      return;
    }

    // All other apps: Do not open anything unless directed
  };

  // Video fallback handler
  const handleVideoError = () => {
    if (activeApp && activeApp.videoFallback && videoSrc !== activeApp.videoFallback) {
      setVideoSrc(activeApp.videoFallback);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setProgress((curr / dur) * 100);

    const format = (t: number) => {
      const mins = Math.floor(t / 60);
      const secs = Math.floor(t % 60);
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    setCurrentTime(format(curr));
    if (videoRef.current.duration) {
      setDuration(format(dur));
    }
  };

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickPos = (e.clientX - rect.left) / rect.width;
    const targetTime = clickPos * (videoRef.current.duration || 0);
    videoRef.current.currentTime = targetTime;
  };

  const handleGalleryClick = () => {
    const phone = phoneWrapperRef.current;
    if (!phone) {
      onClose();
      onOpenPhotoWall();
      return;
    }

    gsap.to(phone, {
      scale: 3,
      autoAlpha: 0,
      duration: 0.55,
      ease: 'power3.inOut',
      onComplete: () => {
        onClose();
        onOpenPhotoWall();
      },
    });
  };

  // Handle uploading or setting image asset for app icons (supports single or multi-file upload)
  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file: File) => {
      const fileName = file.name.toLowerCase();
      let matchedAppId = selectedAppForUpload;
      if (fileName.includes('meet')) matchedAppId = 'meet';
      else if (fileName.includes('outlook') || fileName.includes('mail')) matchedAppId = 'outlook';
      else if (fileName.includes('notes') || fileName.includes('note')) matchedAppId = 'notes';
      else if (fileName.includes('ytm') || fileName.includes('music')) matchedAppId = 'ytmusic';
      else if (fileName === 'yt.png' || fileName.includes('youtube')) matchedAppId = 'youtube';
      else if (fileName.includes('map')) matchedAppId = 'maps';
      else if (fileName.includes('wp') || fileName.includes('what')) matchedAppId = 'whatsapp';
      else if (fileName.includes('capcut')) matchedAppId = 'capcut';
      else if (fileName.includes('phone') || fileName.includes('call')) matchedAppId = 'phone';
      else if (fileName.includes('gallery') || fileName.includes('photo')) matchedAppId = 'gallery';
      else if (fileName.includes('spotify')) matchedAppId = 'spotify';
      else if (fileName.includes('insta')) matchedAppId = 'instagram';
      else if (fileName.includes('vn')) matchedAppId = 'vn';

      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomIconImages((prev) => ({
            ...prev,
            [matchedAppId]: result,
          }));
          setFailedImageLoads((prev) => ({
            ...prev,
            [matchedAppId]: false,
          }));
        }
      };
      reader.readAsDataURL(file);
    });

    showToast(`Asset upload processed (${files.length} file${files.length > 1 ? 's' : ''})`);
  };

  // =========================================================================
  // APP DEFINITIONS: 2 Rows + Dock (Matching screenshot exactly)
  // =========================================================================
  const ROW1_APPS: PhoneAppConfig[] = [
    {
      id: 'meet',
      name: 'Meet',
      label: 'Google Meet',
      category: 'interactive',
      renderVectorIcon: () => (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <rect width="60" height="60" rx="18" fill="#ffffff" />
          <g transform="translate(13, 16) scale(0.72)">
            <rect x="0" y="4" width="28" height="34" rx="6" fill="#00832d" />
            <rect x="0" y="4" width="28" height="9" rx="4.5" fill="#2684fc" />
            <path d="M0 24h28v14H6a6 6 0 0 1-6-6V24z" fill="#00ac47" />
            <path d="M28 13l18-10v36l-18-10V13z" fill="#0066da" />
            <path d="M28 13v16l18-8-18-8z" fill="#ea4335" />
            <path d="M28 13l18-10v8l-18 2z" fill="#ffba00" />
          </g>
        </svg>
      ),
    },
    {
      id: 'outlook',
      name: 'Outlook',
      label: 'Microsoft Outlook',
      category: 'interactive',
      renderVectorIcon: () => (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <rect width="60" height="60" rx="18" fill="#ffffff" />
          <g transform="translate(12, 13) scale(0.68)">
            <path d="M26 4h18a6 6 0 0 1 6 6v32a6 6 0 0 1-6 6H26V4z" fill="#0078d4" />
            <path d="M26 12l24 16V10a6 6 0 0 0-6-6H26v8z" fill="#28a8ea" />
            <path d="M26 28l24 16H32a6 6 0 0 1-6-4V28z" fill="#005a9e" />
            <rect x="2" y="10" width="30" height="32" rx="6" fill="#106ebe" />
            <ellipse cx="17" cy="26" rx="8" ry="9" fill="none" stroke="#ffffff" strokeWidth="4.5" />
          </g>
        </svg>
      ),
    },
    {
      id: 'notes',
      name: 'Notes',
      label: 'Samsung Notes',
      category: 'notes',
      tagline: 'Thoughts & Ideas',
      title: 'Craft, Obsession & Design Philosophy',
      description: 'Unfiltered musings on design philosophy, interface honesty, tactile hardware, and craft.',
      renderVectorIcon: () => (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <rect width="60" height="60" rx="18" fill="#e53935" />
          <g transform="translate(16, 14) scale(0.72)">
            <path d="M8 2h24a6 6 0 0 1 6 6v30a6 6 0 0 1-6 6H8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z" fill="#ffffff" />
            <circle cx="8" cy="11" r="2.2" fill="#e53935" />
            <circle cx="8" cy="22" r="2.2" fill="#e53935" />
            <circle cx="8" cy="33" r="2.2" fill="#e53935" />
            <rect x="14" y="10" width="16" height="4" rx="2" fill="#fca5a5" opacity="0.6" />
            <rect x="14" y="18" width="16" height="4" rx="2" fill="#fca5a5" opacity="0.6" />
            <rect x="14" y="26" width="11" height="4" rx="2" fill="#fca5a5" opacity="0.6" />
          </g>
        </svg>
      ),
    },
  ];

  const ROW2_APPS: PhoneAppConfig[] = [
    {
      id: 'youtube',
      name: 'YouTube',
      label: 'YouTube',
      category: 'video',
      tagline: 'Motion & Cuts',
      title: 'Visual Rhythms & Motion Editing',
      description: 'Cutting footage to music, experimenting with match-cuts, kinetic type, and storytelling through micro-pacing.',
      videoSrc: '/assets/moni-video.mp4',
      videoFallback: '/assets/moni-video.mp4',
      renderVectorIcon: () => (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <rect width="60" height="60" rx="18" fill="#ffffff" />
          <rect x="12" y="18" width="36" height="24" rx="7" fill="#ff0000" />
          <polygon points="26,24 38,30 26,36" fill="#ffffff" />
        </svg>
      ),
    },
    {
      id: 'maps',
      name: 'Maps',
      label: 'Google Maps',
      category: 'interactive',
      renderVectorIcon: () => (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <rect width="60" height="60" rx="18" fill="#ffffff" />
          <g transform="translate(16, 12) scale(0.95)">
            <path d="M15 1C8.92 1 4 5.92 4 12c0 4.14 2.37 7.73 5.86 9.53L15 29l5.14-7.47C23.63 19.73 26 16.14 26 12c0-6.08-4.92-11-11-11z" fill="#ea4335" />
            <path d="M26 12c0 4.14-2.37 7.73-5.86 9.53L15 29V12h11z" fill="#fbbc04" />
            <path d="M15 29l-5.14-7.47C6.37 19.73 4 16.14 4 12h11v17z" fill="#34a853" />
            <path d="M15 1v11H4C4 5.92 8.92 1 15 1z" fill="#4285f4" />
            <circle cx="15" cy="12" r="4.2" fill="#ffffff" />
          </g>
        </svg>
      ),
    },
    {
      id: 'ytmusic',
      name: 'YT Music',
      label: 'YouTube Music',
      category: 'video',
      tagline: 'Late Night Beats',
      title: 'Soundtracks for Deep Focus',
      description: 'Lofi rhythms, modular synth loops, and synth melodies that power deep design sessions.',
      videoSrc: '/assets/moni-active.mp4',
      videoFallback: '/assets/moni-video.mp4',
      renderVectorIcon: () => (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <rect width="60" height="60" rx="18" fill="#ffffff" />
          <circle cx="30" cy="30" r="19" fill="#ff0000" />
          <circle cx="30" cy="30" r="11" fill="none" stroke="#ffffff" strokeWidth="2.6" />
          <polygon points="27,24 36,30 27,36" fill="#ffffff" />
        </svg>
      ),
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      label: 'WhatsApp',
      category: 'interactive',
      renderVectorIcon: () => (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <rect width="60" height="60" rx="18" fill="#25d366" />
          <g transform="translate(13, 13) scale(0.95)">
            <path
              d="M30.2 17.5a13.5 13.5 0 0 0-23 9.6c0 2.4.6 4.7 1.8 6.7L6 42l8.4-2.7a13.4 13.4 0 0 0 6.2 1.6h.1a13.5 13.5 0 0 0 9.5-23.4z"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.5 13.8c-.4-.8-.8-.8-1.2-.8-.3 0-.7 0-1.1.4-.4.4-1.5 1.5-1.5 3.6s1.6 4.2 1.8 4.5c.2.3 3 4.8 7.5 6.6 3.7 1.5 4.5 1.2 5.3 1.1.8-.1 2.6-1.1 3-2.1.4-1 .4-1.9.3-2.1-.1-.2-.4-.3-.9-.6s-2.6-1.3-3-1.5c-.4-.2-.7-.3-1 .2-.3.4-1.1 1.4-1.4 1.7-.3.3-.5.3-1 .1-.5-.2-2-.7-3.8-2.3-1.4-1.2-2.3-2.8-2.6-3.2-.3-.5 0-.7.2-1 .2-.2.5-.5.7-.8.2-.3.3-.5.5-.8.2-.3.1-.6 0-.8s-1.1-2.7-1.5-3.6z"
              fill="#ffffff"
            />
          </g>
        </svg>
      ),
    },
    {
      id: 'capcut',
      name: 'CapCut',
      label: 'CapCut',
      category: 'video',
      tagline: 'Motion & CutLab',
      title: 'Creative Cuts & Pacing',
      description: 'Color grading daily video snippets in DaVinci Resolve & CapCut, finding rhythm in mundane moments.',
      videoSrc: '/assets/tangible-game.mp4',
      videoFallback: '/assets/moni-video.mp4',
      renderVectorIcon: () => (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <rect width="60" height="60" rx="18" fill="#ffffff" />
          <g transform="translate(12, 12)">
            <path d="M4 14h18l-8 7H0l4-7z" fill="#050505" />
            <path d="M32 14H14l8 7h14l-4-7z" fill="#050505" />
            <path d="M0 22h14l8 7H4l-4-7z" fill="#050505" />
            <path d="M14 22h18l-4 7H14v-7z" fill="#050505" />
          </g>
        </svg>
      ),
    },
  ];

  const DOCK_APPS: PhoneAppConfig[] = [
    {
      id: 'phone',
      name: 'Phone',
      label: 'Phone',
      category: 'interactive',
      renderVectorIcon: () => (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <rect width="60" height="60" rx="18" fill="#22c55e" />
          <g transform="translate(15, 14) scale(0.95)">
            <path
              d="M25.2 19.3c-1.2-.8-2.8-.8-3.9 0l-2.4 1.7c-.5.4-1.1.4-1.6.1-3.6-2-6.5-4.9-8.5-8.5-.3-.5-.3-1.1.1-1.6l1.7-2.4c.8-1.1.8-2.7 0-3.9L8.3 1.5C7.2.5 5.5.5 4.4 1.6L1.8 4.2C-.4 6.4-.6 9.8.8 12.6c3.4 6.8 9 12.4 15.8 15.8 2.8 1.4 6.2 1.2 8.4-1l2.6-2.6c1.1-1.1 1.1-2.8 0-3.9l-2.4-1.6z"
              fill="#ffffff"
            />
          </g>
        </svg>
      ),
    },
    {
      id: 'gallery',
      name: 'Gallery',
      label: 'Samsung Gallery',
      category: 'gallery',
      renderVectorIcon: () => (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <defs>
            <linearGradient id="reactGalleryGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f72585" />
              <stop offset="35%" stopColor="#ff477e" />
              <stop offset="70%" stopColor="#ff7043" />
              <stop offset="100%" stopColor="#ff9e00" />
            </linearGradient>
          </defs>
          <rect width="60" height="60" rx="18" fill="url(#reactGalleryGrad)" />
          <g transform="translate(30, 30)">
            <circle cx="0" cy="0" r="5.2" fill="#ffffff" />
            <ellipse cx="0" cy="-12" rx="4.8" ry="7.5" fill="#ffffff" />
            <ellipse cx="10.4" cy="-6" rx="4.8" ry="7.5" transform="rotate(60 10.4 -6)" fill="#ffffff" />
            <ellipse cx="10.4" cy="6" rx="4.8" ry="7.5" transform="rotate(120 10.4 6)" fill="#ffffff" />
            <ellipse cx="0" cy="12" rx="4.8" ry="7.5" fill="#ffffff" />
            <ellipse cx="-10.4" cy="6" rx="4.8" ry="7.5" transform="rotate(240 -10.4 6)" fill="#ffffff" />
            <ellipse cx="-10.4" cy="-6" rx="4.8" ry="7.5" transform="rotate(300 -10.4 -6)" fill="#ffffff" />
          </g>
        </svg>
      ),
    },
    {
      id: 'spotify',
      name: 'Spotify',
      label: 'Spotify',
      category: 'video',
      tagline: 'Ambient & Lo-Fi',
      title: 'Modular Synths & Beats',
      description: 'Lofi rhythms, Japanese ambient, deep basslines, and synth melodies that power 2 AM design sessions.',
      videoSrc: '/assets/moni-active.mp4',
      videoFallback: '/assets/moni-video.mp4',
      renderVectorIcon: () => (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <rect width="60" height="60" rx="18" fill="#121212" />
          <circle cx="30" cy="30" r="20" fill="#1ed760" />
          <g stroke="#121212" strokeLinecap="round" fill="none">
            <path d="M19.5 24c5.5-1.5 13-1 18.5 2" strokeWidth="3.6" />
            <path d="M21 28.5c4.5-1.2 11-.8 15.5 1.8" strokeWidth="3" />
            <path d="M22.5 33c3.8-.9 9-.5 12.8 1.5" strokeWidth="2.4" />
          </g>
        </svg>
      ),
    },
    {
      id: 'instagram',
      name: 'Instagram',
      label: 'Instagram',
      category: 'video',
      tagline: '@the.unscripted.storiess',
      title: 'Visual Journal & Creative Process',
      description: 'Behind-the-scenes glimpses, sketches in transit, coffee runs, and raw snapshots of work in progress.',
      videoSrc: '/assets/moni-video.mp4',
      videoFallback: '/assets/moni-video.mp4',
      renderVectorIcon: () => (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <defs>
            <radialGradient id="reactInstaGrad" cx="30%" cy="105%" r="130%">
              <stop offset="0%" stopColor="#ffdf9e" />
              <stop offset="10%" stopColor="#ffc272" />
              <stop offset="35%" stopColor="#f53760" />
              <stop offset="60%" stopColor="#d6249f" />
              <stop offset="90%" stopColor="#285aeb" />
            </radialGradient>
          </defs>
          <rect width="60" height="60" rx="18" fill="url(#reactInstaGrad)" />
          <g fill="none" stroke="#ffffff" strokeWidth="3.2">
            <rect x="15" y="15" width="30" height="30" rx="8.5" />
            <circle cx="30" cy="30" r="7.5" />
          </g>
          <circle cx="38.5" cy="21.5" r="2.2" fill="#ffffff" />
        </svg>
      ),
    },
    {
      id: 'vn',
      name: 'VN',
      label: 'VN Editor',
      category: 'video',
      tagline: 'Cinematic Timeline',
      title: 'Vignettes & Pacing',
      description: 'Crafting micro-interactions, responsive pacing, and video essays on design tools.',
      videoSrc: '/assets/tangible-game.mp4',
      videoFallback: '/assets/moni-video.mp4',
      renderVectorIcon: () => (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <rect width="60" height="60" rx="18" fill="#ffffff" />
          <text
            x="30"
            y="38"
            fontFamily="'Inter', system-ui, sans-serif"
            fontWeight="900"
            fontSize="22"
            textAnchor="middle"
            fill="#050505"
            letterSpacing="-0.04em"
          >
            VN
          </text>
        </svg>
      ),
    },
  ];

  // Helper renderer for app icon with dedicated app icon assets & equal square proportion
  const renderAppIcon = (app: PhoneAppConfig, isDock = false) => {
    const customImg = customIconImages[app.id];
    const hasFailed = failedImageLoads[app.id];
    const shouldUseImage = !showGreySquareHolders && customImg && !hasFailed;

    return (
      <button
        key={app.id}
        type="button"
        onClick={() => handleLaunchApp(app)}
        aria-label={app.label}
        title={app.label}
        className="relative w-[50px] h-[50px] sm:w-[54px] sm:h-[54px] aspect-square rounded-[16px] p-0 border-0 bg-transparent cursor-pointer transition-all duration-150 hover:scale-105 active:scale-95 group focus:outline-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)] flex items-center justify-center"
      >
        {/* Grey Square Image Holder Mode (optional toggle) vs Dedicated Asset Image Mode */}
        {showGreySquareHolders ? (
          <div className="w-full h-full rounded-[16px] bg-gradient-to-b from-[#383c48] via-[#2d303a] to-[#22252e] border-0 shadow-none flex flex-col items-center justify-center transition-all">
            {/* Universal Image Placeholder Icon */}
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-white/50 group-hover:text-white/85 transition-colors drop-shadow-sm"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
        ) : (
          <div className="w-full h-full rounded-[16px] overflow-hidden flex items-center justify-center bg-transparent border-0 shadow-none transition-all">
            {shouldUseImage ? (
              <img
                src={customImg}
                alt={app.label}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[16px]"
                onError={(e) => {
                  const target = e.currentTarget;
                  const altName = app.id === 'youtube' ? 'yt' : app.id === 'ytmusic' ? 'ytm' : app.id === 'whatsapp' ? 'wp' : app.id === 'instagram' ? 'insta' : app.id;
                  const fallbacks = [
                    `/assets/${altName}.png`,
                    `/assets/icons/${altName}.png`,
                    `/${altName}.png`,
                  ];
                  const step = parseInt(target.dataset.fallbackStep || '0', 10);
                  if (step < fallbacks.length) {
                    target.dataset.fallbackStep = (step + 1).toString();
                    target.src = fallbacks[step];
                  } else {
                    setFailedImageLoads((prev) => ({ ...prev, [app.id]: true }));
                  }
                }}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white/50 group-hover:text-white/85 transition-colors drop-shadow-sm"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
            )}
          </div>
        )}
      </button>
    );
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={overlayRef}
      role="dialog"
      aria-label="Shreya's Mobile Phone Mockup"
      onClick={(e) => {
        if (e.target === overlayRef.current) {
          onClose();
        }
      }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-xl select-none overflow-y-auto p-4 sm:p-6"
    >
      {/* ========================================================================= */}
      {/* ANIMATED MOVING GREEN-GREY GRADIENT BACKGROUND BEHIND THE PHONE          */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Deep base vignette scrim */}
        <div className="absolute inset-0 bg-[#07080a]/85 backdrop-blur-2xl" />

        {/* Ambient Moving Blob 1: Muted Lime & Sage Green Glow */}
        <div className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-br from-[#B6D63A]/30 via-[#4d7c0f]/20 to-transparent blur-[110px] opacity-75 animate-green-grey-1" />

        {/* Ambient Moving Blob 2: Deep Slate & Smoke Grey Orb */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-tl from-[#64748b]/35 via-[#334155]/30 to-transparent blur-[125px] opacity-80 animate-green-grey-2" />

        {/* Ambient Moving Blob 3: Center Ethereal Sage-Emerald Mesh */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vw] max-w-[520px] max-h-[520px] rounded-full bg-gradient-to-r from-[#1e3a2f]/45 via-[#374151]/35 to-[#84cc16]/20 blur-[100px] opacity-70 animate-green-grey-3" />

        {/* Subtle atmospheric radial noise / grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #B6D63A 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* Top Controls: Minimal Top Right Close Button */}
      <div className="fixed top-4 sm:top-6 right-4 sm:right-8 z-[210] pointer-events-auto">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Phone"
          className="flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#181818]/90 hover:bg-[#252525] border border-white/20 hover:border-[#B6D63A] text-white hover:text-[#B6D63A] text-xs font-syne uppercase tracking-wider transition-all cursor-pointer shadow-2xl backdrop-blur-md group"
        >
          <span>CLOSE</span>
          <X className="w-4 h-4 ml-0.5 transition-transform group-hover:rotate-90" />
          <span className="hidden md:inline text-[10px] opacity-60 ml-0.5">[ESC]</span>
        </button>
      </div>

      {/* Hidden File Input for Image Assets (supports multiple files at once) */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageFileChange}
        className="hidden"
      />

      {/* ========================================================================= */}
      {/* PHONE HARDWARE CHASSIS WITH ALL 3 BUTTONS ON RIGHT SIDE                   */}
      {/* ========================================================================= */}
      <div className="relative my-auto flex items-center justify-center pt-8 pb-4">
        
        {/* Main Phone Body (~390x844 aspect ratio container) */}
        <div
          ref={phoneWrapperRef}
          className="relative w-[340px] sm:w-[380px] h-[720px] sm:h-[790px] max-h-[88vh] rounded-[52px] p-[11px] bg-[#0d0f14] border-[3.5px] border-[#2c303c] flex flex-col isolate"
          style={{
            boxShadow:
              '0 30px 100px rgba(0,0,0,0.95), 0 0 45px rgba(182,214,58,0.12), inset 0 1px 2px rgba(255,255,255,0.3)',
          }}
        >
          {/* ===================================================================== */}
          {/* 3 HARDWARE BUTTONS ALL ON THE RIGHT SIDE                             */}
          {/* (1) VOLUME UP, (2) VOLUME DOWN, (3) POWER BUTTON                      */}
          {/* ===================================================================== */}
          
          {/* 1. VOLUME UP BUTTON (TOP-RIGHT SIDE) */}
          <button
            type="button"
            onClick={handleVolumeUp}
            title="Volume Up (Click to test)"
            aria-label="Hardware Volume Up Button"
            className="absolute -right-[7px] top-[135px] w-[5px] h-[48px] bg-gradient-to-r from-[#2c303d] via-[#484f63] to-[#252934] rounded-r-md cursor-pointer transition-all duration-100 hover:w-[6px] hover:bg-[#6b7696] active:translate-x-[1px] active:w-[4px] shadow-[1px_2px_4px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.4)] z-50 group"
          >
            <span className="sr-only">Volume Up</span>
            {/* Visual Hover Tooltip Badge */}
            <span className="absolute right-full mr-2.5 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-black/80 border border-white/20 text-[#B6D63A] text-[9px] font-syne whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              VOL +
            </span>
          </button>

          {/* 2. VOLUME DOWN BUTTON (MID-RIGHT SIDE) */}
          <button
            type="button"
            onClick={handleVolumeDown}
            title="Volume Down (Click to test)"
            aria-label="Hardware Volume Down Button"
            className="absolute -right-[7px] top-[192px] w-[5px] h-[48px] bg-gradient-to-r from-[#2c303d] via-[#484f63] to-[#252934] rounded-r-md cursor-pointer transition-all duration-100 hover:w-[6px] hover:bg-[#6b7696] active:translate-x-[1px] active:w-[4px] shadow-[1px_2px_4px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.4)] z-50 group"
          >
            <span className="sr-only">Volume Down</span>
            {/* Visual Hover Tooltip Badge */}
            <span className="absolute right-full mr-2.5 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-black/80 border border-white/20 text-[#B6D63A] text-[9px] font-syne whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              VOL -
            </span>
          </button>

          {/* 3. POWER / SLEEP BUTTON (BELOW VOLUME BUTTONS ON RIGHT SIDE) */}
          <button
            type="button"
            onClick={handlePowerToggle}
            title="Power Key (Click to toggle screen sleep/wake)"
            aria-label="Hardware Power Button"
            className="absolute -right-[7px] top-[256px] w-[5px] h-[52px] bg-gradient-to-r from-[#2c303d] via-[#525a72] to-[#252934] rounded-r-md cursor-pointer transition-all duration-100 hover:w-[6px] hover:bg-[#B6D63A] active:translate-x-[1px] active:w-[4px] shadow-[1px_2px_4px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.4)] z-50 group"
          >
            <span className="sr-only">Power / Lock Button</span>
            {/* Visual Hover Tooltip Badge */}
            <span className="absolute right-full mr-2.5 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-black/80 border border-white/20 text-[#B6D63A] text-[9px] font-syne whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              POWER / LOCK
            </span>
          </button>

          {/* Earpiece speaker slit at very top */}
          <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-16 h-[3px] bg-black/90 rounded-full z-40 border-b border-white/10" />

          {/* ===================================================================== */}
          {/* SAMSUNG INFINITY DISPLAY SCREEN                                       */}
          {/* ===================================================================== */}
          <div className="relative w-full h-full rounded-[42px] overflow-hidden bg-black flex flex-col justify-between select-none">
            
            {/* Glass Glare Highlight */}
            <div className="absolute inset-0 pointer-events-none z-40 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] rounded-[42px]" />

            {/* SCREEN SLEEP / OFF BLACKOUT OVERLAY */}
            {!isScreenOn && (
              <div
                onClick={handlePowerToggle}
                className="absolute inset-0 z-50 bg-[#050507] flex flex-col items-center justify-center cursor-pointer text-white/50 p-6 animate-in fade-in duration-300"
              >
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-white/40">
                    <Power className="w-5 h-5 text-[#B6D63A]" />
                  </div>
                  <div className="font-syne text-3xl text-white/80 font-bold tracking-tight">
                    {currentTimeDisplay}
                  </div>
                  <p className="font-syne text-[11px] text-white/40">
                    Screen Standby · Tap screen or Right Power Key to wake
                  </p>
                </div>
              </div>
            )}

            {/* ON-SCREEN VOLUME SLIDER HUD (ACTIVATED BY HARDWARE BUTTONS) */}
            {showVolumeHud && isScreenOn && (
              <div className="absolute right-3 top-24 z-50 bg-black/75 backdrop-blur-xl border border-white/20 rounded-2xl p-2.5 flex flex-col items-center gap-2 shadow-2xl animate-in slide-in-from-right-4 duration-200">
                <Volume2 className="w-4 h-4 text-[#B6D63A]" />
                <div className="w-2 h-24 bg-white/20 rounded-full overflow-hidden flex flex-col justify-end">
                  <div
                    className="w-full bg-[#B6D63A] rounded-full transition-all duration-150"
                    style={{ height: `${volumeLevel}%` }}
                  />
                </div>
                <span className="font-syne text-[10px] text-white font-bold">{volumeLevel}%</span>
              </div>
            )}

            {/* TOAST NOTIFICATION HUD */}
            {toastMessage && isScreenOn && (
              <div className="absolute top-16 left-1/2 -translate-x-1/2 z-50 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[#B6D63A] font-syne text-[11px] shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                {toastMessage}
              </div>
            )}

            {/* =================================================================== */}
            {/* WALLPAPER IMAGE ASSET FROM ASSETS                                   */}
            {/* =================================================================== */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#0c0d14]">
              <img
                src={wallpaperSrc}
                alt="Phone Wallpaper"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  const target = e.currentTarget;
                  const fallbacks = [
                    '/assets/wallpaper.png',
                    '/assets/moni-mobile-bg.png',
                    '/assets/wallpaper.webp',
                  ];
                  const step = parseInt(target.dataset.fallbackStep || '0', 10);
                  if (step < fallbacks.length) {
                    target.dataset.fallbackStep = (step + 1).toString();
                    target.src = fallbacks[step];
                  }
                }}
              />
            </div>

            {/* =================================================================== */}
            {/* STATUS BAR (9:41, WI-FI 6, SIGNAL BARS, BATTERY 69 PILL)           */}
            {/* =================================================================== */}
            <div className="relative z-30 pt-3.5 px-6 pb-1 flex items-center justify-between text-white text-shadow font-sans select-none pointer-events-none">
              {/* Left: Time 9:41 */}
              <span className="font-bold text-[14px] tracking-tight">{currentTimeDisplay}</span>

              {/* Exact Center: Punch-hole selfie camera locked to true horizontal center */}
              <div className="absolute left-1/2 top-4 -translate-x-1/2 w-3 h-3 rounded-full bg-black border border-[#2a2933] shadow-inner flex items-center justify-center pointer-events-none">
                <div className="w-1 h-1 rounded-full bg-[#10192e]" />
              </div>

              {/* Right: Wi-Fi 6, 4 signal bars, Battery Pill reading 69 */}
              <div className="flex items-center gap-1.5">
                {/* Wi-Fi 6 Indicator */}
                <div className="flex items-center relative">
                  <svg className="w-3.5 h-3 fill-white" viewBox="0 0 24 24">
                    <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4zm0 3.5c3.78 0 7.22 1.48 9.77 3.9L12 18.27 2.23 11.4C4.78 8.98 8.22 7.5 12 7.5z" />
                  </svg>
                  <span className="text-[7.5px] font-black -mt-1 ml-0.5">6</span>
                </div>

                {/* 4 Signal Bars */}
                <div className="flex items-end gap-[1.5px] h-3 ml-0.5">
                  <div className="w-[2.2px] h-[3.5px] bg-white rounded-[0.5px]" />
                  <div className="w-[2.2px] h-[6px] bg-white rounded-[0.5px]" />
                  <div className="w-[2.2px] h-[9px] bg-white rounded-[0.5px]" />
                  <div className="w-[2.2px] h-[12px] bg-white rounded-[0.5px]" />
                </div>

                {/* Battery Pill with "69" */}
                <div className="bg-white rounded-full px-1.5 py-[1px] flex items-center justify-center shadow-sm">
                  <span className="text-black font-black text-[9.5px] leading-none">69</span>
                </div>
              </div>
            </div>

            {/* =================================================================== */}
            {/* SCREEN MAIN BODY: HOME SCREEN MOCKUP vs ACTIVE APP VIEW             */}
            {/* =================================================================== */}
            <div className="relative z-20 flex-1 overflow-hidden flex flex-col justify-between p-3.5 pt-1 font-sans">
              
              {/* ----------------------------------------------------------------- */}
              {/* HOME SCREEN WIDGETS & APP ICONS                                   */}
              {/* ----------------------------------------------------------------- */}
              <div
                className={`w-full h-full flex flex-col justify-between transition-all duration-300 ${
                  activeApp ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100 scale-100'
                }`}
              >
                {/* WIDGETS SECTION */}
                <div className="space-y-3">
                  {/* 1. Frosted Weather Widget */}
                  <div
                    onClick={() => showToast('Weather: 27° Ramdas Swami Marg')}
                    role="button"
                    tabIndex={0}
                    className="bg-[#163c73]/45 hover:bg-[#163c73]/55 backdrop-blur-2xl border border-white/20 rounded-[28px] p-3.5 flex items-center justify-between text-white shadow-lg cursor-pointer transition-transform hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <div className="flex items-center gap-3">
                      {/* Sun + Cloud Art */}
                      <div className="w-10 h-10 relative shrink-0">
                        <div className="absolute right-0.5 top-0.5 w-5 h-5 rounded-full bg-[#fbb01b] shadow-[0_0_8px_rgba(251,176,27,0.8)]" />
                        <svg viewBox="0 0 48 48" className="w-full h-full relative z-10">
                          <path
                            d="M12 37h24a8 8 0 0 0 0-16 10 10 0 0 0-19.5-2.5A7.5 7.5 0 0 0 12 37z"
                            fill="#ffffff"
                          />
                        </svg>
                      </div>

                      <div>
                        <div className="text-2xl font-bold leading-none tracking-tight">27°</div>
                        <div className="flex items-center gap-1 text-[11px] font-medium text-white/90 mt-1">
                          <MapPin className="w-2.5 h-2.5 text-white/80" />
                          <span className="truncate max-w-[95px]">Ramdas Swam...</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-semibold">Mostly Cloudy</div>
                      <div className="text-[11px] text-white/80 mt-0.5">↑29° / ↓22°</div>
                    </div>
                  </div>

                  {/* 2. TWO WIDGETS SIDE-BY-SIDE: Album Widget & Notes Widget */}
                  <div className="grid grid-cols-2 gap-3 items-stretch">
                    {/* Left: Photo Album Widget with Hero Left Cover Photo (Launches Photo Wall) */}
                    <div
                      onClick={handleGalleryClick}
                      role="button"
                      tabIndex={0}
                      className="relative overflow-hidden rounded-[28px] p-3.5 flex flex-col justify-end border border-white/35 shadow-lg min-h-[148px] sm:min-h-[154px] cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all group isolate"
                      title="Tap to launch Photo Wall"
                    >
                      {/* Album Cover Photo from Hero Left */}
                      <div className="absolute inset-0 z-0 overflow-hidden bg-[#1a1b24]">
                        <img
                          src="/assets/hero-left.png"
                          alt="Album Cover"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center filter saturate-[1.05] contrast-[1.02] group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.currentTarget;
                            const fallbacks = [
                              '/assets/shreya-photo.png',
                              'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=600&auto=format&fit=crop',
                              'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop',
                            ];
                            const step = parseInt(target.dataset.fallbackStep || '0', 10);
                            if (step < fallbacks.length) {
                              target.dataset.fallbackStep = (step + 1).toString();
                              target.src = fallbacks[step];
                            }
                          }}
                        />
                        {/* Gradient Scrim for crisp readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                      </div>

                      {/* Bottom Click Here Badge / CTA */}
                      <div className="relative z-10 w-full flex items-center justify-start pb-0.5">
                        <span className="font-sans text-[16px] sm:text-[17px] font-semibold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] group-hover:text-[#B6D63A] transition-colors leading-tight">
                          Click Here
                        </span>
                      </div>
                    </div>

                    {/* Right: Notes Widget (Exact Samsung One UI style matching user screenshot) */}
                    <div
                      onClick={() => handleLaunchApp(ROW1_APPS[2])}
                      role="button"
                      tabIndex={0}
                      title="Tap to open Notes"
                      className="bg-[#050507] hover:bg-[#0c0c10] border border-white/[0.12] rounded-[28px] p-3.5 flex flex-col justify-between min-h-[148px] sm:min-h-[154px] shadow-2xl cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all group select-none text-white"
                    >
                      {/* Top Header with coral edit & plus buttons */}
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[17px] sm:text-[18px] font-bold text-white font-sans tracking-tight">
                            Notes
                          </span>
                          <div className="flex items-center gap-1.5">
                            {/* Coral circle 1: Edit/Pencil icon */}
                            <div className="w-6 h-6 rounded-full bg-[#df5252] hover:bg-[#eb5e5e] flex items-center justify-center text-white shadow-sm transition-colors">
                              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                              </svg>
                            </div>
                            {/* Coral circle 2: Plus icon */}
                            <div className="w-6 h-6 rounded-full bg-[#df5252] hover:bg-[#eb5e5e] flex items-center justify-center text-white shadow-sm transition-colors">
                              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        {/* Subtle Divider Line */}
                        <div className="h-[1px] bg-white/10 mt-2 mb-2" />
                      </div>

                      {/* Notes List */}
                      <div className="flex flex-col gap-2.5 my-auto">
                        {/* Note 1: Tools */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveNoteTab('tools');
                            handleLaunchApp(ROW1_APPS[2]);
                          }}
                          className="flex items-center gap-2.5 p-1 -m-1 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                          title="Open Tools note"
                        >
                          {/* Dark circular document preview disk */}
                          <div className="w-8 h-8 rounded-full bg-[#26272b] flex flex-col justify-center items-center p-1.5 shrink-0 overflow-hidden border border-white/5 shadow-inner">
                            <div className="w-full space-y-[2px] opacity-75">
                              <div className="h-[1.5px] bg-white/90 rounded-full w-4/5" />
                              <div className="h-[1.5px] bg-white/60 rounded-full w-full" />
                              <div className="h-[1.5px] bg-white/60 rounded-full w-3/5" />
                              <div className="h-[1.5px] bg-white/50 rounded-full w-4/5" />
                            </div>
                          </div>
                          <div className="min-w-0">
                            <div className="text-[13.5px] sm:text-[14.5px] font-semibold text-white tracking-tight leading-none truncate">
                              Tools...
                            </div>
                            <div className="text-[11px] sm:text-[11.5px] text-neutral-300 font-medium leading-none mt-1">
                              6 Aug
                            </div>
                          </div>
                        </div>

                        {/* Note 2: Skills */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveNoteTab('skills');
                            handleLaunchApp(ROW1_APPS[2]);
                          }}
                          className="flex items-center gap-2.5 p-1 -m-1 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                          title="Open Skills note"
                        >
                          {/* Dark circular document preview disk */}
                          <div className="w-8 h-8 rounded-full bg-[#26272b] flex flex-col justify-center items-center p-1.5 shrink-0 overflow-hidden border border-white/5 shadow-inner">
                            <div className="w-full space-y-[2px] opacity-75">
                              <div className="h-[1.5px] bg-white/90 rounded-full w-3/5" />
                              <div className="h-[1.5px] bg-white/60 rounded-full w-4/5" />
                              <div className="h-[1.5px] bg-white/60 rounded-full w-full" />
                              <div className="h-[1.5px] bg-white/50 rounded-full w-2/5" />
                            </div>
                          </div>
                          <div className="min-w-0">
                            <div className="text-[13.5px] sm:text-[14.5px] font-semibold text-white tracking-tight leading-none truncate">
                              Skills
                            </div>
                            <div className="text-[11px] sm:text-[11.5px] text-neutral-300 font-medium leading-none mt-1">
                              18 Aug
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hidden Real Audio Element for Playback */}
                  <audio
                    ref={audioRef}
                    preload="auto"
                    onEnded={() => {
                      // Auto advance to next track
                      setSpotifyTrackIndex((prev) => (prev + 1) % SPOTIFY_TRACKS.length);
                    }}
                  />

                  {/* 3. SPOTIFY WIDGET (Exact Samsung One UI Khaki Pill style matching user screenshot) */}
                  <div
                    className="bg-[#887950] hover:bg-[#8f8056] rounded-[20px] p-2.5 sm:p-3 flex items-center justify-between text-white shadow-xl select-none font-sans transition-all cursor-pointer group isolate"
                    onClick={() => handleLaunchApp(DOCK_APPS[2])}
                    title="Open Spotify"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      {/* Album Art with thumbnail (Clean, borderless cover) */}
                      <div className="w-12 h-12 rounded-[14px] overflow-hidden shrink-0 bg-[#2d2215] relative flex items-center justify-center">
                        <img
                          src={SPOTIFY_TRACKS[spotifyTrackIndex]?.albumArt || '/assets/album/songcover.jpg'}
                          alt={SPOTIFY_TRACKS[spotifyTrackIndex]?.title || "Spotify Track"}
                          className={`w-full h-full object-cover filter contrast-[1.05] saturate-[1.1] ${isSpotifyPlaying ? 'scale-105' : ''} transition-transform duration-500`}
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (!target.src.endsWith('/assets/songcover.jpg')) {
                              target.src = '/assets/songcover.jpg';
                            }
                          }}
                        />
                      </div>

                      {/* Track & Artist Info in Samsung Sans Font */}
                      <div className="min-w-0 pr-1">
                        <div className="text-[14.5px] sm:text-[15.5px] font-bold text-white tracking-tight leading-snug truncate">
                          {SPOTIFY_TRACKS[spotifyTrackIndex]?.title || 'Ek Zindagi'}
                        </div>
                        <div className="text-[12px] sm:text-[12.5px] text-white/85 font-normal leading-tight truncate mt-0.5">
                          {SPOTIFY_TRACKS[spotifyTrackIndex]?.artist || 'Sachin-Jigar'}
                        </div>
                      </div>
                    </div>

                    {/* Samsung Media Player Controls: Prev, White Play Disk, Next, Spotify Icon (Equal Sizing) */}
                    <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 pl-1">
                      {/* Prev button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          const newIndex = (spotifyTrackIndex - 1 + SPOTIFY_TRACKS.length) % SPOTIFY_TRACKS.length;
                          setSpotifyTrackIndex(newIndex);
                          setIsSpotifyPlaying(true);
                        }}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                        title="Previous Track"
                      >
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                          <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                        </svg>
                      </button>

                      {/* White Play / Pause Circular Disk */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsSpotifyPlaying(!isSpotifyPlaying);
                        }}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-neutral-100 flex items-center justify-center shadow-md transition-transform hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                        title={isSpotifyPlaying ? 'Pause' : 'Play'}
                      >
                        {isSpotifyPlaying ? (
                          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-[#887950]">
                            <rect x="6" y="5" width="3.5" height="14" rx="1" />
                            <rect x="14.5" y="5" width="3.5" height="14" rx="1" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-[#887950] ml-0.5">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        )}
                      </button>

                      {/* Next button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          const newIndex = (spotifyTrackIndex + 1) % SPOTIFY_TRACKS.length;
                          setSpotifyTrackIndex(newIndex);
                          setIsSpotifyPlaying(true);
                        }}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                        title="Next Track"
                      >
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                          <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                        </svg>
                      </button>

                      {/* White Spotify Logo */}
                      <div
                        className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-white/90 shrink-0 ml-0.5"
                        title="Spotify"
                      >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 5.524 4.477 10 10 10s10-4.476 10-10c0-5.523-4.477-10-10-10zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.434-5.308-1.758-8.793-.963-.335.077-.67-.133-.746-.468-.077-.334.132-.67.467-.746 3.808-.87 7.076-.506 9.722 1.113.294.18.386.563.207.857zm1.224-2.72c-.226.367-.707.482-1.074.256-2.69-1.653-6.79-2.133-9.972-1.168-.413.125-.853-.11-.978-.523-.125-.413.11-.853.523-.978 3.633-1.103 8.148-.568 11.245 1.339.367.226.482.707.256 1.074zm.105-2.833C14.692 8.949 9.38 8.775 6.304 9.71c-.495.15-1.02-.132-1.17-.627-.15-.495.132-1.02.627-1.17 3.536-1.073 9.404-.866 13.14 1.353.445.264.59.838.326 1.283-.264.444-.838.59-1.282.325z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* =============================================================== */}
                {/* APP ICONS AREA + BOTTOM DOCK                                    */}
                {/* =============================================================== */}
                <div className="space-y-4 pb-2 mt-auto">
                  {/* ROW 1: Google Meet, Outlook ... Notes (floating right) */}
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-4">
                      {renderAppIcon(ROW1_APPS[0])}
                      {renderAppIcon(ROW1_APPS[1])}
                    </div>
                    {/* Floating Notes icon on right */}
                    <div className="-translate-y-1">
                      {renderAppIcon(ROW1_APPS[2])}
                    </div>
                  </div>

                  {/* ROW 2: YouTube, Maps, YT Music, WhatsApp, CapCut (Row of 5: Equal Gaps) */}
                  <div className="grid grid-cols-5 gap-2.5 sm:gap-3 items-center justify-items-center w-full px-0.5">
                    {ROW2_APPS.map((app) => renderAppIcon(app))}
                  </div>

                  {/* DOCK ROW: Phone, Gallery, Spotify, Instagram, VN (Dock Row of 5: Exact Equal Gaps) */}
                  <div className="pt-2 grid grid-cols-5 gap-2.5 sm:gap-3 items-center justify-items-center w-full px-0.5">
                    {DOCK_APPS.map((app) => renderAppIcon(app, true))}
                  </div>
                </div>
              </div>

              {/* ----------------------------------------------------------------- */}
              {/* ACTIVE APP VIEW (VIDEO REELS OR SAMSUNG NOTES INSIDE PHONE)       */}
              {/* ----------------------------------------------------------------- */}
              {activeApp && (
                <div className="absolute inset-0 z-50 bg-black flex flex-col justify-between animate-in fade-in zoom-in-95 duration-200 select-none">
                  {/* Notes App Full-Screen Interface matching user screenshot */}
                  {activeApp.category === 'notes' ? (
                    <div className="w-full h-full flex flex-col justify-between bg-black text-white font-sans">
                      {/* Top Header: < Title, [Book], +, ⋮ */}
                      <div className="pt-3 px-4 pb-2.5 flex items-center justify-between border-b border-white/[0.08] shrink-0">
                        {/* Back Arrow & Dynamic Note Title */}
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setActiveApp(null)}
                            className="p-1 -ml-1 text-white hover:text-[#B6D63A] transition-colors cursor-pointer group"
                            title="Back to Home"
                          >
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-[2.4] strokeLinecap-round strokeLinejoin-round group-hover:-translate-x-0.5 transition-transform">
                              <polyline points="15 18 9 12 15 6" />
                            </svg>
                          </button>

                          {/* Interactive Page Title Switcher */}
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => setActiveNoteTab('tools')}
                              className={`text-[19px] sm:text-[20px] font-bold tracking-tight transition-colors cursor-pointer ${
                                activeNoteTab === 'tools' ? 'text-white' : 'text-white/40 hover:text-white/70 text-[16px]'
                              }`}
                            >
                              Tools
                            </button>
                            <span className="text-white/30 text-sm">/</span>
                            <button
                              type="button"
                              onClick={() => setActiveNoteTab('skills')}
                              className={`text-[19px] sm:text-[20px] font-bold tracking-tight transition-colors cursor-pointer ${
                                activeNoteTab === 'skills' ? 'text-white' : 'text-white/40 hover:text-white/70 text-[16px]'
                              }`}
                            >
                              Skills
                            </button>
                          </div>
                        </div>

                        {/* Top Right Icons: Book, Plus, 3-dots */}
                        <div className="flex items-center gap-4 text-white">
                          {/* Book / Reading Mode Icon */}
                          <button
                            type="button"
                            onClick={() => showToast(`Reading view: ${activeNoteTab === 'tools' ? 'Tools' : 'Skills'}`)}
                            className="p-1 text-white hover:text-[#B6D63A] transition-colors cursor-pointer"
                            title="Reading View"
                          >
                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2.2] strokeLinecap-round strokeLinejoin-round">
                              <rect x="3" y="4" width="18" height="16" rx="2" />
                              <line x1="12" y1="4" x2="12" y2="20" />
                            </svg>
                          </button>

                          {/* Plus Add Icon */}
                          <button
                            type="button"
                            onClick={() => showToast('Add item to note')}
                            className="p-1 text-white hover:text-[#B6D63A] transition-colors cursor-pointer"
                            title="Add Note Item"
                          >
                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2.8] strokeLinecap-round">
                              <line x1="12" y1="5" x2="12" y2="19" />
                              <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                          </button>

                          {/* More 3-Dots Vertical Menu */}
                          <button
                            type="button"
                            onClick={() => showToast('Note options')}
                            className="p-1 text-white hover:text-[#B6D63A] transition-colors cursor-pointer"
                            title="More options"
                          >
                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                              <circle cx="12" cy="5" r="1.8" />
                              <circle cx="12" cy="12" r="1.8" />
                              <circle cx="12" cy="19" r="1.8" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Main Note Canvas Body: PAGE 1 (TOOLS) vs PAGE 2 (SKILLS) */}
                      <div className="flex-1 px-5 py-4 overflow-y-auto space-y-1.5 text-[15px] sm:text-[15.5px] leading-relaxed text-white font-sans tracking-normal relative animate-in fade-in duration-150">
                        {activeNoteTab === 'tools' ? (
                          /* PAGE 1: TOOLS NOTE (Categorized with Clean Unified Typography) */
                          <div className="space-y-4 select-text font-normal text-[#fafafa] pb-6 font-sans">
                            {/* Intro Note Headline */}
                            <div className="border-b border-white/15 pb-2.5 mb-3">
                              <h4 className="text-[16.5px] sm:text-[17px] font-bold text-white tracking-tight flex items-center gap-2">
                                <span>Tools I use and have learned till now</span>
                              </h4>
                              <p className="text-[12px] text-white/60 mt-1">
                                More to be added in future ;)
                              </p>
                            </div>

                            {/* 1. Design & Prototyping Software */}
                            <div className="space-y-1.5">
                              <h5 className="text-[12px] font-bold uppercase tracking-wider text-white">
                                Design Software
                              </h5>
                              <div className="pl-1.5 pt-0.5 space-y-1 text-[14px] sm:text-[14.5px] text-white/90">
                                <p className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                  <span>Figma</span>
                                </p>
                                <p className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                  <span>Adobe Photoshop</span>
                                </p>
                                <p className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                  <span>Adobe Illustrator</span>
                                </p>
                                <p className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                  <span>Framer</span>
                                </p>
                                <p className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                  <span>Canva</span>
                                </p>
                              </div>
                            </div>

                            {/* 2. AI Software */}
                            <div className="space-y-1.5 pt-1">
                              <h5 className="text-[12px] font-bold uppercase tracking-wider text-white">
                                AI Software
                              </h5>
                              <div className="pl-1.5 pt-0.5 space-y-1 text-[14px] sm:text-[14.5px] text-white/90">
                                <p className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                  <span>Google AI Studio</span>
                                </p>
                                <p className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                  <span>Google Flow</span>
                                </p>
                                <p className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                  <span>ChatGPT</span>
                                </p>
                                <p className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                  <span>Gemini</span>
                                </p>
                                <p className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                  <span>Claude</span>
                                </p>
                                <p className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                  <span>Stich</span>
                                </p>
                              </div>
                            </div>

                            {/* 3. Coding Software */}
                            <div className="space-y-1.5 pt-1">
                              <h5 className="text-[12px] font-bold uppercase tracking-wider text-white">
                                Coding Software
                              </h5>
                              <div className="pl-1.5 pt-0.5 space-y-1 text-[14px] sm:text-[14.5px] text-white/90">
                                <p className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                  <span>VS Code</span>
                                </p>
                                <p className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                  <span>Android Studio</span>
                                </p>
                                <p className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                  <span>Xcode</span>
                                </p>
                              </div>
                            </div>

                            {/* 4. Video & Motion Software */}
                            <div className="space-y-1.5 pt-1">
                              <h5 className="text-[12px] font-bold uppercase tracking-wider text-white">
                                Video &amp; Motion Software
                              </h5>
                              <div className="pl-1.5 pt-0.5 space-y-1 text-[14px] sm:text-[14.5px] text-white/90">
                                <p className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                  <span>DaVinci Resolve</span>
                                </p>
                                <p className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                  <span>CapCut</span>
                                </p>
                                <p className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                  <span>VN Video Editor</span>
                                </p>
                              </div>
                            </div>

                            {/* 5. 3D & Spatial Software */}
                            <div className="space-y-1.5 pt-1">
                              <h5 className="text-[12px] font-bold uppercase tracking-wider text-white">
                                3D Design Software
                              </h5>
                              <div className="pl-1.5 pt-0.5 space-y-1 text-[14px] sm:text-[14.5px] text-white/90">
                                <p className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                  <span>Tinkercad (basic)</span>
                                </p>
                              </div>
                            </div>

                            {/* 6. Productivity & Workspace */}
                            <div className="space-y-1.5 pt-1">
                              <h5 className="text-[12px] font-bold uppercase tracking-wider text-white">
                                Productivity Software
                              </h5>
                              <div className="pl-1.5 pt-0.5 space-y-1 text-[14px] sm:text-[14.5px] text-white/90">
                                <p className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                  <span>Notion</span>
                                </p>
                              </div>
                            </div>

                            <div className="h-1" />
                            <p className="text-white/70 text-[13.5px] pt-2.5 border-t border-white/10">
                              always curious &amp; learning new tools ♡
                            </p>
                          </div>
                        ) : (
                          /* PAGE 2: SKILLS NOTE */
                          <div className="space-y-3.5 select-text font-normal text-[#fafafa] pb-6 font-sans">
                            <div className="pl-1.5 space-y-1 text-[14px] sm:text-[14.5px] text-white/90">
                              <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                <span>User research</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                <span>Wireframing and prototyping</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                <span>User testing</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                <span>Interaction design</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                <span>Visual storytelling</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                <span>Design thinking</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                <span>Problem solving</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                <span>HTML and CSS</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                <span>Contextual inquiry</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                <span>Conversational design</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                <span>Responsive web and mobile design</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                <span>Agent workflow design</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                <span>Agentic AI</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                <span>Service design</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                <span>Information architecture</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                <span>UI design</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                <span>Tangible interaction design</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                <span>System thinking</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                <span>Human AI interaction thinking</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                <span>Prompt design</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                <span>Video editing</span>
                              </p>
                            </div>

                            <div className="h-1" />
                            <p className="text-white/70 text-[13.5px] pt-2.5 border-t border-white/10">
                              obsession with craft, empathy &amp; systems ♡
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Bottom Samsung Notes Toolbar matching screenshot */}
                      <div className="px-3 pb-2 pt-1 flex flex-col items-center">
                        <div className="w-full bg-[#1c1c22] border border-white/10 rounded-full px-3 py-1.5 flex items-center justify-between text-neutral-300 shadow-2xl">
                          {/* 1. Pen Squiggle in small circular button */}
                          <button
                            type="button"
                            onClick={() => showToast('Pen Draw Tool')}
                            className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer shrink-0"
                            title="Pen tool"
                          >
                            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-[2.2] strokeLinecap-round">
                              <path d="M4 20c2-1 4-3 6-5s3-4 5-3 2 3 0 5-4 4-6 4-3-1-5-1z" />
                            </svg>
                          </button>

                          {/* 2. Checkbox Icon */}
                          <button
                            type="button"
                            onClick={() => showToast('Checkbox list')}
                            className="p-1.5 hover:text-white transition-colors cursor-pointer"
                            title="Checkbox"
                          >
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[2.2] strokeLinecap-round strokeLinejoin-round">
                              <polyline points="9 11 12 14 22 4" />
                              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                            </svg>
                          </button>

                          {/* 3. Text Underline format T_ */}
                          <button
                            type="button"
                            onClick={() => showToast('Text Format')}
                            className="p-1.5 hover:text-white transition-colors cursor-pointer font-bold text-xs"
                            title="Underline Format"
                          >
                            <span className="border-b-2 border-current pb-0.5 leading-none">T</span>
                          </button>

                          {/* 4. Text Box [T] */}
                          <button
                            type="button"
                            onClick={() => showToast('Insert text frame')}
                            className="p-1.5 hover:text-white transition-colors cursor-pointer"
                            title="Text Box"
                          >
                            <div className="w-4 h-4 border border-current rounded-[2px] flex items-center justify-center text-[9px] font-bold">
                              T
                            </div>
                          </button>

                          {/* 5. Font Family Aa▾ */}
                          <button
                            type="button"
                            onClick={() => showToast('Font: Samsung Sans')}
                            className="flex items-center gap-0.5 px-1 py-1 hover:text-white transition-colors cursor-pointer text-xs font-semibold"
                            title="Font Family"
                          >
                            <span>Aa</span>
                            <span className="text-[8px] opacity-70">▾</span>
                          </button>

                          {/* 6. Font Size 15▾ */}
                          <button
                            type="button"
                            onClick={() => showToast('Font size: 15pt')}
                            className="flex items-center gap-0.5 px-1 py-1 hover:text-white transition-colors cursor-pointer text-xs font-semibold"
                            title="Font Size"
                          >
                            <span>15</span>
                            <span className="text-[8px] opacity-70">▾</span>
                          </button>

                          {/* 7. Undo ↶ */}
                          <button
                            type="button"
                            onClick={() => showToast('Undo')}
                            className="p-1.5 hover:text-white transition-colors cursor-pointer"
                            title="Undo"
                          >
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[2] strokeLinecap-round strokeLinejoin-round">
                              <path d="M3 7v6h6" />
                              <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
                            </svg>
                          </button>

                          {/* 8. Redo ↷ */}
                          <button
                            type="button"
                            onClick={() => showToast('Redo')}
                            className="p-1.5 hover:text-white transition-colors cursor-pointer"
                            title="Redo"
                          >
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[2] strokeLinecap-round strokeLinejoin-round">
                              <path d="M21 7v6h-6" />
                              <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13" />
                            </svg>
                          </button>
                        </div>

                        {/* Bottom Navigation Gesture Pill */}
                        <div className="w-24 h-1 bg-white/35 rounded-full mt-2" />
                      </div>
                    </div>
                  ) : (
                    /* Video Reels App Experience (YouTube / Reels / Portfolio) */
                    <div className="w-full h-full flex flex-col justify-between">
                      {/* Top Header */}
                      <div className="pt-3 px-3 pb-2.5 bg-[#16151d] border-b border-white/10 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setActiveApp(null)}
                          className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white font-syne text-[10px] transition-colors cursor-pointer"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          <span>Back</span>
                        </button>

                        <div className="text-center">
                          <span className="font-syne text-[11px] font-bold text-white block">
                            {activeApp.label}
                          </span>
                          <span className="font-syne text-[8.5px] text-[#B6D63A] block">
                            {activeApp.tagline || 'Portfolio Experience'}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={toggleMute}
                          className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                          title={isMuted ? 'Unmute' : 'Mute'}
                        >
                          {isMuted ? <VolumeX className="w-3.5 h-3.5 text-white/60" /> : <Volume2 className="w-3.5 h-3.5 text-[#B6D63A]" />}
                        </button>
                      </div>

                      {/* Video Player */}
                      <div className="flex-1 relative overflow-hidden flex flex-col bg-black">
                        <div className="relative flex-1 w-full bg-black flex items-center justify-center overflow-hidden">
                          <video
                            ref={videoRef}
                            src={videoSrc}
                            onError={handleVideoError}
                            onTimeUpdate={handleTimeUpdate}
                            autoPlay
                            loop
                            playsInline
                            muted={isMuted}
                            className="w-full h-full object-cover"
                          />

                          <button
                            type="button"
                            onClick={togglePlay}
                            aria-label={isPlaying ? 'Pause' : 'Play'}
                            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors cursor-pointer group"
                          >
                            <div className="w-12 h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                              {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-[#B6D63A] ml-0.5" />}
                            </div>
                          </button>

                          {activeApp.id === 'instagram' && (
                            <div className="absolute right-2.5 bottom-12 flex flex-col items-center gap-3 text-white pointer-events-none">
                              <div className="flex flex-col items-center gap-0.5">
                                <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                                <span className="text-[8px] font-syne">1.4k</span>
                              </div>
                              <div className="flex flex-col items-center gap-0.5">
                                <MessageCircle className="w-5 h-5 text-white" />
                                <span className="text-[8px] font-syne">92</span>
                              </div>
                              <div className="flex flex-col items-center gap-0.5">
                                <Share2 className="w-5 h-5 text-white" />
                                <span className="text-[8px] font-syne">Share</span>
                              </div>
                              <Disc className="w-5 h-5 text-[#B6D63A] animate-spin" />
                            </div>
                          )}
                        </div>

                        {/* Video Scrubber & Info */}
                        <div className="bg-[#121118] px-3.5 py-2 border-t border-white/10">
                          <div
                            onClick={handleScrub}
                            className="w-full h-1.5 bg-white/20 hover:h-2 rounded-full cursor-pointer relative overflow-hidden transition-all"
                          >
                            <div
                              className="h-full bg-[#B6D63A]"
                              style={{ width: `${progress}%` }}
                            />
                          </div>

                          <div className="flex items-center justify-between text-[9px] font-syne text-white/50 mt-1">
                            <span>{currentTime}</span>
                            <span className="text-white/80 font-bold truncate px-2">{activeApp.title}</span>
                            <span>{duration}</span>
                          </div>

                          <p className="font-syne text-[9px] text-white/60 mt-0.5 line-clamp-2">
                            {activeApp.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* =================================================================== */}
            {/* SAMSUNG GESTURE NAVIGATION PILL (BOTTOM)                            */}
            {/* =================================================================== */}
            <div
              onClick={() => setActiveApp(null)}
              title="Tap gesture bar to return Home"
              className="relative z-30 pb-2.5 pt-1 flex justify-center cursor-pointer group"
            >
              <div className="w-32 h-1 rounded-full bg-white/60 group-hover:bg-[#B6D63A] transition-colors" />
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CUSTOM APP ICON ASSET DRAWER / MODAL                                     */}
      {/* ========================================================================= */}
      {isAssetDrawerOpen && (
        <div
          role="dialog"
          aria-label="App Icon Assets Manager"
          className="fixed inset-0 z-[230] bg-black/70 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div className="w-full max-w-md bg-[#16171f] border border-white/15 rounded-2xl p-5 text-white shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <h3 className="font-syne font-bold text-base text-white flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-[#B6D63A]" />
                  Custom App Icon Assets
                </h3>
                <p className="font-syne text-[11px] text-white/50">
                  Select an app to provide or test its image asset
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsAssetDrawerOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white/70 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* App Selection Grid */}
            <div className="grid grid-cols-4 gap-2 max-h-[220px] overflow-y-auto pr-1">
              {[...ROW1_APPS, ...ROW2_APPS, ...DOCK_APPS].map((app) => {
                const isSelected = selectedAppForUpload === app.id;
                const hasImg = customIconImages[app.id] && !failedImageLoads[app.id];
                return (
                  <button
                    key={app.id}
                    type="button"
                    onClick={() => setSelectedAppForUpload(app.id)}
                    className={`flex flex-col items-center gap-1 p-2 rounded-xl border text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#B6D63A]/10 border-[#B6D63A] text-white'
                        : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
                      {hasImg ? (
                        <img
                          src={customIconImages[app.id]}
                          alt={app.label}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        app.renderVectorIcon()
                      )}
                    </div>
                    <span className="font-syne text-[10px] truncate w-full">{app.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected App Configuration */}
            <div className="bg-black/40 rounded-xl p-3 border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs font-syne">
                <span className="text-white/70">Selected: <strong className="text-[#B6D63A]">{selectedAppForUpload.toUpperCase()}</strong></span>
                <span className="text-[10px] text-white/50">Path: /assets/icons/{selectedAppForUpload}.png</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 py-2 px-3 rounded-lg bg-[#B6D63A] hover:brightness-110 text-black font-syne text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload Image File</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    // Reset to vector fallback
                    setFailedImageLoads((prev) => ({ ...prev, [selectedAppForUpload]: true }));
                    showToast(`Reverted ${selectedAppForUpload} to Vector Icon`);
                  }}
                  className="py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-syne text-xs transition-colors cursor-pointer"
                  title="Reset to Vector Glyph"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <p className="font-syne text-[10px] text-white/40 leading-relaxed">
              💡 <em>Tip</em>: You can provide image assets by uploading them above or dropping them into the <code>/public/assets/icons/</code> directory named after each app (e.g. <code>meet.png</code>, <code>youtube.png</code>).
            </p>

            <button
              type="button"
              onClick={() => setIsAssetDrawerOpen(false)}
              className="w-full py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white font-syne text-xs font-semibold transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
};
