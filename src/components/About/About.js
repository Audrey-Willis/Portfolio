import React from "react";
import {AboutStyle} from "./AboutStyle";
import{Link} from "react-router-dom"


function About(){
    return (
      <AboutStyle>
        <div className="about rotate-in-center">
          <div className="about-header">
            <p className="wobble-hor-bottom">🎉Drum Roll Please🎉</p>
            <p className="wobble-hor-bottom">🎉Cue the applause🎉</p>
          </div>
          <div className="about-p">
            <h1>Welcome!</h1>
            <p>
              My name is Audrey Willis. I'm a semi-young woman living in eastern
              Tennessee with my fiance and three great danes. I love challenges
              and puzzles. My favorite feeling in the world is the sense of
              accomplishment one feels when they've been struggling with a
              problem and have finally gotten to their eureka moment.
              More than anything, I'm a lover of life-long learning. I don't
              consider it a day well spent unless I've expanded my mind in some
              way. I'm eager to benefit from the knowledge of more senior
              developers in the workplace. I hope to always be better than I was
              the day before.
            </p>
          </div>
          <Link to="/Experience" className = "arrow">&#8595;</Link>
        </div>
      </AboutStyle>
    );
}
export default About;