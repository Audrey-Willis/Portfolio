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
  .title-text h1{
    font-size:3.2rem;
  }
  .title-text h2 {
    font-size: 2rem;
  }
  .title-text blockquote {
    font-size: 1.2rem;
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
  @media (max-width:800px){
    .title-page{
      width:80%;
    }
  .title-text  h1{
      font-size:2rem;
    }
    .title-text h2{
      font-size:1.5rem;
    }
    .title-text blockquote{
      font-size:1.3rem;
    }
  }
  @media(max-width:500px){
    color:plum;
    text-shadow:none;
    .title-text h1{
      font-size:1.5rem;
    }
    .title-text h2{
      font-size:1rem;
    }
    .title-text blockquote{
      font-size:.9rem;
    }
    .title-text h2{
      color:lightblue;
    }
  }

`;

