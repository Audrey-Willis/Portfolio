import styled from "styled-components";

export const StyledProjects = styled.div`
  font-family: "Gloria Hallelujah", cursive;
  margin:2%;
  display:flex;
  flex-direction:column;
  margin-bottom:15%;
  width:100%;

  p{
    font-size:.8rem;
  }
  .title-and-links{
    width:98%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin-bottom:3%;
  }
  .projects {
    display: flex;
    flex-direction: column;
    align-items:center;
    width:98%;
  }
  h1{
    font-size:2.5rem;
    text-decoration:underline;
  }
  h2{
    font-size:1.3rem;
  }
   h2,h3{
    color:lightblue;
  }
  h3{
    font-size:1rem;
  }
  .project-text{
    width:60%;
  }
  .project {
    border-top: 5px double pink;
    border-bottom:5px double lightblue;
    border-left: 5px double lightblue;
    border-right: 5px double pink;
    width: 90%;
    display: flex;
    flex-direction:column;
    padding: 3%;
    text-align: center;
    margin-bottom:5%;

  }
  .image-and-text{
    display:flex;
    align-items:center;
  }
  .project-main-content {
    display: flex;
    font-size: 0.9rem;
  }
  .project img {
   width:90%;
  }
  .project-links {
    width: 90%;
    display: flex;
    justify-content: space-around;
    text-align:center;
  }
  .project-links a {
    margin: 2%;
    color:plum;
    text-decoration: none;
  }
  .project-links a:active {
    color: black;
    color:lightblue;
  }
`;