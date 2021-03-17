import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import App from './App';
import counter from './stores/counterStore';
import apple from './stores/appleStore'

ReactDOM.render(
  <Provider counter={counter} apple={apple}><App /></Provider>,
  document.getElementById('root')
);

