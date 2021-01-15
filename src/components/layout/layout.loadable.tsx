import { Loader } from '@components/loader/loader';
import loadable from '@loadable/component';
import React from 'react';

const Layout = loadable(() => import('./layout'), {
  fallback: <Loader />
});

export default Layout;
