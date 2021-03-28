import styled from "styled-components";

export const HeaderStyled = styled.div`
    width: 90%;
    height: 85vh;
    background-image: url("https://i.ibb.co/jGrY6zD/yang-shuo-u-YHYGgvkz-Y-unsplash.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-bottom:15%;
  @media(max-width:500px){
    background-image:none;
    margin-bottom:10%;
    padding:3%;
    width:98%;
    display:flex;
    flex-direction:column-reverse;
    height:90vh;
  }
`;