import { History } from 'history';

export interface HomeProps {
  create: (username: string) => void;
  history: History;
}
export interface HomeState {
  username: string;
}
