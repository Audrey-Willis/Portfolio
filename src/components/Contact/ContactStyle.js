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
    width:60%;
    padding:5%;
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
    font-size:2rem;
    text-align:center;
    border:5px double plum;
    width:100%;
    padding:1%;
    margin:2%;
}
.links a:hover{
    transform:scale(1.1);
    color:pink;
}
h1{
    color:pink;
    font-size:2.5rem;
}
@media(max-width:800px){
    h1{
        font-size:2rem;
    }
    .links a{
        font-size:1.5rem;
    }
}

@media(max-width:500px){
.contact-box{
    width:98%;
    padding:none;
    margin:none;
    border:none;

}
.links{
    width:98%;
    align-items:center;
}
.contact-box a{
    width:98%;
    font-size:1rem;
}
}

`