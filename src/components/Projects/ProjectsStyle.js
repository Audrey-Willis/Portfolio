import styled from "styled-components";

export const StyledProjects = styled.div`
  font-family: "Gloria Hallelujah", cursive;
  display: flex;
  flex-direction: column;
  margin-bottom: 15%;
  align-items: center;
  text-align: center;
  width: 98%;

  p {
    font-size: 1.3rem;
  }
  .title-and-links {
    width: 98%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 3%;
  }
  .projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .projects-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .projects-bottom{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }
  h1 {
    font-size: 2.5rem;
    text-decoration: underline;
  }
  h2 {
    font-size: 2rem;
  }
  h2,
  h3 {
    color: lightblue;
  }
  h3 {
    font-size: 1.5rem;
  }
  .project-text {
    width: 80%;
    margin: 5%;
  }
  .project {
    border-top: 5px double pink;
    border-bottom: 5px double lightblue;
    border-left: 5px double lightblue;
    border-right: 5px double pink;
    width: 90%;
    display: flex;
    flex-direction: column;
    padding: 3%;
    text-align: center;
    margin-bottom: 5%;
  }
  .image-and-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .project img {
    padding: 2%;
    background-color: pink;
    margin: 1%;
  }
  .project-links {
    width: 98%;
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  .project-links a {
    margin: 2%;
    color: plum;
    text-decoration: none;
    margin-bottom: 5%;
    font-size: 2rem;
  }
  .project-links a:active {
    color: black;
    color: lightblue;
  }
  @media (max-width: 800px) {
    p {
      font-size: 1.4rem;
    }
    .project-links a {
      font-size: 1.5rem;
    }
    .project-links h2 {
      font-size: 1.5rem;
    }
  }
  @media(max-width:500px){
    .project{
      width:90%;
      border:none;
      margin-bottom:20%;
    }
    h1{
      font-size:1.5rem;
      margin-bottom:20%;
    }
    img{
      width:90%;
    }
    .project-links a{
      font-size:.9rem;
    }
    .project-links h2{
      font-size:1.3rem;
    }
    .projects h3{
      font-size:1rem;
    }
    .project p{
      font-size:1rem;
    }
  }


`;