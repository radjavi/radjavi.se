import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import { Link } from "react-router-dom";

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <Header active="projects" />
      </div>
    );
  }
}

export default Projects;
