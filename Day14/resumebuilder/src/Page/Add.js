import React, { useState } from "react";
import { useSelector } from "react-redux";
import TemplateOne from "../Template/TemplateOne";
import TemplateTwo from "../Template/TemplateTwo";
import Templates from "./Templates";

const Add = () => {
  const submittedDetails = useSelector((state) => state.resumeData.data);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [click, isclick] = useState(false);
  const handleCardClick = (templateId) => {
    setSelectedTemplate(templateId);
  };

  return (
    <>
      <div className="addResume">
        <div className="add">
          <div className="grid">
            {submittedDetails &&
              submittedDetails.map((details) => (
                <div
                  key={details.id}
                  className="card"
                  onClick={() => handleCardClick(details.templateId)}
                >
                  <h2>Submitted Details:</h2>
                  <p>Name: {details.Name}</p>
                  <p>Designation: {details.Designation}</p>
                  <p>Address: {details.Address}</p>
                  <p>Objective: {details.Objective}</p>
                  <p>Project: {details.Project}</p>
                  <p>Experience: {details.Exp}</p>
                </div>
              ))}

            {selectedTemplate === 1 && (
              <div className="preview">
                <TemplateOne details={submittedDetails[selectedTemplate - 1]} />
              </div>
            )}
            {selectedTemplate === 2 && (
              <div className="preview">
                <TemplateTwo details={submittedDetails[selectedTemplate - 1]} />
              </div>
            )}
          </div>
          
          <button
            onClick={() => {
              click ? isclick(false) : isclick(true);
            }}
          >
            +
          </button>
        </div>
      </div>
      {click && <Templates />}
    </>
  );
};

export default Add;
