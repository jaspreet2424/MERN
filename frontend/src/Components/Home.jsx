import React from "react";
import Navbar from "./Navbar";

function Home({title}) {

  return (
    <>
      <Navbar title = {title}></Navbar>
      <h1 className="my-5 text-danger">This is the Home Page title {title}</h1>
    </>
  );
}

export default Home;
