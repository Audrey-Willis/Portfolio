import styled from "styled-components";

export const NavStyle = styled.div`

display:flex;
justify-content:space-evenly;
align-items:center;
padding:5%;
with:90%;
a{
    color:#333;
    text-decoration:none;
    font-size:1.3rem;
}
a:hover{
    transform:scale(1.1);
}
@media(max-width:500px){
    flex-direction:column;
    align-items:center;
    text-align:center;
a{
    font-size:1rem;
    color:lavenderblush;
    margin:3%;
    border:1px double pink;
    width:90%;
}
}

`