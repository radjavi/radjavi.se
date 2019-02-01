import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.positionMenuLine();
  }

  componentDidUpdate(prevProps) {
    if (this.props.active != prevProps.active) {
      this.positionMenuLine();
      console.log(this.props.active);
    }
  }

  positionMenuLine() {
    var headerPos = document.getElementById("headerLinks").getBoundingClientRect();
    var pos;
    if (this.props.active == 'home') pos = document.getElementById("homeLink").getBoundingClientRect();
    else if (this.props.active == 'projects') pos = document.getElementById("projectsLink").getBoundingClientRect();
    document.getElementById("menu-line").style.width = `${pos.width-1.9}px`;
    document.getElementById("menu-line").style.left = `${pos.left - headerPos.left}px`;
  }

  render() {
    const { active } = this.props;

    return(
      <div className="smallBody">
        <header className="header">
          <h1 id="header-logo">r<span style={{color: "#E16565"}}>.</span></h1>
          <ul id="headerLinks" className="header-menu">
            <li>
              <Link to="/" id="homeLink" className={active == "home" ? "header-link active" : "header-link"}>About</Link>
            </li>
            <li>
              <Link to="/projects" id="projectsLink" className={active == "projects" ? "header-link active" : "header-link"}>Projects</Link>
            </li>
            <li id="menu-line" style={{marginLeft: 0}}></li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
