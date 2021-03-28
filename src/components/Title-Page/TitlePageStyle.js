import styled from "styled-components";

export const TitlePageStyle = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;

  .title-page {
    display: flex;
    justify-content: space-between;
    width: 60%;
  }
  .title-text {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .title-text h1 {
    font-size: 3.2rem;
  }
  .title-text h2 {
    font-size: 2rem;
  }
  .title-text blockquote {
    font-size: 1.3rem;
    text-shadow: 1px 1px white;
  }

  @media (max-width: 800px) {
    .title-page {
      width: 80%;
    }
    .title-text h1 {
      font-size: 2rem;
    }
    .title-text h2 {
      font-size: 1.5rem;
    }
    .title-text blockquote {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 500px) {
    color: plum;
    .title-text h1 {
      font-size: 1.5rem;
    }
    .title-text h2 {
      font-size: 1.2rem;
      color:lightblue;
    }
    .title-text blockquote {
      font-size: .9rem;
      text-shadow: none;
    }
  }
`;

