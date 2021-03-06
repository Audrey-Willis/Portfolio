import React from "react";
import {Link} from "react-router-dom";
import {NavStyle} from "./NavStyle";

function Nav(){
    return(
        <NavStyle>
            <Link to = "/">Title-Page</Link>
            <Link to = "/About">ABout-Me</Link>
            <Link to = "/Experience">Experience</Link>
            <h1>Audrey</h1>
            <Link to = "/Projects">Projects</Link>
            <Link to = "/Resume">Resume</Link>
            <Link to = "./Contact">Contact</Link>
         </NavStyle>
    )
}
export default Nav;
