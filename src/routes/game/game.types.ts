export interface ResultProps {
  score: number;
  time: string;
  date: string;
}

export interface GameDataProps extends ResultProps {
  user: string;
}

export interface GameProps {
  user: string;
  saveScore: (data: GameDataProps) => void;
  clearUser: () => void;
}
