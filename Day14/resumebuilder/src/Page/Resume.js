import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Resume = () => {
  const [Name, setName] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Address, setAddress] = useState("");
  const [Objective, setObjective] = useState("");
  const [Project, setProject] = useState("");
  const [Exp, setExp] = useState("");
  const [err, setErr] = useState("");

  const reset = () => {
    setAddress("");
    setDesignation("");
    setExp("");
    setName("");
    setObjective("");
    setProject("");
  };
  const submit = () => {
    if (
      Address === "" ||
      Designation === "" ||
      Exp === "" ||
      Name === "" ||
      Objective === "" ||
      Project === ""
    ) {
      setErr("Please Fill All Feild");
    }
  };

  const navigate = useNavigate();
  return (
    <div className="resume">
      <div className="input">
        <h1>Details</h1>

        <input
          type="text"
          value={Name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
        />

        <input
          type="text"
          value={Designation}
          onChange={(e) => {
            setDesignation(e.target.value);
          }}
          placeholder="Designation"
        />
        <textarea
          value={Address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          placeholder="Address"
        ></textarea>
        <textarea
          value={Objective}
          onChange={(e) => {
            setObjective(e.target.value);
          }}
          placeholder="Objective"
        ></textarea>
        <textarea
          value={Exp}
          onChange={(e) => {
            setExp(e.target.value);
          }}
          placeholder="Experience"
        ></textarea>

        <textarea
          value={Project}
          onChange={(e) => {
            setProject(e.target.value);
          }}
          placeholder="Project"
        ></textarea>
        <button onClick={() => navigate("/Otp")}>Back</button>
      </div>
      <div>
        {" "}
        <button>Preview</button>
        <button onClick={submit}>Submit</button>
        <button onClick={reset}>Reset</button>
      </div>
      <p>{err}</p>
    </div>
  );
};

export default Resume;
