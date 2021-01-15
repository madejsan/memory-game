import { Loader } from '@components/loader/loader';
import loadable from '@loadable/component';
import React from 'react';

const LoadableScoresPage = loadable(() => import('./scores.container'), {
  fallback: <Loader />
});

export default LoadableScoresPage;
