import React from "react";
import Nav from "../Header/Nav/Nav";
import {FooterStyled} from "./FooterStyle";


function Footer(){
    return(
        <FooterStyled>
            <div className = "top-of-page">
                <a href = "#title-page">Top of page</a>
            </div>
            <div className = "footer-nav">
            <Nav/>
            </div>
        </FooterStyled>
    )
}
export default Footer;