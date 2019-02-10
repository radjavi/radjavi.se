import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './components/Page';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter } from 'react-router-dom'

const routing = (
  <BrowserRouter>
    <Route
      render={ ({location}) => (
        <div>
          <Route exact path="/" render={() => homePage} />
          <Route exact path="/eatabeat" render={() => eatabeatPage} />
        </div>
      )}
    />
  </BrowserRouter>
)

const homePage = (
  <Page
    title={["Hey! 👋", <br />, "I'm Iman Radjavi"]}
    description={[
      "Currently studying ",
      <span style={{color: "#E16565"}}>Computer Science & Engineering</span>,
      " at Chalmers University of Technology in Gothenburg, Sweden. On my spare time I work with fun projects to learn new technologies."
    ]}
    links={[
      {nr: 1, text: "Email", href: "mailto:radjavi@hotmail.com"},
      {nr: 2, text: "LinkedIn", href: "https://www.linkedin.com/in/iman-radjavi/"},
      {nr: 3, text: "GitHub", href: "https://github.com/radjavi"}
    ]}
  />
)

const eatabeatPage = (
  <Page
    title="Eat A Beat"
    subtitle="Spotify devX 2018 - Hackathon, Gothenburg"
    description="A 2D game generated from any track, powered by the Spotify API/SDK. This project won 1st place on Spotify DevX Hackathon 2018."
    activeProject="1"
    links={[
      {nr: 1, text: "View", href: ""},
      {nr: 2, text: "Source", href: ""},
    ]}
  />
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
