import React, { Component } from 'react';
import '../App.css';
import { Redirect } from "react-router-dom";
import posed from 'react-pose';
import Particles from 'react-particles-js';
import particles_eatabeat from '../assets/particles-eatabeat.json'
import img_eatabeat from '../assets/eatabeat-logo.svg'

class Page extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var {title, subtitle, description, links, activeProject} = this.props;
    if (!links) links = [];

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

    const PoseProject = posed.div({
      hide: { opacity: 0, top: "30px" },
      show: {
        opacity: 1,
        top: "0px",
        delay: ({i}) => (i * 150 + 600),
        transition: {
          opacity: {duration: 800, ease: 'linear'},
          top: {duration: 600, ease: 'backOut'}
        }
      },
      props: { i: 0, active: false },
      hoverable: true,
      init: {scale: ({active}) => active ? 1.05 : 1, transition: {duration: 200, ease: 'easeOut'}},
      hover: {scale: 1.05, transition: {duration: 200, ease: 'easeOut'}}
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
      <div className="Home">
        <div className="smallBody home-grid">
          <div className="about-grid">
            <header>
              <PoseLogo initialPose="hide" pose="show" style={{position: "relative"}}>
                <h1 id="header-logo">r<span style={{color: "#E16565"}}>.</span></h1>
              </PoseLogo>
            </header>

            <span style={{display: "block", height: "150px"}}></span>

            <div id="about-text-block">
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
          </div>

          <div className="projects-grid">
            <PoseProject i="1" active={activeProject == 1} id="project1" initialPose="hide" pose="show" className="project-div" onClick={() => (<Redirect push to="/eatabeat" />)}>
              <Particles params={particles_eatabeat} style={{height: "100%", width: "100%", position: "absolute", borderRadius: "10px"}} />
              <img src={img_eatabeat} style={{height: "30%", margin: "auto"}} />
            </PoseProject>
            <PoseProject i="2" active={activeProject == 2} initialPose="hide" pose="show" className="project-div"></PoseProject>
            <PoseProject i="3" active={activeProject == 3} initialPose="hide" pose="show" className="project-div"></PoseProject>
            <PoseProject i="4" active={activeProject == 4} initialPose="hide" pose="show" className="project-div"></PoseProject>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
