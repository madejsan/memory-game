import { combineReducers } from 'redux';

import { reducer as scoresReducer } from './scores/scores.redux';
import { reducer as userReducer } from './user/user.redux';

export default function createReducer() {
  return combineReducers({
    scores: scoresReducer,
    user: userReducer
  });
}
