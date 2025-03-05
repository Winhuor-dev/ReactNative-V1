/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import store from './src/redux/store';

// Wrap App with Redux Provider
const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);