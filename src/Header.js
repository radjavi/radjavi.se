import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  homeRef = node => {
    if (node) {
      var pos = node.getBoundingClientRect();
      var headerPos = document.getElementById("headerLinks").getBoundingClientRect();
      if (this.props.active == 'home') {
        document.getElementById("menu-line").style.width = `${pos.width}px`;
        document.getElementById("menu-line").style.left = `${pos.left - headerPos.left}px`;
      }
    }
  }

  projectsRef = node => {
    if (node) {
      var pos = node.getBoundingClientRect();
      var headerPos = document.getElementById("headerLinks").getBoundingClientRect();
      if (this.props.active == 'projects') {
        document.getElementById("menu-line").style.width = `${pos.width}px`;
        document.getElementById("menu-line").style.left = `${pos.left - headerPos.left}px`;
      }
    }
  }

  render() {
    const { active } = this.props;

    return(
      <div className="smallBody">
        <header className="header">
          <h1 id="header-logo">Iman Radjavi<span style={{color: "#e23e57"}}>.</span></h1>
          <ul id="headerLinks" className="header-menu">
            <li>
              <Link to="/" innerRef={this.homeRef} className={active == "home" ? "header-link active" : "header-link"}>Home</Link>
            </li>
            <li>
              <Link to="/projects" innerRef={this.projectsRef} className={active == "projects" ? "header-link active" : "header-link"}>Projects</Link>
            </li>
            <li id="menu-line" style={{marginLeft: 0}}></li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
