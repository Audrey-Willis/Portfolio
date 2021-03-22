import styled from "styled-components";

export const TitlePageStyle = styled.div`
  font-family: "Gloria Hallelujah", cursive;
  width:98%;
  display:flex;
  flex-direction:column;
  align-items:center;
  color:black;
  text-shadow:.8px .8px white;
  .title-page {
    display: flex;
    justify-content: space-between;
    width:60%;
  }
  .title-text h1 {
    font-size:3.5rem;
    margin: none;
  }
  .title-text h2 {
    font-size: 2.3rem;
  }
  .title-text blockquote {
    font-size: 1.6rem;
  }
  .graphic img {
    width: 10%;
  }
  .title-text {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .jello-horizontal-hover:active {
    animation: jello-horizontal-hover 0.6s both;
  }
  .jello-horizontal {
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

