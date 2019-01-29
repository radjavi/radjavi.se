import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header active="home" />

        <div className="smallBody">
          <div id="welcome">
            <div id="intro">
              <h3 id="hi">HEY THERE! 👋</h3>
              <h1 id="myNameIs">My name is Iman and I'm a student in Computer Science & Engineering</h1>
            </div>
            <p id="studying">
              I'm currently studying my third year at <span style={{fontWeight: 600}}>Chalmers University of Technology</span> in Gothenburg, Sweden.
              On my spare time I work with fun projects to learn new technologies.
            </p>
          </div>
        </div>


      </div>
    );
  }
}

export default Home;
