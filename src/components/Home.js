import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import posed from 'react-pose';
import Particles from 'react-particles-js';
import particles_eatabeat from '../assets/particles-eatabeat.json'
import img_eatabeat from '../assets/eatabeat-logo.svg'

class Home extends Component {
  render() {
    const PoseLogo = posed.div({
      hide: { opacity: 0, top: "10px" },
      show: {
        opacity: 1,
        top: "0px",
        delay: 600,
        transition: {
          opacity: {duration: 1000, ease: 'linear'},
          top: {duration: 500, ease: 'easeOut'}
        }
      }
    });

    const FadeUpDiv = posed.div({
      hide: { opacity: 0, top: "30px" },
      show: {
        opacity: 1,
        top: "0px",
        delay: ({delay}) => (delay),
        transition: {
          opacity: {duration: 600, ease: 'linear'},
          top: {duration: 600, ease: 'circOut'}
        }
      },
      props: { delay: 0 }
    });

    const PoseLink = posed.a({
      hide: { opacity: 0, top: "10px" },
      show: {
        opacity: 1,
        top: "0px",
        delay: ({i}) => (i * 100 + 600),
        transition: {
          opacity: {duration: 300, ease: 'linear'},
          top: {duration: 500, ease: 'easeOut'}
        }
      },
      props: { i: 0 }
    });

    const PoseProject = posed.div({
      hide: { opacity: 0, top: "30px" },
      show: {
        opacity: 1,
        top: "0px",
        delay: ({i}) => (i * 100 + 600),
        transition: {
          opacity: {duration: 800, ease: 'linear'},
          top: {duration: 600, ease: 'backOut'}
        }
      },
      props: { i: 0 },
      hoverable: true,
      init: {scale: 1, transition: {duration: 200, ease: 'easeOut'}},
      hover: {scale: 1.05, transition: {duration: 200, ease: 'easeOut'}}
    });

    return (
      <div className="Home">
        <div className="smallBody home-grid">
          <div className="about-grid">
            <header>
              <PoseLogo initialPose="hide" pose="show" style={{position: "relative"}}>
                <h1 id="header-logo">r<span style={{color: "#E16565"}}>.</span></h1>
              </PoseLogo>
            </header>
            <span style={{display: "block", height: "150px"}}></span>
            <div id="welcome">
              <FadeUpDiv initialPose="hide" pose="show" id="intro">
                <h3 id="hi">Hey! 👋<br />I'm Iman Radjavi</h3>
              </FadeUpDiv>
              <FadeUpDiv initialPose="hide" pose="show" delay="600" style={{position: "relative"}}>
                <p id="studying">
                  Currently studying <span style={{color: "#E16565"}}>Computer Science & Engineering</span> at Chalmers University of Technology in Gothenburg, Sweden.
                  On my spare time I work with fun projects to learn new technologies.
                </p>
              </FadeUpDiv>
              <div id="links">
                <PoseLink i="1" initialPose="hide" pose="show" href="mailto:radjavi@hotmail.com" className="link">Email</PoseLink>
                <PoseLink i="2" initialPose="hide" pose="show" href="https://www.linkedin.com/in/iman-radjavi/" target="_blank" className="link">LinkedIn</PoseLink>
                <PoseLink i="3" initialPose="hide" pose="show" href="https://github.com/radjavi" target="_blank" className="link">GitHub</PoseLink>
              </div>
              <span style={{display: "block", height: "200px"}}></span>
            </div>
          </div>
          <div className="projects-grid">
            <PoseProject i="1" id="project1" initialPose="hide" pose="show" className="project-div">
              <Particles params={particles_eatabeat} style={{height: "100%", width: "100%", position: "absolute", borderRadius: "10px"}} />
              <img src={img_eatabeat} style={{height: "30%", margin: "auto"}} />
            </PoseProject>
            <PoseProject i="2" initialPose="hide" pose="show" className="project-div"></PoseProject>
            <PoseProject i="3" initialPose="hide" pose="show" className="project-div"></PoseProject>
            <PoseProject i="4" initialPose="hide" pose="show" className="project-div"></PoseProject>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
