import React, { useState } from "react";
import "../css/nav.css";
import image from "../images/image.png";
import Signup from "./Signup";
import Login from "./Login";
import globe from "../images/ph_globe-light.png";

const Nav = () => {
  const [text, setText] = useState("Login");

  return (
    <div className="maindiv">
      <div className="navbar">
        <li className="active" style={{display:"flex",textAlign:"center"}}>
          Request Demo <span className="arrow"> &nbsp;↗ &nbsp;&nbsp;</span>
        </li>
        &nbsp;
        &nbsp;
        <li
          onClick={() => {
            setText(text === "Sign Up" ? "Login" : "Sign Up");
          }}
        >

          <span style={{display:"flex"}}>
            <img src={globe} />&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            {text}
          </span>
        </li>
      </div>
      <div className="left">{text == "Sign Up" ? <Login /> : <Signup />}</div>
      <div className="right">
        <img src={image} className="image" alt="Image" />
      </div>
    </div>
  );
};

export default Nav;
