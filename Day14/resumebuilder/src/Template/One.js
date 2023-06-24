import React from "react";
import "./resume.css"


const One = ({ details }) => {
  const {
    name,
    address,
    designation,
    experience,
    objective,
    project,
    skill,
    social,
    image,
    PhoneNumber,
  } = details;

  return (
    <div className="ResumeParent">
      <div className="top">
        <h1>{name}</h1>
        <h5>{address}</h5>
        <h5>{PhoneNumber}</h5>
        <h5>{social}</h5>
      </div>
      <br/>
      <br/>
      <br/>

      <div className="middle">
        <h1>Designation</h1>
        <hr style={{ width: "85%", margin: "10px" }} />
        <p>{designation}</p>
        <br/>
        <br/>

        <h1>Objective</h1>
        <hr style={{ width: "85%", margin: "10px" }} />
        <p>{objective}</p>
        <br/>
        <br/>

        <h1>work Experience</h1>
        <hr style={{ width: "85%", margin: "10px" }} />
        <p>
          <b>{experience}</b>
        <br/>
        <br/>

        </p>
        <h1>Projects</h1>
        <hr style={{ width: "85%", margin: "10px" }} />
        <p>
          <b>{project}</b>
        </p>
        <br/>
        <br/>

        <h1>Skills</h1>
        <hr style={{ width: "85%", margin: "10px" }} />
        <p>
          <b>{skill}</b>
        </p>
        <br/>
        <br/>
        <br/>

      </div>
    </div>
  );
};

export default One;
