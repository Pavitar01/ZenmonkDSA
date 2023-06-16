import React, { useState } from "react";
import fb from "../assets/fb.png";
import instagram from "../assets/instagram.png";
import google from "../assets/google.png";
const Login = ({ setdetails, islogin }) => {
  const arr = [fb, google, instagram];
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [err, seterr] = useState("");

  const loginto = () => {
    var allcookies = localStorage.getItem("User");
    if (email === "" || password === "") {
      console.log("Please login with correct credential");
      seterr("Fill right credentials.");
      islogin(false);
    } else if (allcookies) {
      const values = JSON.parse(allcookies);
      if ((values.email === email, values.password === password)) {
        alert("Welcome " + values.name + "!");
        islogin(true);
      }
      console.log(values);
      setdetails(email, password);
    } else {
      seterr("There is no data...");
    }
  };

  return (
    <div className="loginmain">
      <div className="head">
        <h1 className="head1">Login</h1>
      </div>
      <div className="other">
        {arr.map((i, index) => (
          <li key={index}>
            <img src={i} />
          </li>
        ))}
      </div>
      <p className="text">- or use your email -</p>
      <div className="input">
        <label className="label">Email</label>
        <input
          type="text"
          className="feild"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <label className="label">Password</label>
        <input
          type="password"
          className="feild"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <div className="forget">
          <p>
            <a href="#">Forget your password ?</a>
          </p>
        </div>
        <p
          style={{
            margin: "-10px 0 0 50px",
            width: "100%",
            color: "red",
            fontSize: "15px",
          }}
        >
          {err}
        </p>
        <div className="button">
          <button className="btn" onClick={loginto}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
