import { Loader } from '@components/loader/loader';
import loadable from '@loadable/component';
import React from 'react';

const LoadableNotFoundPage = loadable(() => import('./notFound'), {
  fallback: <Loader />
});

export default LoadableNotFoundPage;
