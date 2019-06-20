import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-tiniest-router';
import { routes } from './config/routes';
import Root from 'components/Root';

ReactDOM.render(
  <Router routes={routes}>
    <Root />
  </Router>,
  document.getElementById('root')
);
