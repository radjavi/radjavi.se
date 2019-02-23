import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import MediaQuery from 'react-responsive';

ReactDOM.render(
  <Router>
    <MediaQuery minWidth={1000}>
      <Main />
    </MediaQuery>
    <MediaQuery maxWidth={1000}>
      <h1>Mobile version under construction!</h1>
    </MediaQuery>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
