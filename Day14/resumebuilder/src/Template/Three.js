import React from "react";
import "./resume.css";
const Three = ({ details }) => {
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
    phoneNumber,
  } = details;

  return (
    <div className="ResumeParent">
      <div className="main">
        <div className="left" style={{ backgroundColor: "gray" }}>
          {image ? (
            <img src={image} alt="No image" />
          ) : (
            <img
              src="https://th.bing.com/th/id/OIP.0zThj8ORiPldD5fpN1f85gHaHa?pid=ImgDet&rs=1"
              alt="No image"
            />
          )}
          <h1>{name}</h1>
          <h4>— {designation}</h4>
          <h1>Address</h1>
          <h5>{address}</h5>
          <h1>Phone Number</h1>
          <h5>{phoneNumber}</h5>
          <h1>Social Link</h1>
          <h5>{social}</h5>

          <h1>Skill Summary</h1>

          <h5>{skill}</h5>
        </div>
        <div className="right" style={{ backgroundColor: "lightgray" }}>
          <h1>Objective</h1>
          <hr style={{ width: "30%", margin: "10px" }} />

          <br />
          <h1>Work Experience</h1>

          <br />
          <h4>{experience}</h4>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Three;
