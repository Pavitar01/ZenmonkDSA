import React, { Children, useEffect, useState } from "react";
import userimg from "../assets/user.png";
const Signup = () => {
  const admin = "admin",
    vendor = "vendor",
    customer = "customer";

  const [images, setimage] = useState(userimg);
  const [imagename, setimagename] = useState("Upload image");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [cpass, setcpass] = useState("");
  const [err, seterr] = useState("");
  const [role, setrole] = useState("");
  const [alluser, setalluser] = useState([]);
  const setprofile = (e) => {
    if (e.target.files[0]) {
      setimage(URL.createObjectURL(e.target.files[0]));
      setimagename(e.target.files[0].name);
    }
  };

  // useEffect(() => {
  //   const x = JSON.parse(localStorage.getItem("User"));
  //   setalluser([...x])
  // },[]);

  const signupto = () => {
    if (
      lname === "" ||
      fname === "" ||
      email === "" ||
      cpass === "" ||
      pass === ""
    ) {
      seterr("please provide valid details");
    } else if (cpass !== pass) {
      seterr("Both Password should same");
    } else {
      const Details ={
        profile: images,
        name: fname + " " + lname,
        email: email,
        password: pass,
        role: role,
      };
      const x = JSON.parse(localStorage.getItem("User"));

      setalluser([...x, Details]);
      console.log(alluser);
      localStorage.setItem("User", JSON.stringify(alluser));
      setlname("");
      setfname("");
      setemail("");
      setpass("");
      setcpass("");
      setimage(userimg);
      seterr("");
      setrole("");
      setimagename("Upload image");
    }
  };
  return (
    <div className="signup">
      <div className="head">
        <h1 className="head1">Signup</h1>
      </div>

      <div className="image">
        <input
          type="file"
          id="file"
          className="profile"
          accept="image/*"
          onChange={setprofile}
        />
        <label for="file">
          <img src={images} className="userimg" />
          <p className="usertext">{imagename}</p>
        </label>
      </div>
      <div
        className="input"
        style={{ padding: "20px", boxSizing: "border-box", marginTop: "-20px" }}
      >
        <div className="top">
          <input
            type="text"
            placeholder="First Name"
            value={fname}
            onChange={(e) => {
              setfname(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lname}
            onChange={(e) => {
              setlname(e.target.value);
            }}
          />
        </div>
        <div className="middle">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </div>
        <div className="top">
          <input
            type="text"
            placeholder="Password"
            value={pass}
            onChange={(e) => {
              setpass(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Retype Password"
            value={cpass}
            onChange={(e) => {
              setcpass(e.target.value);
            }}
          />
        </div>
        <div className="bottom">
          <input
            type="radio"
            name="role"
            value={admin}
            onChange={(e) => {
              setrole(e.target.value);
            }}
          />
          <label>Admin</label>
          <input
            type="radio"
            name="role"
            value={vendor}
            onChange={(e) => {
              setrole(e.target.value);
            }}
          />
          <label>User</label>
          <input
            type="radio"
            name="role"
            value={customer}
            onChange={(e) => {
              setrole(e.target.value);
            }}
          />
          <label>Customer</label>
        </div>
        <p
          style={{
            color: "red",
            height: "10px",
            marginLeft: "25px",
            fontSize: "12px",
          }}
        >
          {err}
        </p>
        <div className="button" style={{ marginTop: "30px" }}>
          <button
            className="btn"
            onClick={signupto}
            style={{ marginTop: "-10px" }}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
