export interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  subtitle?: string;
  tag: string;
  image: string;
  description: string;
}

export interface StickyNoteProps {
  id?: string;
  text: string;
  author?: string;
  rotation?: string; // e.g. "-rotate-2" or "rotate-3"
  className?: string;
  tapePosition?: 'top' | 'top-left' | 'top-right' | 'none';
  variant?: 'yellow' | 'lime' | 'paper';
}

export interface ExperimentItem {
  id: string;
  number: string;
  category: string;
  title: string;
  specs: string;
  noteText: string;
  noteRotation?: string;
}

