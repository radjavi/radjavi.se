import React, { Component } from 'react';
import '../App.css';
import Content from './Content'
import { Route, Redirect } from "react-router-dom";
import posed from 'react-pose';
import Particles from 'react-particles-js';
import particles_eatabeat from '../assets/particles-eatabeat.json'
import img_eatabeat from '../assets/eatabeat-logo.svg'

class Page extends Component {
  constructor(props) {
    super(props);
  }

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

    const homePage = (
      <Content
        title={["Hey! 👋", <br />, "I'm Iman Radjavi"]}
        description={[
          "Currently studying ",
          <span style={{color: "#E16565"}}>Computer Science & Engineering</span>,
          " at Chalmers University of Technology in Gothenburg, Sweden. On my spare time I work with fun projects to learn new technologies."
        ]}
        links={[
          {nr: 1, text: "Email", href: "mailto:radjavi@hotmail.com"},
          {nr: 2, text: "LinkedIn", href: "https://www.linkedin.com/in/iman-radjavi/"},
          {nr: 3, text: "GitHub", href: "https://github.com/radjavi"}
        ]}
      />
    )

    const eatabeatPage = (
      <Content
        title="Eat A Beat"
        subtitle="Spotify devX 2018 - Hackathon, Gothenburg"
        description="A 2D game generated from any track, powered by the Spotify API/SDK. This project won 1st place on Spotify DevX Hackathon 2018."
        activeProject="1"
        links={[
          {nr: 1, text: "View", href: ""},
          {nr: 2, text: "Source", href: ""},
        ]}
      />
    )

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
              <Route exact path="/" render={() => homePage} />
              <Route exact path="/eatabeat" render={() => eatabeatPage} />
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

export default Page;
