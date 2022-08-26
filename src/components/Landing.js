import React from "react";
import About from "../pages/About";
import Home from "../pages/Home";

export default function Landing() {
  return (
    <>
      <div className="main">
        <Home />
        <About />
      </div>
    </>
  );
}
