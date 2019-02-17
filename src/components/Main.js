import React, { Component, useState, useReducer, useEffect } from 'react';
import '../App.css';
import Content from './Content'
import { Route, Redirect } from "react-router-dom";
import posed from 'react-pose';
import Particles from 'react-particles-js';
import particles_eatabeat from '../assets/particles-eatabeat.json'
import img_eatabeat from '../assets/eatabeat-logo.svg'
import { useSpring, useSprings, animated as anim, config } from 'react-spring'

function Main() {

  const homePage = (
    <Content
      title="Hey! 👋"
      title2="I'm Iman Radjavi"
      description={[
        "Currently studying ",
        <span style={{color: "#E16565"}}>Computer Science & Engineering</span>,
        " at Chalmers University of Technology in Gothenburg, Sweden. On my spare time I work with fun projects to learn new technologies."
      ]}
      social
    />
  )

  const eatabeatPage = (
    <Content
      title="Eat A Beat"
      subtitle="Spotify devX 2018 - Hackathon, Gothenburg"
      description="A 2D game generated from any track, powered by the Spotify API/SDK. This project won 1st place on Spotify DevX Hackathon 2018."
      activeProject="1"
      link={{href: ""}}
      colors={{title: "#FFC858", subtitle: "#FFC858", desc: "#fff"}}
    />
  )

  const projConfig = (index) => ({
    config: key => key == "top" || key == "opacity" ? config.slow : config.wobbly,
    from: {opacity: 0, top: 30},
    to: {
      opacity: 1,
      top: 0,
      transform: state.project == (index+1) ? "scale(1.1)" : "scale(1)"
    },
    delay: key => key == "top" || key == "opacity" ? (index+1) * 150 + 200 : 0
  });

  const initState = {
    project: 0,
    colors: {
      bg: "#fff",
      prim: "#000",
      acc: "#E16565"
    }
  };

  function stateReducer(state, action) {
    switch(action) {
      case 1:
        return state.project != action ? {project: action, colors: {bg: "#29977F", prim: "#fff", acc: "#FFC858"}} : initState;
      default:
        return initState;
    }
  }

  const [state, setState] = useReducer(stateReducer, initState);

  const logoProps = useSpring({ config: config.slow, from: {opacity: 0, top: 10}, to: {opacity: 1, top: 0}, delay: 200 });
  const [projSprings, setProjSpring, stopProjSpring] = useSprings(4, index => projConfig(index));

  return (
    <anim.div style={{backgroundColor: state.colors.bg}} className="Home">
      <div className="smallBody home-grid">
        <div className="about-grid">
          <header>
            <anim.div class="relative" style={logoProps}>
              <h1 id="header-logo" style={{color: state.colors.prim}}>r<span style={{color: state.colors.acc}}>.</span></h1>
            </anim.div>
          </header>

          <span style={{display: "block", height: "110px"}}></span>

          <div id="about-text-block">
            {(state.project == 0) && homePage}
            {(state.project == 1) && eatabeatPage}
          </div>
        </div>

        <div className="projects-grid">
          {projSprings.map((props, i) => {
            switch(i) {
              // Eat A Beat
              case 0:
                return (
                  <anim.div
                    id="project1"
                    style={props}
                    className="project-div"
                    onMouseEnter={() => setProjSpring(index => ({transform: index == i ? "scale(1.05)" : "scale(1)"}))}
                    onMouseLeave={() => setProjSpring(index => ({transform: "scale(1)"}))}
                    onClick={() => setState(i+1)}
                  >
                    <Particles params={particles_eatabeat} style={{height: "100%", width: "100%", position: "absolute", borderRadius: "10px"}} />
                    <img src={img_eatabeat} style={{height: "30%", margin: "auto"}} />
                  </anim.div>
                );
                break;
              default:
                return (
                  <anim.div
                    style={props}
                    className="project-div"
                    onMouseEnter={() => setProjSpring(index => ({transform: index == i ? "scale(1.05)" : "scale(1)"}))}
                    onMouseLeave={() => setProjSpring(index => ({transform: "scale(1)"}))}
                    onClick={() => setState(i+1)}
                  />
                );
                break;
            }
          })}
        </div>
      </div>
    </anim.div>
  );
}

export default Main;
