import styled from "styled-components";

export const AboutStyle = styled.div`
  background-color: #e0bbe4;
  font-family: "Gloria Hallelujah", cursive;
  padding: 2%;
  .about {
    background-image: url("https://i.ibb.co/r6V3jLc/shutterstock-724785052.png");
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 5px double black;
  }
  .about-p {
    width: 70%;
    background-color: #e0bbe4;
    border: 5px double black;
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    margin:3%;
    margin-bottom:1%;
  }
  .about-p p {
    background-color: white;
    width: 90%;
    padding: 2%;
    border:2px double black;
  }
  .about-p h1 {
    text-align: center;
  }
  .about-header {
    display: flex;
    justify-content: space-around;
    width: 90%;
  }
  .about-header p {
    background-color: pink;
  }
  .arrow {
    font-size: 3rem;
    text-decoration: none;
    color: black;
  }
  .arrow:hover {
    font-size: 3.2rem;
  }
  .arrow:active {
    color: black;
  }
  .rotate-in-center {
    -webkit-animation: rotate-in-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: rotate-in-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  @keyframes rotate-in-center {
    0% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
      opacity: 1;
    }
  }
`;
