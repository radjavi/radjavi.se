import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import Projects from './components/Projects';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const routing = (
  <BrowserRouter>
    <Route
      render={ ({location}) => (
        <div>
          <Header active={location.pathname == "/" ? "home" : "projects"} />
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Footer />
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
