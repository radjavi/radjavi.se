import React, { useReducer } from 'react';
import '../style.css';
import { useSpring, useSprings, animated as anim, config } from 'react-spring'
import posed from 'react-pose';
import Particles from 'react-particles-js';
import particles_eatabeat from '../assets/particles-eatabeat.json'
import img_eatabeat from '../assets/eatabeat-logo.svg'
import cetac from '../assets/cetac.svg'
import { Zoom, Fade, Flip } from 'react-reveal';

function Main() {
  const logoProps = useSpring({ config: config.slow, from: {opacity: 0, top: 10}, to: {opacity: 1, top: 0}, delay: 300 });

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
      delay: ({i}) => (i * 100 + 300),
      transition: {
        opacity: {duration: 300, ease: 'linear'},
        top: {duration: 500, ease: 'easeOut'}
      }
    },
    props: { i: 0 }
  });

  return (
    <div className="Home-mobile">
      <div className="smallBody">
        <header>
          <anim.div class="relative" style={logoProps}>
            <h1 id="header-logo">r<span id="header-logo-dot">.</span></h1>
          </anim.div>
        </header>

        <span style={{display: "block", height: "22vh"}}></span>

        <FadeUpDiv initialPose="hide" pose="show" className="about-title-div">
          <h3 className="welcome-mobile">
            Hey! 👋
          </h3>
        </FadeUpDiv>

        <FadeUpDiv initialPose="hide" pose="show" delay="100" className="about-title-div">
          <h3 className="welcome-mobile">
            I'm Iman Radjavi
          </h3>
        </FadeUpDiv>

        <FadeUpDiv initialPose="hide" pose="show" delay="200" style={{position: "relative"}}>
          <p className="about-desc mobile">
            Currently studying <span style={{color: "#E16565", fontWeight: 600}}>Computer Science & Engineering</span> at Chalmers University of Technology in Gothenburg, Sweden.
            On my spare time I work with fun projects to learn new technologies.
          </p>
        </FadeUpDiv>

        <span style={{display: "block", height: "80px"}}></span>

        <div class="linksDiv">
          <PoseLink i={1} initialPose="hide" pose="show" href="mailto:radjavi@hotmail.com" target="_blank" className="social"><box-icon name='paper-plane' color="#454757"></box-icon></PoseLink>
          <PoseLink i={2} initialPose="hide" pose="show" href="https://www.linkedin.com/in/iman-radjavi/" target="_blank" className="social"><box-icon type='logo' name='linkedin' color="#454757"></box-icon></PoseLink>
          <PoseLink i={3} initialPose="hide" pose="show" href="https://github.com/radjavi" target="_blank" className="social"><box-icon type='logo' name='github' color="#454757"></box-icon></PoseLink>
        </div>
      </div>

      <span style={{display: "block", height: "50px"}}></span>

      {/* Project 1 */}
      <div>
        <Fade bottom distance="40px">
          <div id="project1" className="project-div mobile">
            <Particles params={particles_eatabeat} style={{height: "100%", width: "100%", position: "absolute", borderRadius: "10px"}} />
            <img src={img_eatabeat} style={{height: "75px", margin: "auto"}} />
          </div>
        </Fade>
        <div className="smallBody" style={{paddingTop: "15px"}}>
          <Fade cascade bottom distance="40px" delay={50}>
            <div>
              <h3 className="about-title mobile">
                Eat A Beat
              </h3>
              <h3 className="about-subtitle">
                Spotify devX - 2018
              </h3>
              <p className="about-desc mobile" style={{marginTop: "30px"}}>
                A 2D game generated from any track, powered by the Spotify API/SDK. This project won 1st place on Spotify DevX Hackathon 2018.
              </p>
              <span style={{display: "block", height: "50px"}}></span>
              <a href="" target="_blank" className="link mobile">
                Check it out
              </a>
              <span style={{display: "block", height: "50px"}}></span>
            </div>
          </Fade>
        </div>
      </div>

      {/* Project 2 */}
      <div>
        <Fade bottom distance="40px">
          <div id="project2" className="project-div mobile">
            <box-icon type='solid' name='car' color="white" size="65px" style={{margin: "auto"}}></box-icon>
          </div>
        </Fade>
        <div className="smallBody" style={{paddingTop: "15px"}}>
          <Fade cascade bottom distance="40px" delay={50}>
            <div>
              <h3 className="about-title mobile">
                Freefinder
              </h3>
              <h3 className="about-subtitle">
                Personal project
              </h3>
              <p className="about-desc mobile" style={{marginTop: "30px"}}>
                Developed a serverless backend using AWS Lambda, Cognito & DynamoDB that notifies users when a vehicle of interest is found on a specific website.
              </p>
              <span style={{display: "block", height: "50px"}}></span>
              <a href="" target="_blank" className="link mobile">
                Check it out
              </a>
              <span style={{display: "block", height: "50px"}}></span>
            </div>
          </Fade>
        </div>
      </div>

      {/* Project 3 */}
      <div>
        <Fade bottom distance="40px">
          <div id="project3" className="project-div mobile">
            <box-icon name='mobile' color="white" size="65px" style={{margin: "auto"}}></box-icon>
          </div>
        </Fade>
        <div className="smallBody" style={{paddingTop: "15px"}}>
          <Fade cascade bottom distance="40px" delay={50}>
            <div>
              <h3 className="about-title mobile">
                Smart Home
              </h3>
              <h3 className="about-subtitle">
                Personal project
              </h3>
              <p className="about-desc mobile" style={{marginTop: "30px"}}>
                Using Google Firebase, I have connected my Raspberry Pi 3 to a database. This way, I can connect my Android app to Firebase and use it to control my home.
              </p>
              <span style={{display: "block", height: "50px"}}></span>
              <a href="" target="_blank" className="link mobile">
                Check it out
              </a>
              <span style={{display: "block", height: "50px"}}></span>
            </div>
          </Fade>
        </div>
      </div>

      {/* Project 4 */}
      <div>
        <Fade bottom distance="40px">
          <div id="project4" className="project-div mobile">
            <img src={cetac} style={{height: "65px", margin: "auto"}} />
          </div>
        </Fade>
        <div className="smallBody" style={{paddingTop: "15px"}}>
          <Fade cascade bottom distance="40px" delay={50}>
            <div>
              <h3 className="about-title mobile">
                CETAC
              </h3>
              <h3 className="about-subtitle">
                WordPress website
              </h3>
              <p className="about-desc mobile" style={{marginTop: "30px"}}>
                Created a brand new website for the student organization CETAC using Wordpress.
              </p>
              <span style={{display: "block", height: "50px"}}></span>
              <a href="" target="_blank" className="link mobile">
                Check it out
              </a>
              <span style={{display: "block", height: "50px"}}></span>
            </div>
          </Fade>
        </div>
      </div>

      <span style={{display: "block", height: "50px"}}></span>


        <footer>
          <div className="smallBody">
            <Fade right cascade distance="40px">
              <div style={{display: "flex", flexDirection: "column"}}>
                <h1 id="header-logo">r<span id="header-logo-dot">.</span></h1>
                <span style={{display: "block", height: "15px"}}></span>
                <p>© {new Date().getFullYear()} Iman Radjavi</p>
              </div>
            </Fade>
          </div>
        </footer>

    </div>
  );
}

export default Main;
