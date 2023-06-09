import React, { useState } from "react";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import google from "../images/Vector.png";
import apple from "../images/Vector1.png";
import fb from "../images/Vector2.png";
const Login = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signup = () => {
    if (email == "" || password == "") {
      // setError("All feilds are needed..")
      setError("Please enter valid email and password");
    } else {
      alert("Good To Go.....");
      navigate("/landing");
    }
  };

  const signin = [
    {
      id: 1,
      name: "Google   ",
      icon: { google },
    },
    {
      id: 1,
      name: "Apple ID   ",
      icon: { apple },
    },
    {
      id: 1,
      name: "Facebook",
      icon: { fb },
    },
  ];

  return (
    <div className="card">
      <div className="inner-card">
        <div className="top">
          <h1 className="title">SignIn</h1>
          <p className="des">
            Hey, Enter your details to login to your account
          </p>
        </div>
        <div className="middle">
          <div className="input-div">
            <input
              type="text"
              placeholder="Enter Email / Phone Number"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="register">
              Reset or <span>Forget Password</span>
            </p>
          </div>
        </div>
        <div className="bottom">
          <button className="signinbtn" onClick={signup}>
            Sign In
          </button>
          <p>{error}</p>
          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              color: "black",
              fontWeight: "500",
            }}
          >
            - Or Sign in with -
          </p>
          <div className="Allbtn">
            {signin.map((item, key) => (
              <button className="ids" key={key}>
                {/* <img src={item.icon}/> Update this line */}
                {item.name}
              </button>
            ))}
          </div>

          <p style={{ textAlign: "center" }} className="register">
            Don't have an account?<span>Register Now</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
