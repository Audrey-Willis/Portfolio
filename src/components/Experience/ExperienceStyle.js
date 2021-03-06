
import styled from "styled-components";

export const ExperienceStyle = styled.div`
  font-family: "Gloria Hallelujah", cursive;
  padding: 2%;
  .experience {
    border: 5px double black;
    display: flex;
    flex-direction: column;
    align-items:center;
    background-color: #e0bbe4;
  }
  .education {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    padding: 1%;
    margin-bottom:10%;
  }
  .education-section {
    display: flex;
    justify-content: space-between;
    background-image: url("https://i.ibb.co/HXt3rhJ/shutterstock-1715029717.jpg");
    background-repeat: no-repeat;
    background-size:100% 100%;
    height:auto;
    border: 5px double black;
    padding:1%;
    width:95%;
  }
  .education p {
    font-size: 0.8rem;
  }
  .education h3 {
    font-size: 0.9rem;
    text-decoration:underline;
  }
  .education h4 {
    font-size: 0.8rem;
  }
  .education li {
    font-size: 0.8rem;
  }
  .skills {
    display: flex;
    flex-direction: column;
    width: 95%;
    align-items: center;
    padding: 1%;
    margin-bottom:15%;

  }
  .skills-section {
    display: flex;
    justify-content: space-between;
    background-image: url("https://i.ibb.co/HXt3rhJ/shutterstock-1715029717.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border: 5px double black;
    padding:1%;
    width:95%;
  }
  .skills h3 {
    font-size: .9rem;
    text-decoration:underline;
  }
  .skills h4 {
    font-size: 0.8rem;
  }
  .skills li {
    font-size: 0.8rem;
  }

  .front-end-skills {
    width: 30%;
    padding: 1%;
    border:5px double black;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
  }
   .front-end-skills:hover {
   transform: scale(1.1);
   margin: 3%;
   background-color: white;
 }
  .other-skills {
    width: 28%;
    padding: 1%;
    border:5px double black;
    display:flex;
    flex-direction:column;
    align:items:center;
    text-align:center;
  }
   .other-skills:hover {
   transform: scale(1.1);
   margin: 3%;
   background-color: white;
 }
  .soft-skills {
    width: 28%;
    padding: 1%;
    border:5px double black;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
  }
   .soft-skills:hover {
   transform: scale(1.1);
   margin: 3%;
   background-color: white;
 }
  .lambda-education {
    width: 21%;
    padding: 1%;
    border:5px double black;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
  }
  .lambda-education:hover {
    transform: scale(1.1);
    margin: 3%;
    background-color: white;
  }
  .front-end-masters-education {
    width: 21%;
    padding: 1%;
    border:5px double black;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
  }
   .front-end-masters-education:hover {
   transform: scale(1.1);
   margin: 3%;
   background-color: white;
 }
  .free-code-camp-education {
    width: 21%;
    padding: 1%;
    border:5px double black;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
  }
   .free-code-camp-education:hover {
   transform: scale(1.1);
   margin: 3%;
   background-color: white;
 }
  .coding-challenges-education {
    width: 21%;
    padding: 1%;
    border:5px double black;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
  }
   .coding-challenges-education:hover {
   transform: scale(1.1);
   margin: 3%;
   background-color: white;
 }
 .arrow a{
     font-size:3rem;
     color:black;
     text-decoration:none;
 }
 .arrow a:active{
    color:black;
 }
 .arrow a:hover{
     transform:scale(1.1);
 }
 .skills .arrow{
     font-size:3rem;
     color:black;
     text-decoration:none;
 }
 .skills .arrow:active{
     color:black;
 }
 .skills .arrow:hover{
     transform:scale(1.1)
 }
 .bounce-in-top {
	        animation: bounce-in-top 1.1s both;
}
@keyframes bounce-in-top {
  0% {
            transform: translateY(-500px);
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
            transform: translateY(0);
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
            transform: translateY(-65px);
            animation-timing-function: ease-in;
  }
  72% {
            transform: translateY(0);
            animation-timing-function: ease-out;
  }
  8
            transform: translateY(-28px);
            animation-timing-function: ease-in;
  }
  90% {
            transform: translateY(0);
            animation-timing-function: ease-out;
  }
  95% {
            transform: translateY(-8px);
            animation-timing-function: ease-in;
  }
  100% {
            transform: translateY(0);
            animation-timing-function: ease-out;
  }
}

`;