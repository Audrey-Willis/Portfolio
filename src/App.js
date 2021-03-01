import React from "react";
import {BrowserRouter as Router,Route, BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import TitlePage from "./components/Title-Page/TitlePage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
  <BrowserRouter>
  <Header/>
    <Route exact path = "/"component = {TitlePage}/>
    <Route path = "/About" component = {About}/>
    <Route path = "/Experience" component = {Experience}/>
    <Route Path = "/Projects" component = {Projects}/>
    <Route path = "/Resume" component = {Resume}/>
    <Route path = "/Contact" component = {Footer}/>
  </BrowserRouter>
  );
}

export default App;
