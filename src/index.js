import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
