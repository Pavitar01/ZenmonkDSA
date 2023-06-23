import React from "react";

const TemplateOne = ({ details, del, index }) => {
  const { Name, Designation, Address, Objective, Project, Exp } = details;

  return (
    <div id="print1">
      <h1>Resume Template 1</h1>

      <div className="resume1">
        <div className="right">
          <div style={{width:"100px",height:"100px",backgroundColor:"white",margin:"20px",borderRadius:"100%"}}></div>
        </div>

        <div className="details">
          
          <h2>{Name}</h2>
          <p>Designation: {Designation}</p>
          <p>Address: {Address}</p>
          <h3>Objective</h3>
          <p>{Objective}</p>
          <h3>Experience</h3>
          <p>{Exp}</p>
          <h3>Project</h3>
          <p>{Project}</p>
        </div>
      </div>
    </div>
  );
};

export default TemplateOne;
