
import styled from "styled-components";

export const ExperienceStyle = styled.div`
  font-family: "Gloria Hallelujah", cursive;
  margin:2%;
  margin-bottom:15%;
  
  .experience {
    display: flex;
    flex-direction: column;
  }
h1{
  text-align:center;
  margin-bottom:10%;
  text-decoration:underline;
}
span{
  color:lightblue;
}
  .experience-item {
    width: 25%;
    padding: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-top:5px double pink;
    border-bottom:5px double lightblue;
    border-left: 5px double lightblue;
    border-right: 5px double pink;
  }
  .education {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    padding: 1%;
    margin-bottom:5%;
  }
  .education-section {
    display: flex;
    justify-content: space-between;
    height: auto;
    padding: 1%;
    width: 95%;
    margin-bottom:10%;
  }
  .experience-item h3 {
    font-size: 0.9rem;
    color:lightblue;
  }
  .experience-item p {
    font-size: 0.8rem;
    color:lightblue;
  }
  .experience-item h4 {
    font-size: 0.8rem;
  }
  .experience-item li {
    font-size: 0.8rem;
  }
  .skills {
    display: flex;
    flex-direction: column;
    width: 95%;
    align-items: center;
    padding: 1%;
    margin-bottom: 5%;
  }
  .skills-section {
    display: flex;
    justify-content: space-between;
    padding: 1%;
    width: 95%;
    height:auto;
  }
`;