import React, { Component } from 'react';
import '../App.css';
import { Redirect } from "react-router-dom";
import posed from 'react-pose';
import Particles from 'react-particles-js';
import particles_eatabeat from '../assets/particles-eatabeat.json'
import img_eatabeat from '../assets/eatabeat-logo.svg'

class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var {title, subtitle, description, links} = this.props;
    if (!links) links = [];

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

    return (
      <div>
        <FadeUpDiv initialPose="hide" pose="show" id="about-title-div">
          <h3 id="about-title">
            {title}
          </h3>
        </FadeUpDiv>
        <FadeUpDiv initialPose="hide" pose="show" delay="50" style={{position: "relative"}}>
          <h4 id="about-subtitle">
            {subtitle}
          </h4>
        </FadeUpDiv>
        <FadeUpDiv initialPose="hide" pose="show" delay="600" style={{position: "relative"}}>
          <p id="about-desc">
            {description}
          </p>
        </FadeUpDiv>
        <div id="links">
          {links.map(link => <PoseLink i={link.nr} initialPose="hide" pose="show" href={link.href} target="_blank" className="link">{link.text}</PoseLink>)}
        </div>
        <span style={{display: "block", height: "200px"}}></span>
      </div>
    );
  }
}

export default Content;
