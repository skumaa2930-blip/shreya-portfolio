import { ProcessStep, ExperimentItem } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: '01',
    stepNumber: '01',
    title: 'IDEA DUMP',
    tag: 'EXPLORATION',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=900&auto=format&fit=crop',
    description: 'Messy sketches, spatial diagrams, and raw whiteboard maps to capture every fleeting intuition.',
  },
  {
    id: '02',
    stepNumber: '02',
    title: 'TRY THINGS OUT',
    tag: 'EXPERIMENTATION',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=900&auto=format&fit=crop',
    description: 'Rapid, tactile prototypes where failure is quick, cheap, and immediately illuminating.',
  },
  {
    id: '03',
    stepNumber: '03',
    title: 'GETTING THERE',
    tag: 'SYNTHESIS',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=900&auto=format&fit=crop',
    description: 'Tuning optical balance, layout density, and emotional feedback through deliberate iteration.',
  },
  {
    id: '04',
    stepNumber: '04',
    title: 'MAKE IT REAL',
    tag: 'DELIVERY',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=900&auto=format&fit=crop',
    description: 'Production-ready execution with micro-interactions, accessibility, and high typographic rigor.',
  },
];

export const CURIOSITY_EXPERIMENTS: ExperimentItem[] = [
  {
    id: 'ai-video',
    number: '01',
    category: 'AI VIDEO',
    title: 'RUNWAY_GEN2 // TEST_40',
    specs: '1080P • 24FPS',
    noteText: 'made this at 2am. why? idk. ☺',
    noteRotation: '-rotate-2',
  },
  {
    id: 'random-ui',
    number: '02',
    category: 'RANDOM UI',
    title: 'WONDERLUST HOME',
    specs: 'WONDERLUST_EXPLORATION.SVG',
    noteText: 'made this just to test this layout.',
    noteRotation: 'rotate-2',
  },
  {
    id: 'rive-test',
    number: '03',
    category: 'RIVE TEST',
    title: 'RIVE_INTERACTIVE_CANVAS',
    specs: 'PHYSICS_SPRING: DAMP 0.72',
    noteText: 'first time using rive. so fun! ↗',
    noteRotation: '-rotate-1',
  },
  {
    id: 'code-play',
    number: '04',
    category: 'CODE PLAY',
    title: 'RECURSIVE_LOOP.TS',
    specs: 'NODE_RUNTIME // EXIT 0',
    noteText: 'broke more things than i fixed. ☺',
    noteRotation: 'rotate-3',
  },
  {
    id: 'motion-study',
    number: '05',
    category: 'MOTION STUDY',
    title: 'EASE_IN_OUT_EXPO',
    specs: '60 FPS CAPTURE',
    noteText: 'playing with timing & easing. never gets old. ♡',
    noteRotation: '-rotate-3',
  },
  {
    id: 'photography',
    number: '06',
    category: 'PHOTOGRAPHY',
    title: 'KODAK TRI X 400 DARKROOM PULL',
    specs: '35MM • 1/125 • ISO 800',
    noteText: 'clicked this without thinking much. turned out okay.',
    noteRotation: 'rotate-1',
  },
  {
    id: 'interface-exp',
    number: '07',
    category: 'INTERFACE EXP',
    title: 'DIAL_OS // V1.4 ↗',
    specs: 'RADIAL_HAPTIC_FEEDBACK',
    noteText: 'just exploring visual feels. no big logic.',
    noteRotation: '-rotate-2',
  },
  {
    id: 'blender-3d',
    number: '08',
    category: '3D / BLENDER',
    title: 'CYCLES // 512 SAMPLES',
    specs: 'DENOISED',
    noteText: 'wanted to learn 3d. started somewhere. ☺ okay this one got weird. ☺',
    noteRotation: 'rotate-2',
  },
];

export const HABIT_LIST = [
  {
    icon: 'Camera',
    text: 'photographing random things',
    detail: 'Golden hour street lights, architectural shadows, textures of rusted metal.',
  },
  {
    icon: 'Film',
    text: 'making things cinematic',
    detail: 'Color grading daily video snippets and finding the mood in ordinary moments.',
  },
  {
    icon: 'Headphones',
    text: 'finding the right song',
    detail: 'Searching for ambient synth tracks that match the exact pace of flow state.',
  },
  {
    icon: 'Wrench',
    text: 'trying tools i don’t know yet',
    detail: 'Rive, TouchDesigner, Three.js, shaders, and anything that makes pixels move.',
  },
  {
    icon: 'Zap',
    text: 'making random things work',
    detail: 'MacGyvering code snippets, quick prototypes, and untangling design problems.',
  },
];

