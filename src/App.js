import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import styled from "styled-components";
import Contact from "./components/Contact/Contact";

export const AppStyle = styled.div`
  background-color: #333;
  color: plum;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #070607;
  background-image: url("data:image/svg+xml,%3Csvg width='70' height='70' viewBox='0 0 70 70' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23161516' fill-opacity='0.69' fill-rule='evenodd'%3E%3Cpath d='M0 0h35v35H0V0zm5 5h25v25H5V5zm5 5h15v15H10V10zm5 5h5v5h-5v-5zM40 5h25v25H40V5zm5 5h15v15H45V10zm5 5h5v5h-5v-5zM70 35H35v35h35V35zm-5 5H40v25h25V40zm-5 5H45v15h15V45zm-5 5h-5v5h5v-5zM30 40H5v25h25V40zm-5 5H10v15h15V45zm-5 5h-5v5h5v-5z'/%3E%3C/g%3E%3C/svg%3E");
`;

function App() {
  return (
  <AppStyle>
  <Header/>
  <About/>
  <Experience/>
  <Projects/>
  <Contact/>
  <Footer/>
  </AppStyle>
  );
}

export default App;
