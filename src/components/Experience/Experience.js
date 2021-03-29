import React from "react";
import {ExperienceStyle} from "./ExperienceStyle";

function Experience(){
    return (
      <ExperienceStyle id = "experience">
        <div className = "experience">
          <h1> My <span>Experience</span>-Education and Skills<span>.....</span></h1>
          <div className="education">
            <h2><em><span>EDUCATION</span></em></h2>
            <div className="education-section">
              <div className="experience-item">
                <h3>Lambda School</h3>
                <h4><em> Nine month program</em></h4>
                <p>
                  The full stack development program is eight hours a day of
                  learning. A lecture in the mornings followed by a project in
                  the evenings. Every week there was a sprint challenge that had
                  three hour deadlines to teach us how to work under pressure.
                  Every month there were build weeks where we were placed with a
                  team, given a concept, and expected to work together and
                  communicate to see it to completion.
                </p>
              </div>
               <div className="front-end-masters-education experience-item">
                <h3>Frontend Masters</h3>
                <h4><em> Various mini coding classes</em></h4>
                <p>
                  As a self learner, I spent a lot of time scouring the internet
                  for resources. One website that I found helpful was Frontend
                  Masters. I took the following classes:
                </p>
                <ul>
                  <li>Complete intro to web dev v2 (11 hours) by Brian Holt</li>
                  <li>Complete intro to React v5(5 hours) by Brian Holt</li>
                  <li>Intermediate React v2 (3 hours) by Brian Holt</li>
                  <li>Javascript, from fundamentals to functional JS v2(8 hours)by Bianca Gandolfo</li>
                  <li>CSS grids and flexbox for responsive design(5 hours) by Jen Kramer</li>
                </ul>
              </div>
              <div className="experience-item">
                <h3>FreeCodeCamp</h3>
                <h4><em>Mini coding classes</em></h4>
                <p>Responsive web design certification(300 hours)</p>
                <p>it included:</p>
                <ul>
                  <li>Basic HTML and HTML5</li>
                  <li>Basic CSS</li>
                  <li>Applied Visual Design</li>
                  <li>Applied Accessibility</li>
                  <li>Responsive Web Design Principles</li>
                  <li>CSS Flexbox</li>
                  <li>CSS Grid</li>
                </ul>
              </div>
              </div>
              </div>
              <div className="skills">
                <h2><span>SKILLS</span></h2>
                <div className="skills-section">
                  <div className="experience-item">
                    <h3>Front End Skills</h3>
                    <ul>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>JS</li>
                      <li>React</li>
                      <li>Styled Components</li>
                      <li>Redux</li>
                      <li>Using API's</li>
                      <li>Less/Sass</li>
                    </ul>
               </div>
                <div className="experience-item">
                  <h3>Other</h3>
                  <ul>
                    <li>Git</li>
                    <li>Npm/Yarn</li>
                    <li>Developer Tools</li>
                    <li>Web performance/optimization</li>
                    <li>DOM manipulation</li>
                    <li>Responsive design</li>
                    <li>Accessability</li>
                  </ul>
                </div>
               <div className="experience-item">
                <h3>Soft Skills</h3>
                <ul>
                  <li>Team player </li>
                  <li>Trained in conflict resolution</li>
                  <li>Trained in diversity and inclusion</li>
                  <li>Self learner/starter</li>
                  <li>Calm under pressure</li>
                  <li>Good at research and hunting down answers</li>
                  <li>Desire for continuous learning</li>
                  <li>Passion for code</li>
                  <li>trained in communication and active listening</li>
                </ul>
              </div>
            </div>
          </div>
          </div>
      </ExperienceStyle>
    );
}
export default Experience;