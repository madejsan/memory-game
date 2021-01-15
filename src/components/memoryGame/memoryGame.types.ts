import { ResultProps } from '@routes/game/game.types';

export interface CardProps {
  id: number;
  image: string;
  flipped: boolean;
  disabled: boolean;
  success: boolean;
}

export interface TimerProps {
  start: Date;
  end: Date;
}

export interface MemoryGameProps {
  player: string;
  saveResults: (data: ResultProps) => void;
}
