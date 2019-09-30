import React from 'react'
import ReactDOM from 'react-dom'
import { default as MainDesktop } from './components/desktop/Main'
import { default as MainMobile } from './components/mobile/Main'
import * as serviceWorker from './serviceWorker'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import MediaQuery from 'react-responsive'

ReactDOM.render(
  <Router>
    <MediaQuery minWidth={1000}>
      <MainDesktop />
    </MediaQuery>
    <MediaQuery maxWidth={1000}>
      <MainMobile />
    </MediaQuery>
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
