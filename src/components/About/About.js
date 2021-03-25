import React from "react";
import {AboutStyle} from "./AboutStyle";


function About(){
    return (
      <AboutStyle id = "about">
        <div className="about">
          <div className="about-p">
            <h1>Who am I?</h1>
            <p>
              My name is Audrey Willis. I'm living in eastern
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
        </div>
      </AboutStyle>
    );
}
export default About;