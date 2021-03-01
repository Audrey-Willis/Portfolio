import React from "react";
import {BrowserRouter as Router,Route, BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

function App() {
  return (
  <BrowserRouter>
    <Route exact path = "/"component = {Header}/>
    <Route path = "/About" component = {About}/>
    <Route path = "/Experience" component = {Experience}/>
    <Route Path = "/Projects" component = {Projects}/>
    <Route path = "/Resume" component = {Resume}/>
  </BrowserRouter>
  );
}

export default App;
