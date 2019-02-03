import React, { Component } from 'react';
import '../App.css';
import Header from './Header'
import { Link } from "react-router-dom";
import posed from 'react-pose';
import Particles from 'react-particles-js';
import particles_eatabeat from '../assets/particles-eatabeat.json'
import img_eatabeat from '../assets/eatabeat-logo.svg'

class Projects extends Component {
  render() {
    const FadeUpDiv = posed.div({
      hide: { opacity: 0, marginTop: "30px" },
      show: {
        opacity: 1,
        marginTop: "0px",
        transition: {
          opacity: {duration: 500, ease: 'linear'},
          marginTop: {duration: 500, ease: 'easeOut'}
        }
      }
    });

    const PoseProject = posed.div({
      hide: { opacity: 0, marginTop: "40px" },
      show: {
        opacity: 1,
        marginTop: "0px",
        delay: ({i}) => (i * 100),
        transition: {
          opacity: {duration: 500, ease: 'linear'},
          marginTop: {duration: 500, ease: 'easeOut'}
        }
      },
      props: { i: 0 },
      hoverable: true,
      init: {marginTop: "0px", transition: {type: "spring", stiffness: 300, damping: 10}},
      hover: {marginTop: "-30px", content: "testing", transition: {type: "spring", stiffness: 300, damping: 10}}
    });

    return (
      <div className="Projects">
        <div style={{width: "100%", position: "relative"}}>
          <div className="smallBody">
            <FadeUpDiv initialPose="hide" pose="show" className="projects-text">
              <h2>Selected Projects</h2>
              <p id="projects-desc">Some of my favourite projects from the past year.</p>
            </FadeUpDiv>
          </div>

          <span style={{height: "420px", display: "block"}}></span>

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

export default Projects;
