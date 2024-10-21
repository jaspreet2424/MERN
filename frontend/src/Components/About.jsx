import React from "react";
import Navbar from "./Navbar";

function About({title}) {
  return (
    <>
      <h1 className="my-5 text-warning">This is the about component {title}</h1>
    </>
  );
}

export default About;
