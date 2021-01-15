import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from './app/app';
import configuredStore from './modules/configuredStore';

const { store, persistor } = configuredStore();
const composeEnhancers = (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

if (process.env.NODE_ENV === 'development') {
  if (!composeEnhancers) {
    const DevToolsComponent = require('@utils/devtools').default;
    const devToolsRoot = window.document.createElement('div');

    window.document.body.appendChild(devToolsRoot);

    ReactDOM.render(
      <Provider store={store}>
        <DevToolsComponent />
      </Provider>,
      devToolsRoot
    );
  }
}
render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);
