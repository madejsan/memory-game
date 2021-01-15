import { Loader } from '@components/loader/loader';
import loadable from '@loadable/component';
import React from 'react';

const LoadableGamePage = loadable(() => import('./game.container'), {
  fallback: <Loader />
});

export default LoadableGamePage;
