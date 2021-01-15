import { createActions, createReducer } from 'reduxsauce';

export const { Types: ScoresTypes, Creators: ScoresActions } = createActions(
  {
    create: ['data']
  },
  { prefix: 'SCORES_' }
);

export const INITIAL_STATE = {
  data: []
};

const create = (state: any = INITIAL_STATE, { data }) => {
  const { data: prevData } = state;
  return {
    data: [...prevData, data]
  };
};

export const reducer = createReducer(INITIAL_STATE, {
  [ScoresTypes.CREATE]: create
});
