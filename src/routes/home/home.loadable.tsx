import { Loader } from '@components/loader/loader';
import loadable from '@loadable/component';
import React from 'react';

const LoadableHomePage = loadable(() => import('./home.container'), {
  fallback: <Loader />
});

export default LoadableHomePage;
