import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="smallBody">
          <header className="App-header">
            <h1 id="header-logo">Iman Radjavi<span style={{color: "#e23e57"}}>.</span></h1>
            <ul>
              <li>
                <Link className="header-link" to="/projects">Projects</Link>
              </li>
              <li>
                <Link className="header-link active" to="/">About</Link>
              </li>
            </ul>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
