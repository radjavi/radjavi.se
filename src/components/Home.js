import React, { Component } from 'react';
import '../App.css';
import Header from './Header'
import { Link } from "react-router-dom";
import posed from 'react-pose';

class Home extends Component {
  render() {
    const WelcomeDiv = posed.div({
      hide: { opacity: 0, marginTop: "185px" },
      show: {
        opacity: 1,
        marginTop: "170px",
        transition: {
          opacity: {duration: 500, ease: 'linear'},
          marginTop: {duration: 500, ease: 'easeOut'}
        }
      }
    });

    return (
      <div className="Home">

        <div className="smallBody">
          <WelcomeDiv id="welcome" initialPose="hide" pose="show">
            <div id="intro">
              <h3 id="hi">Hey! 👋<br />I'm Iman Radjavi.</h3>
              <svg width="82" height="11" viewBox="0 0 82 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5.67647C3.4328 2.90212 7.34677 -0.981972 11.5403 5.67647C13.043 8.5618 17.1387 12.6013 21.5 5.67647" stroke="#454757" stroke-width="3"/>
                <path d="M21.5 5.67647C22.9328 2.90212 26.8468 -0.981972 31.0403 5.67647C32.543 8.5618 36.6387 12.6013 41 5.67647" stroke="#454757" stroke-width="3"/>
                <path d="M41 5.67647C42.4328 2.90212 46.3468 -0.981972 50.5403 5.67647C52.043 8.5618 56.1387 12.6013 60.5 5.67647" stroke="#454757" stroke-width="3"/>
                <path d="M60.5 5.67647C61.9328 2.90212 65.8468 -0.981972 70.0403 5.67647C71.543 8.5618 75.6387 12.6013 80 5.67647" stroke="#454757" stroke-width="3"/>
              </svg>
              <h4 id="CSE">Computer Science & Engineering</h4>
            </div>
            <p id="studying">
              I'm currently studying my third year at Chalmers University of Technology in Gothenburg, Sweden.<br />
              On my spare time I work with fun projects to learn new technologies.
            </p>
          </WelcomeDiv>
        </div>


      </div>
    );
  }
}

export default Home;
