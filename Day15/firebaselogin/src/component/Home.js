import React, { useState } from "react";
import "../css/chat.css";
import logo from "../assets/images/logo.png";
import User from "./User";
import Details from "./Details";
const Home = () => {
  const [toggle, isToggle] = useState(false);

  return (
    <div className="chatMain">
      <div className="Main">
        <div className="left">
          <div className="logo">
            <button className="button">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <img src={logo} className="logoIcon" />

            <button className="button">
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
          <div className="users">
            <User />
          </div>
        </div>
        <div className="right">
          <div className="top" style={{position:"relative"}}>
            <button>
              <i class="fa-regular fa-envelope"></i>
            </button>
            <div className="input">
              <input type="text" className="search" />
              <i
                class="fa-solid fa-magnifying-glass"
                style={{ color: "white", cursor: "pointer" }}
              ></i>
            </div>
            <button onClick={() => (toggle ? isToggle(false) : isToggle(true))}>
              <i class="fa-solid fa-user"></i>
             
            </button>
            {toggle ? <Details/> : <></>}
          </div>
          <div className="messages"></div>
          <div className="messageFeild">
            <div className="inputBox">
              <input type="text" placeholder="Type Something.." />
              <i class="fa-solid fa-face-smile"></i>
            </div>
            <button>
              
              <i class="fa-regular fa-copy"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
