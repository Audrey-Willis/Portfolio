import styled from "styled-components";

export const AboutStyle = styled.div`
  font-family: "Gloria Hallelujah", cursive;
  margin: 2%;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:3%;
  margin-bottom:15%;
  
  .about {
    width:90%;
    padding: 2%;
    display: flex;
    align-items: center;
    justify-content:center;
  }
  .about-p {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius:50%;
    text-align:center;
    padding:10%;
    border:top:10px double lightblue;
    border-left:10px double lightblue;
    border-bottom:10px double pink;
    border-right:10px double pink;
  }
  .about-p p {
    font-size:1.2rem;
  }
  .about-p h1 {
    text-align: center;
    color:lightblue;
    font-size:2rem;
  }
  .about-header {
    display: flex;
    justify-content: space-around;
    width: 90%;
  }
  .about-header p {
    background-color: pink;
  }
  @media (max-width:800px){
    .about-p p{
      font-size:1rem;
    }
  }
  .about-p{
    padding:8%;
  }
  @media(max-width:500px){
    .about-p{
      border:none;
    }
    .about-p p{
      font-size:.9rem;
    }
  }
  @media(max-width:500px){
    margin-top:20%;
    .about-p h1{
      font-size:1rem;
    }
  }
`;
