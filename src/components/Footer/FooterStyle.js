import styled from "styled-components";

export const FooterStyled = styled.div`
    width: 98%;
    display:flex;
    flex-direction:column;
    align-items:center;
  .footer-nav{
    width:98%;
    text-align:center;
  }
  .footer-nav a{
    color:lavenderblush;
    font-size:1.5rem;
    width:20%;
  }
  .top-of-page{
    width:98%;
    margin-bottom:10%;
    text-align:center;
  }
  .top-of-page a{
     font-size:2rem;
     text-decoration:none;
     color:plum;
  }
  .top-of-page:hover{
    transform:scale(1.1);
    color:lightblue;
  }
  .top-of-page a:hover{
    color:lightblue;
  }
  @media(max-width:500px){
    margin-top:30%;
  .top-of-page a{
    font-size:1.2rem;
  }
  a{
    font-size:1.2rem;
  }
  .footer-nav a{
    font-size:1.2rem;
    width:90%;
  }
  }
`;