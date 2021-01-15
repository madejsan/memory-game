import { createBrowserHistory } from 'history';

import configureStore from './store';

const configuredStore = () => {
  const initialState = {};

  self['browserHistory'] = self['browserHistory'] || createBrowserHistory();
  if (!self['store'] || !self['persistor']) {
    const { store, persistor } = configureStore(initialState);
    self['store'] = store;
    self['persistor'] = persistor;
  }

  return { store: self['store'], persistor: self['persistor'], browserHistory: self['browserHistory'] };
};

export default configuredStore;
