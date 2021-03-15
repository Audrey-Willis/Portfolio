import React from "react";
import {StyledProjects} from "./ProjectsStyle"

function Projects(){
    return (
      <StyledProjects>
          <section className="projects">
            <h1>Projects</h1>
              <div className = "projects-top">
              <div className="project">
                <div className = "essentialism-project">
                  <h2>Essentialisim</h2>
                  <div className = "project-img">
                  <img
                    src="https://i.ibb.co/r0BtncQ/ezgif-com-gif-maker.gif"
                    alt="site video"
                  />
                  </div>
                  <div className = "project-links">
                  <a href="https://essentialism-1-lambda.github.io/Marketing/">
                    Live Site
                  </a>
                  <a href="https://github.com/Essentialism-1-Lambda/Marketing">
                    Github Repo
                  </a>
                  </div>
                  <div className = "project-text">
                  <div className="about">
                    <h3>About:</h3>
                    <p>
                      The site for essentialism was originally a build week
                      project at lambda school. My responsibility was the
                      marketing page, and an about us page. After finishing with
                      the school I went back and redid the whole thing. The
                      initial design was minimalist but when I went back to redo
                      it I focused on stretching my css wings. I used
                      interesting shapes, bold colors, and some animations. The
                      sign up and login pages although built, are non
                      functional.
                    </p>
                  </div>
                  <div className="role">
                    <h3>Role:</h3>
                    <p>
                      I built the whole page. There was meant to be more once
                      logged in, but my team had a hard time finishing so all
                      that can be seen from the page is what I built
                    </p>
                  </div>
                  <div className="used">
                    <h3>Used:</h3>
                    <p>the site it static, HTML, CSS, JS only </p>
                  </div>
                  </div>
                </div>
                <div>
                  </div>
                </div>

              <div className = "project">
                <div className="react-plants-project">
                  <h2>React Plants</h2>
                  <div className = "project-image">
                  <img
                    src="https://i.ibb.co/X3SYqgK/ezgif-com-gif-maker-3.gif"
                    alt="site video"
                  />
                  </div>
                  <div className = "project-links">
                  <a href="https://github.com/Audrey-Willis web-sprint-challenge-advanced-react">
                    Github Repo
                  </a>
                  </div>
                  <div className="about">
                    <h3>About:</h3>
                    <p>
                      This was a test from lambda school,I was given a time
                      limit and a list of things to finish before the time was
                      up. I include it because it's a decent example of me
                      working with and changing code that has already been
                      written.
                    </p>
                  </div>
                  <div className="role">
                    <h3>Role:</h3>
                    <p>
                      I was tasked with turning the component responsible for
                      the plant list into a class component, setting up the
                      state, getting the plant data using an api request, and
                      creating a custom hook to handle the form on checkout{" "}
                    </p>
                  </div>
                  <div className="used">
                    <h3>Used:</h3>
                    <p>
                      I used Axios for the api request, the page itself was
                      built using React.
                    </p>
                  </div>
                </div>
              </div>

              <div className = "project">
                <div className="rick-and-morty-project">
                  <h2>Rick and Morty</h2>
                  <div className = "project-img">
                  <img
                    src="https://i.ibb.co/JQ86w01/ezgif-com-gif-maker-2.gif"
                    alt="site video"
                  />
                  </div>
                  <div className = "project-links">
                  <a href="https://audrey-willis.github.io/rick-and-morty/">
                    Live Site
                  </a>
                  <a href="https://github.com/Audrey-Willis/rick-and-morty">
                    Github Repo
                  </a>
                  </div>
                  <div className="about">
                    <h3>About:</h3>
                    <p>
                      I built this rick and morty fan site to play with api
                      requests. It includes a multi-page character list with a
                      search bar and a toggle function for more information on
                      the individual characters. I also built a random quote
                      generator using a custom array
                    </p>
                  </div>
                  <div className="role">
                    <h3>Role:</h3>
                    <p>I built the whole page</p>
                  </div>
                  <div className="used">
                    <h3>Used:</h3>
                    <p>
                      Styled Components was used for the styling, Axios for the
                      api, React to build the site, react-router-dom for the
                      routes and the Links for the nav
                    </p>
                  </div>
                </div>
              </div>
              </div>
              <div className = "projects-bottom">

              <div className ="project" >
                <div className="nasa-potd-project">
                  <h2>Nasa Photo of the Day</h2>
                  <div className = "project-img">
                  <img
                    src="https://i.ibb.co/nwtmSWD/ezgif-com-gif-maker-1.gif"
                    alt="site video"
                  />
                  </div>
                  <div className = "project-links">
                  <a href="https://audrey-willis.github.io/nasa-potd/">
                    Live Site
                  </a>
                  <a href="https://github.com/Audrey-Willis/nasa-potd">
                    Github Repo
                  </a>
                  </div>
                  <div className="about">
                    <h3>About:</h3>
                    <p>
                      This site uses the Nasa api to show the nasa photo of the
                      day, along with a calender to change the date and see its
                      photo as well.
                    </p>
                  </div>
                  <div className="role">
                    <h3>Role:</h3>
                    <p>I built the whole site</p>
                  </div>
                  <div className="used">
                    <h3>Used:</h3>
                    <p>
                      Styled Components for styling, Axios for api management,
                      React-Router-DOM for routes and nav links, and the site
                      itself is React.
                    </p>
                  </div>
                </div>
              </div>
              <div className = "project">
                <div className="Redux car-customization-project">
                  <h2>Car Customization Cart</h2>
                  <div className = "project-img">
                  <img
                    src="https://i.ibb.co/ggDXpw7/ezgif-com-gif-maker.gif"
                    alt="site-video"
                  />
                  </div>
                  <div className = "project-links">
                  <a href="#">Live Site</a>
                  <a href="https://github.com/Audrey-Willis/Car-Sales">
                    Github Repo
                  </a>
                  </div>
                  <div className="about">
                    <h3>About:</h3>
                    <p>
                      This site lets you add extras on to a car purchase, the
                      price rises and falls as you add and remove extras. I was
                      given this as an assignment at Lambda school
                    </p>
                  </div>
                  <div className="role">
                    <h3>Role:</h3>
                    <p>I switched the state of the site to Redux</p>
                  </div>
                  <div className="used">
                    <h3>Used:</h3>
                    <p>Redux for state management, and site is React.</p>
                  </div>
                </div>
              </div>
              <div className = "project">
                <div className="redux-to-do-project">
                  <h2>Redux To-Do List</h2>
                  <div className = "project-img">
                  <img
                    src="https://i.ibb.co/SNK8gzc/ezgif-com-gif-maker-2.gif"
                    alt="site-video"
                  />
                  </div>
                  <div className = "project-links">
                  <a href="https://audrey-willis.github.io/simple-to-do/">
                    {" "}
                    Live Site
                  </a>
                  <a href="https://github.com/Audrey-Willis/simple-to-do">
                    {" "}
                    Github Repo{" "}
                  </a>
                  </div>
                  <div className="about">
                    <h3>About:</h3>
                    <p>
                      A simple to do list. It allows the user to add an item to
                      the list, click on the item when they've completed it to
                      cross it out, and press a button to get rid of all crossed
                      out items to clear up the page.
                    </p>
                  </div>
                  <div className="role">
                    <h3>Role:</h3>
                    <p>I built the whole site.</p>
                  </div>
                  <div className="used">
                    <h3>Used:</h3>
                    <p>The site is React, with Redux as the state manager</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </StyledProjects>
    );
}
export default Projects;