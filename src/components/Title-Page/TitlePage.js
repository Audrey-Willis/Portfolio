import React from "react";
import {TitlePageStyle} from "./TitlePageStyle";
import {Link} from "react-router-dom";
import About from "../About/About";

function TitlePage(){
    return (
      <TitlePageStyle id="title-page">
        <div className="title-page">
            <div className="title-text">
              <div className = "title">
              <h1>Audrey Willis</h1>
              <h2>Front-End-Developer</h2>
              </div>
              <blockquote>
                “Science and technology multiply around us. To an increasing
                extent they dictate the languages in which we speak and
                think.Either we use those languages, or we remain mute.” ―
                J.G.Ballard
              </blockquote>
          </div>
        </div>
      </TitlePageStyle>
    );
}
export default TitlePage;