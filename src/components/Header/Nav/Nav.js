import React from "react";
import {NavStyle} from "./NavStyle";

function Nav(){
    return (
      <NavStyle>
        <a aria-label = "about-me" href="#about">About Me</a>
        <a aria-label = "experience" href="#experience">Experience </a>
        <a aria-label = "projects" href="#projects">Projects</a>
        <a aria-label = "resume" href="https://drive.google.com/file/d/1bPhW-E49b6FKSFYARwCGWQf3T6vo6hO_/view?usp=sharing">Resume </a>
        <a aria-label = "contact" href="#contact">Contact</a>
      </NavStyle>
    );
}
export default Nav;
