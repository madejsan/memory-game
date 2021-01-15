import GamePage from '@routes/game/game.loadable';
import HomePage from '@routes/home/home.loadable';
import ScoresPage from '@routes/scores/scores.loadable';

export const ROUTES = {
  HOME: '/',
  GAME: '/game',
  SCORES: '/scores'
};

const createRoute = (path: string, component: any, exact = false, key: string) => ({
  component,
  exact,
  key,
  path
});

const routes = [
  createRoute(ROUTES.HOME, HomePage, true, 'home'),
  createRoute(ROUTES.GAME, GamePage, true, 'game'),
  createRoute(ROUTES.SCORES, ScoresPage, true, 'scores')
];

export const routesConfig = {
  routes
};
