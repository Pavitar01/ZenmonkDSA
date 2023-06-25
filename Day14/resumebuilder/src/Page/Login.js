import React, { useState } from "react";
import loginimg from "../Assets/images/loginimg.jpg";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../Css/All.css";
import { addUser } from "../Redux/Store/Slice/UserSlice";

const Login = () => {
  const [ph, setPh] = useState("");
  const [err, setErr] = useState("");
  const [val, setVal] = useState("/");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = () => {
    if (!/^\d{10}$/.test(ph)) {
      setErr("Invalid phone number");
    } else {
      dispatch(addUser(ph));
      setVal("/otp");
    }
  };

  return (
    <div className="login">
      <div className="left"></div>
      <div className="right">
        <div className="credential">
          <h1>Login</h1>
          <img src="https://img.freepik.com/free-photo/blue-user-icon-symbol-website-admin-social-login-element-concept-white-background-3d-rendering_56104-1217.jpg?w=1480&t=st=1687417199~exp=1687417799~hmac=0c9fd6c91f982f1c250ae81bf7bc61b519387a09f4e6e64a887502ba014ad086" />
          <input
            type="number"
            placeholder="Phone number"
            value={ph}
            onChange={(e) => {
              setPh(e.target.value);
              setErr("");
            }}
          />
          <p style={{ width: "100%", textAlign: "center", color: "red" }}>
            {err}
          </p>
          <Link to={val} onClick={handleChange}>  <button>
          
              Send Otp
          </button>
          </Link>

        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Login;
