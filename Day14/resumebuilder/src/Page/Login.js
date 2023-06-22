import React, { useState } from "react";
import loginimg from "../Assets/images/loginimg.jpg";
import { Outlet, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../Css/All.css";
import { addUser } from "../Redux/Store/Slice/UserSlice";
const Login = () => {
  const [ph, setPh] = useState(0);
  const [err, setErr] = useState("");
  const [val,setVal]=useState("/")
  const dispatch=useDispatch()
  const handleChange = () => {
    if (ph === 0) {
      setErr("Please Fill This Feild");
    } 
    else{
      dispatch(addUser(ph))
      setVal("/Otp")
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
              setPh(Number(e.target.value));
              setErr("");
            }}
          />
          <p>{err}</p>
          <button>
            <Link to={val} onClick={handleChange}>
              Send Otp
            </Link>
          </button>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Login;
