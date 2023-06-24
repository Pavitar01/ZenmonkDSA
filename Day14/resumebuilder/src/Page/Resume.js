import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { submitDetails } from "../Redux/Store/Slice/ResumeSlice";
import One from "../Template/One";
import Two from "../Template/Two";
import Three from "../Template/Three";

const Resume = () => {
  const temp = useSelector((state) => state.resumeData.templates);
  const [selectedTemplate, setSelectedTemplate] = useState(temp);
  const [Name, setName] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Address, setAddress] = useState("");
  const [Objective, setObjective] = useState("");
  const [Skill, setSkill] = useState("");
  const [social, setSocial] = useState("");
  const [image, setImage] = useState(null);
  const [Project, setProject] = useState("");
  const [Exp, setExp] = useState("");
  const [err, setErr] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [previewMode, setPreviewMode] = useState(false);
  const [isDraftPopupOpen, setIsDraftPopupOpen] = useState(false);
  const [drafts, setDrafts] = useState([]);

  const dispatch = useDispatch();

  const reset = () => {
    setAddress("");
    setDesignation("");
    setExp("");
    setName("");
    setObjective("");
    setProject("");
    setSkill("");
    setSocial("");
    setImage(null);
    setPhoneNumber("");
    setPhoneNumberError("");
    setErr("");
  };

  const ph = useSelector((state) => state.userData.data);

  const sendData = {
    id: ph,
    template_id: selectedTemplate,
    data: {
      name: Name,
      address: Address,
      designation: Designation,
      experience: Exp,
      objective: Objective,
      project: Project,
      skill: Skill,
      social: social,
      image: image,
    },
  };

  const submit = () => {
    if (
      Address === "" ||
      Designation === "" ||
      Exp === "" ||
      Name === "" ||
      Objective === "" ||
      Project === "" ||
      Skill === "" ||
      social === "" ||
      image === null ||
      PhoneNumber === ""
    ) {
      setErr("Please Fill All Fields");
      setPhoneNumberError("Phone Number is required");
      setIsDraftPopupOpen(true);
    } else {
      navigate("/Add");
      dispatch(submitDetails(sendData));
    }
  };

  const navigate = useNavigate();

  const handleTemplateChange = (templateId) => {
    setSelectedTemplate(templateId);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const saveDraft = () => {
    const draftData = {
      template: selectedTemplate,
      name: Name,
      address: Address,
      designation: Designation,
      experience: Exp,
      objective: Objective,
      project: Project,
      skill: Skill,
      social: social,
      image: image,
      phoneNumber: PhoneNumber,
    };

    setDrafts([...drafts, draftData]);

    

    setIsDraftPopupOpen(false);
  };

  const DraftPopup = () => {
    return (
      <div className="draft-popup">
        <h2>Drafts</h2>
        {drafts.map((draft, index) => (
          <div key={index} className="draft-item">
            {draft.template === 1 && <One details={draft} />}
            {draft.template === 2 && <Two details={draft} />}
            {draft.template === 3 && <Three details={draft} />}
            <button
              onClick={() => setDrafts(drafts.filter((_, i) => i !== index))}
            >
              Delete
            </button>
          </div>
        ))}
        <button onClick={() => setIsDraftPopupOpen(false)}>Close</button>
        <button onClick={saveDraft}>Save Draft</button>
      </div>
    );
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
          type="tel"
          value={PhoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          placeholder="Phone Number"
        />
        <input
          type="text"
          value={Designation}
          onChange={(e) => {
            setDesignation(e.target.value);
          }}
          placeholder="Designation.."
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
          value={Skill}
          onChange={(e) => {
            setSkill(e.target.value);
          }}
          placeholder="Skill"
        ></textarea>

        <textarea
          value={social}
          onChange={(e) => {
            setSocial(e.target.value);
          }}
          placeholder="Social"
        ></textarea>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          placeholder="Image"
        />

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
        <button onClick={submit}>Submit</button>
        <button onClick={reset}>Reset</button>
        <button
          onClick={() => {
            setPreviewMode(true);
          }}
        >
          Preview
        </button>
        <button onClick={() => setIsDraftPopupOpen(true)}>Draft</button>
      </div>

      <p style={{ marginTop: "-15px" }}>{err}</p>

      {previewMode && (
        <div className="preview">
          {selectedTemplate === 1 && (
            <One
              details={{
                name: Name,
                address: Address,
                designation: Designation,
                experience: Exp,
                objective: Objective,
                project: Project,
                skill: Skill,
                social: social,
                image: image,
                PhoneNumber: PhoneNumber,
              }}
            />
          )}

          {selectedTemplate === 2 && (
            <Two
              details={{
                name: Name,
                address: Address,
                designation: Designation,
                experience: Exp,
                objective: Objective,
                project: Project,
                skill: Skill,
                social: social,
                image: image,
                PhoneNumber: PhoneNumber,
              }}
            />
          )}
          {selectedTemplate === 3 && (
            <Three
              details={{
                name: Name,
                address: Address,
                designation: Designation,
                experience: Exp,
                objective: Objective,
                project: Project,
                skill: Skill,
                social: social,
                image: image,
                PhoneNumber: PhoneNumber,
              }}
            />
          )}
          <button onClick={() => setPreviewMode(false)}>Edit</button>
          <button onClick={() => handleTemplateChange(1)}>Resume1</button>
          <button onClick={() => handleTemplateChange(2)}>Resume2</button> 
          <button onClick={() => handleTemplateChange(3)}>Resume3</button> 
        </div>
        
      )}

      {isDraftPopupOpen && <DraftPopup />}
    </div>
  );
};

export default Resume;
