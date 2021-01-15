import { applyMiddleware, compose, createStore } from 'redux';
import ReduxDevtools from 'redux-devtools';
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import createReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage
};

export default function configureStore(initialState = {}) {
  const enhancers = [];
  const middlewares = [];
  const composeEnhancers = (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

  if (composeEnhancers) {
    enhancers.push(composeEnhancers && composeEnhancers());
  } else if (process.env.NODE_ENV === 'development') {
    const { persistState } = ReduxDevtools;

    const getDebugSessionKey = () => {
      const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
      return matches && matches.length > 0 ? matches[1] : null;
    };

    const stateTransformer = (state) => state;

    middlewares.push(createLogger({ stateTransformer }));

    Array.prototype.push.apply(enhancers, [
      require('@utils/devtools').default.instrument(),
      persistState(getDebugSessionKey(), (state) => state)
    ]);
  }

  const persistedReducer = persistReducer(persistConfig, createReducer());

  const store = createStore(persistedReducer, initialState, compose(applyMiddleware(...middlewares), ...enhancers));
  const persistor = persistStore(store);

  return { store, persistor };
}
