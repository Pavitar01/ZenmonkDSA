import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TemplateOne from "../Template/TemplateOne";
import TemplateTwo from "../Template/TemplateTwo";
import { useDispatch, useSelector } from "react-redux";
import { Update, submitDetails } from "../Redux/Store/Slice/ResumeSlice";

const Resume = () => {
  const temp = useSelector((state) => {
    return state.resumeData.templates;
  });
  const [selectedTemplate, setSelectedTemplate] = useState(temp);
  const [Name, setName] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Address, setAddress] = useState("");
  const [Objective, setObjective] = useState("");
  const [Project, setProject] = useState("");
  const [Exp, setExp] = useState("");
  const [err, setErr] = useState("");
  const [previewMode, setPreviewMode] = useState(false);
  const dispatch = useDispatch();
  const reset = () => {
    setAddress("");
    setDesignation("");
    setExp("");
    setName("");
    setObjective("");
    setProject("");
  };

  const ph = useSelector((state) => {
    return state.userData.data;
  });

  const sendData = {
    id: ph,
    templates: {
      template_id: selectedTemplate,
      data: {
        name: Name,
        address: Address,
        designation: Designation,
        experience: "Experience : " + Exp,
        objective: Objective,
        project: Project,
      },
    },
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
      setErr("Please Fill All Fields");
    } else {
      navigate("/Add");
      dispatch(submitDetails({ data: sendData })); // Dispatch the submitDetails action
    }
  };

  const navigate = useNavigate();

  const handleTemplateChange = (templateId) => {
    setSelectedTemplate(templateId);
  };

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
        <button onClick={() => navigate("/Add")}>Back</button>
      </div>
      <div>
        <button onClick={submit}>Submit</button>
        <button onClick={reset}>Reset</button>
        <button
          onClick={() => {
            setPreviewMode(true);
          }}
        >
          Preview
        </button>
      </div>
      <p>{err}</p>
      {selectedTemplate === 1 && previewMode && (
        <div className="preview">
          <TemplateOne
            details={{
              Name,
              Designation,
              Address,
              Objective,
              Project,
              Exp,
            }}
          />
          <button onClick={() => setPreviewMode(false)}>Edit</button>
          <button onClick={() => handleTemplateChange(1)}>Resume1</button>
          <button onClick={() => handleTemplateChange(2)}>Resume2</button>
        </div>
      )}

      {selectedTemplate === 2 && previewMode && (
        <div className="preview">
          <TemplateTwo
            details={{
              Name,
              Designation,
              Address,
              Objective,
              Project,
              Exp,
            }}
          />
          <button onClick={() => setPreviewMode(false)}>Edit</button>
          <button onClick={() => handleTemplateChange(1)}>Resume1</button>
          <button onClick={() => handleTemplateChange(2)}>Resume2</button>
        </div>
      )}
    </div>
  );
};

export default Resume;
