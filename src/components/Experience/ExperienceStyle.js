
import styled from "styled-components";

export const ExperienceStyle = styled.div`
  font-family: "Gloria Hallelujah", cursive;
  margin: 2%;
  margin-bottom: 15%;

  .experience {
    display: flex;
    flex-direction: column;
  }
  h1 {
    text-align: center;
    margin-bottom: 10%;
    text-decoration: underline;
    font-size: 3rem;
  }
  span {
    color: lightblue;
  }
  .experience-item {
    width: 25%;
    padding: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-top: 5px double pink;
    border-bottom: 5px double lightblue;
    border-left: 5px double lightblue;
    border-right: 5px double pink;
  }
  .education {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 98%;
    padding: 1%;
    margin-bottom: 5%;
  }
  .education-section {
    display: flex;
    justify-content: space-between;
    height: auto;
    padding: 1%;
    width: 98%;
    margin-bottom: 10%;
  }
  .experience-item h3 {
    font-size: 1.5rem;
    color: lightblue;
  }
  .experience-item p {
    font-size: 1.2rem;
    color: lightblue;
  }
  .experience-item h4 {
    font-size: 1.3rem;
  }
  .experience-item li {
    font-size: 1.2rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  .skills {
    display: flex;
    flex-direction: column;
    width: 98%;
    align-items: center;
    padding: 1%;
    margin-bottom: 5%;
  }
  .skills-section {
    display: flex;
    justify-content: space-between;
    padding: 1%;
    width: 98%;
    height: auto;
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 2.2rem;
    }
    h2 {
      font-size: 2rem;
    }
    .experience-item p {
      font-size: 1.3rem;
    }
    .experience-item li {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 500px) {
    width: 98%;

    .education-section {
      flex-direction:column;
    }
    .skills-section{
      flex-direction:column;
    }
    .experience-item {
      width:85%;
      margin-bottom:5%;
      border:none;
    }
    h1 {
      font-size:1.3rem;
    }
    h2 {
      display:none;
    }
   .experience-item h3{
     font-size:1.3rem;
     text-decoration:underline;
   }
   .experience-item h4{
     font-size:1.2rem;
   }
    .experience-item p {
      font-size: 0.9rem;
    }
    .experience-item li {
      font-size: 0.9rem;
    }
  }
`;