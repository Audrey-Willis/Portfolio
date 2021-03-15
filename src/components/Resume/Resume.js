import React from "react";
import {ResumeStyle} from "./ResumeStyle"

function Resume(){
    return(
        <ResumeStyle>
            <div className = "resume-main puff-in-center">
             <a href = "https://drive.google.com/file/d/1vJEdGCGKteEKtHPxpclVQvERXEdxiDKE/view?usp=sharing">Click here to open PDF file.</a>
           <img src = "https://i.ibb.co/8rH8TSR/Cream-and-Gray-Modern-Resume.jpg" alt = "resume"/>
           </div>
        </ResumeStyle>
    )
}
export default Resume;