import React, { Component } from 'react';
import '../App.css';
import Header from './Header'
import { Link } from "react-router-dom";

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <div style={{width: "100%", position: "relative"}}>
          <div className="smallBody">
            <div className="projects-text">
              <h2>Selected Projects</h2>
              <p id="projects-desc">Some of my favourite projects from the past year.</p>
            </div>
          </div>

          <span style={{height: "420px", display: "block"}}></span>

          <div className="projects-grid">
            <div className="project-div"></div>
            <div className="project-div"></div>
            <div className="project-div"></div>
            <div className="project-div"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
