import { Loader } from '@components/loader/loader';
import loadable from '@loadable/component';
import React from 'react';

const ScoreTable = loadable(() => import('./scoresTable'), {
  fallback: <Loader />
});

export default ScoreTable;
