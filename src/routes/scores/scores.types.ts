export interface ScoreProps {
  user: string;
  score: number;
  time: string;
  date: string;
}

export interface ScoresProps {
  scores: ScoreProps[];
}
