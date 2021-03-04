import styled from "styled-components";

export const TitlePageStyle = styled.div`
  padding: 3%;
  background-color: #e0bbe4;
  font-family: "Gloria Hallelujah", cursive;

  .title-page {
    display: flex;
    background-image: url("https://i.ibb.co/hsSWbSt/shutterstock-1405359335.png");
    padding: 2%;
    border: 10px double #333;
  }
  .title-text {
    text-align: center;
  }
  .title-text h1 {
    font-size: 3rem;
  }
  .title-text h2 {
    font-size: 2rem;
  }
  .title-text blockquote {
    font-size: 1.1rem;
  }
  .comp-icon {
    text-align: center;
  }
  .comp-icon img {
    height: 60vh;
  }
  .arrow{
    font-size:4rem;
    text-decoration:none;
    color:black
  }
  .arrow:hover{
    font-size:4.2rem;
  }
  .arrow:active{
    color:black;
  }
  .jello-horizontal-text{
    animation text-bubble 5s both;
  }
  .jello-horizontal-hover:active {
    animation: jello-horizontal-hover 0.6s both;
  }
  .jello-horizontal {
    -webkit-animation: jello-horizontal 0.6s both;
    animation: jello-horizontal 0.9s both;
  }
  @keyframes jello-horizontal {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes jello-horizontal-hover {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

`;

