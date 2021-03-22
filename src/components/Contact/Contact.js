import React from "react";
import {ContactStyled} from "./ContactStyle"

function Contact(){
    return (
      <ContactStyled id = "contact">
        <div className = "contact-box">
        <h1>Contact Me!</h1>
        <div className = "links">
          <a href="mailto: audrey.willis.91@icloud.com">Email</a>
          <a href="https://www.linkedin.com/in/audrey-willis-404247209/"> LinkedIn </a>
          <a href="https://github.com/Audrey-Willis">GitHub</a>
          <a href = "https://drive.google.com/file/d/1vJEdGCGKteEKtHPxpclVQvERXEdxiDKE/view?usp=sharing">Resume</a>
        </div>
        </div>
      </ContactStyled>
    );
}
export default Contact;