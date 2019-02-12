import React, { Component, useState } from 'react';
import '../App.css';
import Content from './Content'
import { Route, Redirect } from "react-router-dom";
import posed from 'react-pose';
import Particles from 'react-particles-js';
import particles_eatabeat from '../assets/particles-eatabeat.json'
import img_eatabeat from '../assets/eatabeat-logo.svg'
import { useSpring, useTrail, animated as anim, config } from 'react-spring'

function Main() {

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

  const [project, setProject] = useState(0);
  const [hover, setHover] = useState(0);
  const logoProps = useSpring({ config: config.slow, from: {opacity: 0, top: 10}, to: {opacity: 1, top: 0}, delay: 600 });
  const projProps = (i) => useSpring({ config: config.slow, from: {opacity: 0, top: 30}, to: {opacity: 1, top: 0, transform: project == i ? "scale(1.1)" : "scale(1)"}, delay: i * 150 + 600 });

  return (
    <div className="Home">
      <div className="smallBody home-grid">
        <div className="about-grid">
          <header>
            <anim.div class="relative" style={logoProps}>
              <h1 id="header-logo">r<span style={{color: "#E16565"}}>.</span></h1>
            </anim.div>
          </header>

          <span style={{display: "block", height: "120px"}}></span>

          <div id="about-text-block">
            {(project == 0) && homePage}
            {(project == 1) && eatabeatPage}
          </div>
        </div>

        <div className="projects-grid">
          <anim.div style={projProps(1)} id="project1" className="project-div" onClick={() => setProject(project != 1 ? 1 : 0)}>
            <Particles params={particles_eatabeat} style={{height: "100%", width: "100%", position: "absolute", borderRadius: "10px"}} />
            <img src={img_eatabeat} style={{height: "30%", margin: "auto"}} />
          </anim.div>
          <anim.div style={projProps(2)} className="project-div" onClick={() => setProject(project != 2 ? 2 : 0)}></anim.div>
          <anim.div style={projProps(3)} className="project-div" onClick={() => setProject(project != 3 ? 3 : 0)}></anim.div>
          <anim.div style={projProps(4)} className="project-div" onClick={() => setProject(project != 4 ? 4 : 0)}></anim.div>
        </div>
      </div>
    </div>
  );
}

export default Main;
