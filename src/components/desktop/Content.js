import React, { Component } from 'react';
import '../style.css';
import { Redirect } from "react-router-dom";
import posed from 'react-pose';
import Particles from 'react-particles-js';
import 'boxicons';

class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var {title, title2, subtitle, description, link, social, colors} = this.props;

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
      <div>
        <FadeUpDiv initialPose="hide" pose="show" className="about-title-div">
          <h3 className="about-title" style={colors ? {color: colors.title} : {}}>
            {title}
          </h3>
        </FadeUpDiv>
        {title2 && (
          <FadeUpDiv initialPose="hide" pose="show" delay="100" className="about-title-div">
            <h3 className="about-title" style={colors ? {color: colors.title} : {}}>
              {title2}
            </h3>
          </FadeUpDiv>
        )}
        <FadeUpDiv initialPose="hide" pose="show" delay="100" style={{position: "relative"}}>
          <h4 className="about-subtitle" style={colors ? {color: colors.subtitle} : {}}>
            {subtitle}
          </h4>
        </FadeUpDiv>
        <FadeUpDiv initialPose="hide" pose="show" delay="200" style={{position: "relative"}}>
          <p className="about-desc" style={colors ? {color: colors.desc} : {}}>
            {description}
          </p>
        </FadeUpDiv>
        {social && (
          <div class="linksDiv">
            <PoseLink i={1} initialPose="hide" pose="show" href="mailto:radjavi@hotmail.com" target="_blank" className="social"><box-icon name='paper-plane' color="#454757"></box-icon></PoseLink>
            <PoseLink i={2} initialPose="hide" pose="show" href="https://www.linkedin.com/in/iman-radjavi/" target="_blank" className="social"><box-icon type='logo' name='linkedin' color="#454757"></box-icon></PoseLink>
            <PoseLink i={3} initialPose="hide" pose="show" href="https://github.com/radjavi" target="_blank" className="social"><box-icon type='logo' name='github' color="#454757"></box-icon></PoseLink>
          </div>
        )}
        <div class="linksDiv">
          {link && <PoseLink i={1} initialPose="hide" pose="show" href={link.href} target="_blank" className="link" style={colors ? {color: colors.desc} : {}}>Check it out</PoseLink>}
        </div>
        <span style={{display: "block", height: "200px"}}></span>
      </div>
    );
  }
}

export default Content;
