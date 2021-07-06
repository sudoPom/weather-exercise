import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.scss';
import Weather from './components/Weather';

ReactDOM.render(
  <React.StrictMode>
    <Weather />
  </React.StrictMode>,
  document.getElementById('root')
);
