import React, { useReducer } from 'react';
import '../style.css';
import Content from './Content'
import { Route, Redirect } from "react-router-dom";
import posed from 'react-pose';
import Particles from 'react-particles-js';
import particles_eatabeat from '../assets/particles-eatabeat.json'
import img_eatabeat from '../assets/eatabeat-logo.svg'
import cetac from '../assets/cetac.svg'
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
      link={{href: ""}}
      colors={{title: "#FFC858", subtitle: "#FFC858", desc: "#fff"}}
    />
  )
  const freefinderPage = (
    <Content
      title="Freefinder"
      subtitle="Personal project"
      description="Developed a serverless backend using AWS Lambda, Cognito & DynamoDB that notifies users when a vehicle of interest is found on a specific website."
      link={{href: ""}}
      colors={{title: "#fff", subtitle: "#fff", desc: "#9aaabf"}}
    />
  )
  const smarthomePage = (
    <Content
      title="Smart Home"
      subtitle="Personal project"
      description="Using Google Firebase, I have connected my Raspberry Pi 3 to a database. This way, I can connect my Android app to Firebase and use it to control my home."
      link={{href: ""}}
      colors={{title: "#fff", subtitle: "#fff", desc: "#f6abbc"}}
    />
  )
  const cetacPage = (
    <Content
      title="CETAC"
      subtitle="WordPress website"
      description="Created a brand new website for the student organization CETAC using Wordpress."
      link={{href: ""}}
    />
  )

  const projConfig = (index) => ({
    config: key => key == "top" || key == "opacity" ? config.slow : config.wobbly,
    from: {opacity: 0, top: 30},
    to: { opacity: 1, top: 0},
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
      case 2:
        return state.project != action ? {project: action, colors: {bg: "#233142", prim: "#fff", acc: "#55AFEF"}} : initState;
      case 3:
        return state.project != action ? {project: action, colors: {bg: "#993249", prim: "#fff", acc: "#F97794"}} : initState;
      case 4:
        return state.project != action ? {project: action, colors: {bg: "#fff", prim: "#000", acc: "#FBAB7E"}} : initState;
      default:
        return initState;
    }
  }

  const [state, setState] = useReducer(stateReducer, initState);

  const logoProps = useSpring({ config: config.slow, from: {opacity: 0, top: 10}, to: {opacity: 1, top: 0}, delay: 300 });
  const [projSprings, setProjSpring, stopProjSpring] = useSprings(4, index => projConfig(index));

  return (
    <anim.div style={{backgroundColor: state.colors.bg}} className="Home">
      <div className="smallBody home-grid">
        <div className="about-grid">
          <header>
            <anim.div class="relative" style={logoProps}>
              <h1 id="header-logo" style={{color: state.colors.prim}}>r<span id="header-logo-dot" style={{color: state.colors.acc}}>.</span></h1>
            </anim.div>
          </header>

          <span style={{display: "block", height: "110px"}}></span>

          <div id="about-text-block">
            {(state.project == 0) && homePage}
            {(state.project == 1) && eatabeatPage}
            {(state.project == 2) && freefinderPage}
            {(state.project == 3) && smarthomePage}
            {(state.project == 4) && cetacPage}
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
                    style={state.project == (i+1) ? {transform: "scale(1.1)"} : props}
                    className="project-div"
                    onClick={() => setState(i+1)}
                  >
                    <Particles params={particles_eatabeat} style={{height: "100%", width: "100%", position: "absolute", borderRadius: "10px"}} />
                    <img src={img_eatabeat} style={{height: "75px", margin: "auto"}} />
                  </anim.div>
                );
              case 1:
                return (
                  <anim.div
                    id="project2"
                    style={state.project == (i+1) ? {transform: "scale(1.1)"} : props}
                    className="project-div"
                    onClick={() => setState(i+1)}
                  >
                    <box-icon type='solid' name='car' color="white" size="65px" style={{margin: "auto"}}></box-icon>
                  </anim.div>
                );
              case 2:
                return (
                  <anim.div
                    id="project3"
                    style={state.project == (i+1) ? {transform: "scale(1.1)"} : props}
                    className="project-div"
                    onClick={() => setState(i+1)}
                  >
                    <box-icon name='mobile' color="white" size="65px" style={{margin: "auto"}}></box-icon>
                  </anim.div>
                );
              case 3:
                return (
                  <anim.div
                    id="project4"
                    style={state.project == (i+1) ? {transform: "scale(1.1)"} : props}
                    className="project-div"
                    onClick={() => setState(i+1)}
                  >
                    {console.log(props)}
                    <img src={cetac} style={{height: "65px", margin: "auto"}} />
                  </anim.div>
                );
              default:
                return (
                  <anim.div
                    style={state.project == (i+1) ? {transform: "scale(1.1)"} : props}
                    className="project-div"
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
