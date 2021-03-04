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
  }
  .about-p p {
    background-color: pink;
    width: 90%;
    padding: 2%;
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
    font-size:3.2rem;
  }
  .arrow:active {
    color: black;
  }
  .wobble-hor-bottom {
    animation: wobble-hor-bottom 1.5s infinite both;
    padding: 1%;
    border: 2px double black;
    border-radius: 50%;
  }
  .rotate-in-center {
    -webkit-animation: rotate-in-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: rotate-in-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  @keyframes wobble-hor-bottom {
    0%,
    100% {
      transform: translateX(0%);
      transform-origin: 50% 50%;
    }
    15% {
      transform: translateX(-30px) rotate(-6deg);
    }
    30% {
      transform: translateX(15px) rotate(6deg);
      background-color: lightblue;
    }
    45% {
      transform: translateX(-15px) rotate(-3.6deg);
    }
    60% {
      transform: translateX(9px) rotate(2.4deg);
    }
    75% {
      transform: translateX(-6px) rotate(-1.2deg);
    }
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
