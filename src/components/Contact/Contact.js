import React from "react";
import {ContactStyled} from "./ContactStyle"

function Contact(){
    return (
      <ContactStyled id = "contact">
        <div className = "contact-box">
           <h1>Contact Me!</h1>
           <div className = "links">
              <a aria-label = "email" href="mailto: audrey.willis.91@icloud.com">Email</a>
              <a aria-label = "linkedin" href="https://www.linkedin.com/in/audrey-willis-404247209/"> Linkedin </a>
              <a aria-label = "github" href="https://github.com/Audrey-Willis">GitHub</a>
              <a aria-label = "resume" href = "https://drive.google.com/file/d/1vJEdGCGKteEKtHPxpclVQvERXEdxiDKE/view?usp=sharing">Resume</a>
            </div>
        </div>
      </ContactStyled>
    );
}
export default Contact;