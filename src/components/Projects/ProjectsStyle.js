import styled from "styled-components";

export const StyledProjects = styled.div`
  font-family: "Gloria Hallelujah", cursive;
  .projects-top {
    display: flex;
    width: 98%;
    display: flex;
    justify-content: space-around;
    margin: 2%;
  }
  .project-left {
    display: flex;
    flex-direction: column;
  }
  .projects {
    background-color: #e0bbe4;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
  }
  .project {
    border: 5px double black;
    width: 25%;
    background-image: url("https://i.ibb.co/fHypgdZ/shutterstock-1734562214.jpg");
    display: flex;
    flex-direction:column;
    align-items:center;
    padding:2%;
    text-align:center;
  }
  .project-main-content {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
  }
  .project img {
    width: 95%;
    border: 2px solid black;
    padding: 3%;
    background-color:pink;
    height:25vh;
  }
  .project-links{
    width:90%;
    display:flex;
    justify-content:space-around;
  }
  .project-links a{
    margin:2%;
    color:black;
    text-decoration:none;
  }
  .project-links a:active{
    color:black;
  }
  .projects-bottom {
    display: flex;
    width: 98%;
    display: flex;
    justify-content: space-around;
    margin: 5%;
  }
`;