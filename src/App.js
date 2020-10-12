import React from "react";
import Header from "../src/components/Header"
import Home from "../src/components/Home"
import About from "../src/components/About"
import Works from "../src/components/Works"
import Milepost from "../src/components/Milepost"


export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Works />
      <Milepost />
    </div>
  );
}