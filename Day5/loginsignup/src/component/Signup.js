import React, { useState } from 'react'
import "../css/signup.css"
const Signup = () => {
  const [error,setError]=useState(""); 
  const [fname,setFname]=useState(""); 
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [text, setText] = useState("Sign Up");

const signup=()=>{
  if(email=="" || password==""){
    // setError("All feilds are needed..")
    setError("All feilds are required.");

  }
  else{
    alert("Thanks for register To..")
  }
}

    return (
      <div className="card">
        <div className="inner-card">
          <div className="top">
            <h1 className="title">SignUp</h1>
            <p className="des">
              Welcome, Enter your details to create your account
            </p>
          </div>
          <div className="middle">
            
            <div className="input-div">
            <input type="text" placeholder="Enter your Name" value={fname} onChange={(e)=>{
              setFname(e.target.value)
            }}/>
              <input type="email" placeholder="Enter Email / Phone Number" value={email} onChange={(e)=>{ setEmail(e.target.value)}}/>
              <input type="password" placeholder="Create a new Password" value={password} onChange={(e)=>{ setPassword(e.target.value)}}/>
            </div>
          </div>
          <div className="bottom">
          <button className="signinbtn" style={{marginTop:"30px"}} onClick={signup}>Signup Up</button>
          <p>{error}</p>
            </div>
            <p className="register">
          Already a User? <span>Sign In</span>
            </p>
        </div>
      </div>
  );
}

export default Signup
