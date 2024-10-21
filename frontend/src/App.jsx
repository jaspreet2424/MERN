import React from "react";
import About from "./Components/About";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  const add = (a , b) => {
    console.log("The sum of 10 and 20 is", a + b);
  };

  return (
    <>
      <Home Add = {add}></Home>
    </>
  );
}

export default App;
