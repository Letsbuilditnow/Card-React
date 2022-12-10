import React from "react";
import "./Details.css";
import Email from "./Email";
import Jobtitle from "./Jobtitle";
import Linkedin from "./Linkedin";
import Name from "./Name";
import About from "./About";
import Interests from "./Interests";
import Links from "./Links";
// import ButtonSection from './ButtonSection'
function main() {
  return (
    <>
      <div className="container">
        <Name />
        <section className="buttons-section">
          <Email />
          <Linkedin></Linkedin>
        </section>
        <section className="about-section">
         <About/>
          <Interests/>
        </section>
        <section className="links-section">
         <Links/>
        </section>
      </div>
    </>
  );
}

export default main;
