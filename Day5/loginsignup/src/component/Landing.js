import React from "react";
import { Link } from "react-router-dom";
import "../css/landing.css";

const Landing = () => {
  return (
    <div className="landing-page">
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div
        className="bg"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection:"column",
          color:"white"
        }}
      >
        <h1>Welcome to My Landing Page</h1>
        <p>This is a Simple Landing Page</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default Landing;
