import React, { useReducer } from 'react';
import '../style.css';
import { useSpring, useSprings, animated as anim, config } from 'react-spring'
import posed from 'react-pose';

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

        <span style={{display: "block", height: "25vh"}}></span>

        <FadeUpDiv initialPose="hide" pose="show" className="about-title-div">
          <h3 className="about-title mobile">
            Hey! 👋
          </h3>
        </FadeUpDiv>

        <FadeUpDiv initialPose="hide" pose="show" delay="100" className="about-title-div">
          <h3 className="about-title mobile">
            I'm Iman Radjavi
          </h3>
        </FadeUpDiv>

        <FadeUpDiv initialPose="hide" pose="show" delay="200" style={{position: "relative"}}>
          <p className="about-desc mobile">
            Currently studying <span style={{color: "#E16565"}}>Computer Science & Engineering</span> at Chalmers University of Technology in Gothenburg, Sweden.
            On my spare time I work with fun projects to learn new technologies.
          </p>
        </FadeUpDiv>

        <div class="linksDiv">
          <PoseLink i={1} initialPose="hide" pose="show" href="mailto:radjavi@hotmail.com" target="_blank" className="social"><box-icon name='paper-plane' color="#454757"></box-icon></PoseLink>
          <PoseLink i={2} initialPose="hide" pose="show" href="https://www.linkedin.com/in/iman-radjavi/" target="_blank" className="social"><box-icon type='logo' name='linkedin' color="#454757"></box-icon></PoseLink>
          <PoseLink i={3} initialPose="hide" pose="show" href="https://github.com/radjavi" target="_blank" className="social"><box-icon type='logo' name='github' color="#454757"></box-icon></PoseLink>
        </div>
      </div>
    </div>
  );
}

export default Main;
