import React from "react";
import {Link} from "react-router-dom";
import {NavStyle} from "./NavStyle";

function Nav(){
    return(
        <NavStyle>
            <Link to = "/">Title-Page</Link>
            <Link to = "/About">ABout-Me</Link>
            <Link to = "/Experience">Experience</Link>
            <div>
                <img src="https://i.ibb.co/JdcPtQW/49899534-10217875493900119-6053761798190923776-n.jpg" alt = "Audrey"/>
            <h1>Audrey</h1>
            </div>
            <Link to = "/Projects">Projects</Link>
            <Link to = "/Resume">Resume</Link>
            <Link to = "./Contact">Contact</Link>
         </NavStyle>
    )
}
export default Nav;