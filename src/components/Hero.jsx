import React from "react";
import logo from "../assets/images/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Full Stack Prep</h1>
  </div>
);

export default Hero;
