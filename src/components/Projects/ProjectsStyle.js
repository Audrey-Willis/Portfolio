import styled from "styled-components";

export const StyledProjects = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15%;
    align-items: center;
    text-align: center;
    width: 98%;
  h1 {
    font-size: 2.5rem;
    text-decoration: underline;
    margin-bottom: 15%;
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
  .projects-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    margin-bottom: 10%;
    align-items: center;
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
  .title-and-links {
    width: 98%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3%;
  }
  .project-links {
    width: 98%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-bottom:10%;
  }
  .no-live-site{
    flex-direction:column;
    align-items:center;
  }
  .project-links a {
    margin: 2%;
    color: plum;
    text-decoration: none;
    font-size: 1.5rem;
  }
  .project-links a:active {
    color: black;
    color: lightblue;
  }
  .image-and-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
  }
  .project-img {
    width: 80%;
  }
  video {
    width: 100%;
    height: auto;
    border: 2px solid black;
  }
  .project-text {
    width: 80%;
    margin: 5%;
  }
  p {
    font-size: 1.3rem;
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
  
  @media (max-width: 500px) {
  .project {
    width: 90%;
    border: none;
    border-bottom:5px double lightblue;
    margin-bottom: 20%;
  }
 .projects h1 {
    font-size: 2rem;
    margin-bottom: 20%;
  }
  .project-img {
    width: 98%;
  }
  video {
    display:none;
    height:.5vh;
  }
  .project-links a {
    font-size: 1.2rem;
  }
  .project-links h2 {
    font-size: 1.4rem;
  }
  .projects h3 {
    font-size: 1.2rem;
  }
  .project p {
    font-size: 1rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  .project-text{
    width:98%;
  }
  }
`;