import React from "react";
import banerImg from "../assets/pexels-akh-taufiq-202388902-15311442.jpg";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div
      className="hero  min-h-screen"
      style={{
        backgroundImage: `url(${banerImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="lg:w-10/12 mx-auto">
          <h1 className="mb-5 text-3xl lg:text-5xl  font-bold">
            Your old clothes can be someone's <br /> lifeline this winter.
          </h1>
          <p className="mb-5 lg:w-9/12 mx-auto">
            Our mission is to bring warmth and comfort to those in need during
            the harsh winter months. Through this platform, we connect generous
            individuals with families and communities lacking essential winter
            clothing. Together, we aim to ensure that no one faces the cold
            unprepared.
          </p>
          <Link to={'/donation'} className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
