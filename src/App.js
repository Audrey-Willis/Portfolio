import React from "react";
import {BrowserRouter as Router,Route, BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Resume from "./components/Resume/Resume";
import TitlePage from "./components/TitlePage/TitlePage.js";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";

function App() {
  return (
  <BrowserRouter>
  <Header/>
    <Route exact path = "/"component = {TitlePage}/>
    <Route path = "/About" component = {About}/>
    <Route path = "/Experience" component = {Experience}/>
    <Route path = "/Resume" component = {Resume}/>
    <Route path = "/Contact" component = {Footer}/>
    <Route path = "/Projects" component = {Projects}/>;
  </BrowserRouter>
  );
}

export default App;
