import { createActions, createReducer } from 'reduxsauce';

export const { Types: UserTypes, Creators: UserActions } = createActions(
  {
    create: ['name'],
    clear: []
  },
  { prefix: 'USER_' }
);

export const INITIAL_STATE = {
  name: ''
};

const create = (state = INITIAL_STATE, { name }) => ({
  ...state,
  name
});

const clear = () => ({
  name: ''
});

export const reducer = createReducer(INITIAL_STATE, {
  [UserTypes.CREATE]: create,
  [UserTypes.CLEAR]: clear
});
