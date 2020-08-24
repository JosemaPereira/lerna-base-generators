// Needed for redux-saga es6 generator support
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { MOUNT_NODE } from './common';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import App from './root-component';

export const render = messages => {
  ReactDOM.render(<App messages={messages} />, MOUNT_NODE);
};
