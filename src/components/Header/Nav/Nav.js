import React from "react";
import {NavStyle} from "./NavStyle";

function Nav(){
    return (
      <NavStyle>
        <a href="#about">About Me</a>
        <a href="#experience" className="diff-color">
          Experience
        </a>
        <a href="#projects">Projects</a>
        <a
          href="https://drive.google.com/file/d/1vJEdGCGKteEKtHPxpclVQvERXEdxiDKE/view?usp=sharing"className = "diff-color" >
          Resume
        </a>
        <a href="#contact">Contact</a>
      </NavStyle>
    );
}
export default Nav;
