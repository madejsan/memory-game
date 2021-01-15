import { Loader } from '@components/loader/loader';
import loadable from '@loadable/component';
import React from 'react';

const Routes = loadable(() => import('./routes'), {
  fallback: <Loader />
});

export default Routes;
