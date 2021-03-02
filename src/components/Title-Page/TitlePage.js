import React from "react";
import {TitlePageStyle} from "./TitlePageStyle";
import {Link} from "react-router-dom";
import About from "../About/About";

function TitlePage(){

    return (
      <TitlePageStyle>
        <div className="title-page">
          <div className="comp-icon jello-horizontal jello-horizontal-hover">
            <p>I'm Ticklish, please don't click me!!!</p>
            <img
              src="https://i.ibb.co/2gBhM3H/clipart4734355.png"
              alt="computer"
            />
          </div>
          <div className="title-text">
            <h1>Audrey Willis</h1>
            <h2>Front-End-Developer</h2>
            <blockquote>
              “Science and technology multiply around us. To an increasing
              extent they dictate the languages in which we speak and
              think.Either we use those languages, or we remain mute.” ―
              J.G.Ballard
            </blockquote>
            <Link to="/About" className = "arrow" >&#8595;</Link>
          </div>
        </div>
      </TitlePageStyle>
    );
}
export default TitlePage;