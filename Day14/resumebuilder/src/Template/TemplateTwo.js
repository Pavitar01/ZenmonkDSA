import React from "react";

const TemplateTwo = ({ details, del, index, download }) => {
  const { Name, Designation, Address, Objective, Project, Exp } = details;

  return (
    <div id="print2">
      <h1>Resume Template 2</h1>

      <div className="resume1" >
        <div className="right" style={{ backgroundColor: "white" }}></div>

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

export default TemplateTwo;
