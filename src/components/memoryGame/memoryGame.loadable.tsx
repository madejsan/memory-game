import { Loader } from '@components/loader/loader';
import loadable from '@loadable/component';
import React from 'react';

const MemoryGame = loadable(() => import('./memoryGame'), {
  fallback: <Loader />
});

export default MemoryGame;
