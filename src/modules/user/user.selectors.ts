import { createSelector } from 'reselect';

const selectUserDomain = (state) => state.user;

export const selectUser = createSelector(selectUserDomain, (user) => user.name);
