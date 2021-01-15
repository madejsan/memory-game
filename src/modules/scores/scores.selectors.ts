import { createSelector } from 'reselect';

const selectScoresDomain = (state) => state.scores;

export const selectScores = createSelector(selectScoresDomain, (scores) => scores.data.slice(0, 5));
