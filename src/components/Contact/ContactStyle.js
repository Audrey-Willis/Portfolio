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
    margin:5%;
    height:50vh;
    align-items:center;
    justify-content:space-around;
    width:40%;
    padding:2%;
}
.links{
    display:flex;
    flex-direction:column;
    width:80%;
}
.links a{
    color:lightblue;
    text-decoration:none;
    font-size:1.5rem;
    text-align:center;
    border:5px double plum;
    width:100%;
    margin-bottom:10%;
}
.links a:hover{
    transform:scale(1.1);
    color:pink;
}
h1{
    color:pink;
}
`