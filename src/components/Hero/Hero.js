import React, { useState } from 'react';
import './hero.scss';
// import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { ArrowForwardIos, ArrowRightAlt } from '@mui/icons-material';

let LinkScroll = Scroll.Link;

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-background">
          <video
            autoPlay
            loop
            muted
            className="video-background"
            src="../../videos/money-zoom.mp4"
            type="video/mp4"
          ></video>
        </div>
        <div className="hero-content">
          <h1>Loan made easy</h1>
          <p>Sign up for new account</p>
          <div className="hero-button-wrapper">
            // ? align the arrows
            <LinkScroll
              className="button"
              to="signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Get Started {hover ? <ArrowRightAlt /> : <ArrowForwardIos />}
            </LinkScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
