import styled from "styled-components";

export const StyledProjects = styled.div`
  font-family: "Gloria Hallelujah", cursive;
  display:flex;
  flex-direction:column;
  margin-bottom:15%;
  align-items:center;
  text-align:center;
  width:98%;

  p{
    font-size:1.3rem;
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
    justify-content:center;
  }
  .projects-top{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }
  h1{
    font-size:2.5rem;
    text-decoration:underline;
  }
  h2{
    font-size:2rem;
  }
   h2,h3{
    color:lightblue;
  }
  h3{
    font-size:1.5rem;
  }
  .project-text{
    width:50%;
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
    justify-content:space-between;
  }
  .project-main-content {
    display: flex;
    font-size: 0.9rem;
  }
  .project img {
   width:98%;
   height:50vh;
  }
  .project-links {
    width: 98%;
    display: flex;
    justify-content: space-around;
    text-align:center;
  }
  .project-links a {
    margin: 2%;
    color:plum;
    text-decoration: none;
    margin-bottom:5%;
    font-size:2rem;
  }
  .project-links a:active {
    color: black;
    color:lightblue;
  }
`;