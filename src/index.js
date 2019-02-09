import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter } from 'react-router-dom'

const routing = (
  <BrowserRouter>
    <Route
      render={ ({location}) => (
        <div>
          <Route path="/" component={Home} />
        </div>
      )}
    />
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
