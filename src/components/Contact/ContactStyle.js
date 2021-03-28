import styled from "styled-components";

export const ContactStyled = styled.div`
display:flex;
justify-content:center;
margin-bottom:15%;
width:90%;
.contact-box{
    display:flex;
    flex-direction:column;
    border-top:5px double pink;
    border-bottom:5px double lightblue;
    border-left: 5px double lightblue;
    border-right: 5px double pink;
    height:50vh;
    align-items:center;
    justify-content:space-around;
    width:60%;
    padding:10%;
}
h1{
    color:pink;
    font-size:2.5rem;
}
.links{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:80%;
}
.links a{
    color:lightblue;
    text-decoration:none;
    font-size:1.5rem;
    text-align:center;
    border:5px double plum;
    width:98%;
    padding:1%;
    margin-bottom:3%;
}
.links a:hover{
    transform:scale(1.1);
    color:pink;
}
@media(max-width:500px){
    margin:0%;
.contact-box{
    border:none;
    padding:0%;
    justify-content:center;
}
h1{
    font-size:1.3rem;
}
.contact-box a{
    border:none;
    font-size:1.1rem;
}
}

`;