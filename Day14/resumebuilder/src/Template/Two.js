import React from "react";
import "./resume.css"
const Two = ({ details }) => {
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
      <div className="main">
        <div className="left">
          {image ?   <img src={image} alt="No image"/>:  <img src="https://th.bing.com/th/id/OIP.0zThj8ORiPldD5fpN1f85gHaHa?pid=ImgDet&rs=1" alt="No image"/>}
            <h1>Contact Me At</h1>
            <h5>{address}</h5>
            <h5>{PhoneNumber}</h5>
            <h5>{social}</h5>


            <h1>Skill Summary</h1>

            <h5>{skill}</h5>
        </div>
        <div className="right">
            <h1 style={{fontWeight:"900",fontSize:"35px",margin:"30px"}}>{name}</h1>
            <hr style={{width:"30%",marginLeft:"10px"}}/>
            <h4 style={{fontWeight:"900",fontSize:"25px",margin:"-1px 0 0 30px",color:"rgb(41, 163, 211)"}}>{designation}</h4>
            <br/>
            <h1>Personal Profile</h1>
            <h4>{objective}</h4>
            <br/>
            <h1>Work Experience</h1>
            <h4>{experience}</h4>
            <br/>
          
        </div>
      </div>
    </div>
  );
};

export default Two;
