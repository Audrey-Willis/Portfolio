import React from "react";
import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <Link to = "/">Title-Page</Link>
            <Link to = "/About">ABout-Me</Link>
            <Link to = "/Experience">Experience</Link>
            <Link to = "/Projects">Projects</Link>
            <Link to = "/Resume">Resume</Link>
            <Link to = "./Contact">Contact</Link>
         </nav>
    )
}
export default Nav;
