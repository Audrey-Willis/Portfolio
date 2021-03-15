import styled from "styled-components"


export const ResumeStyle = styled.div`
  background-color: #e0bbe4;
  padding: 5%;
  font-family: "Gloria Hallelujah", cursive;
  .resume-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2%;
    border: 5px double black;
    background-image: url("https://i.ibb.co/5Y7P7D7/shutterstock-1158880201.jpg");
  }
  a{
      font-size:1.5rem;
      color:black;
      margin:5%;
      background-color:#e0bbe4;
      border:2px double black;
  }
  a:hover{
      transform:scale(1.1);
  }
  a:active{
      color:black;
  }
  img {
    border: 5px double black;
  }
  .puff-in-center {
    animation: puff-in-center 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  }
  @keyframes puff-in-center {
    0% {
      transform: scale(2);
      filter: blur(4px);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      filter: blur(0px);
      opacity: 1;
    }
  }
`;