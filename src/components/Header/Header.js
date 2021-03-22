import React from "react";
import Nav from "../Header/Nav/Nav";
import {HeaderStyled} from "./HeaderStyle"
import TitlePage from "../Title-Page/TitlePage.js"

function Header(){
    return(
        <HeaderStyled>
            <Nav/>
            <TitlePage/>
        </HeaderStyled>
    )
}
export default Header;