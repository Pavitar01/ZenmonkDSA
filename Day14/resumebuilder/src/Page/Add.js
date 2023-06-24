import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDetails } from "../Redux/Store/Slice/ResumeSlice";
import { LogLout } from "../Redux/Store/Slice/UserSlice";
import { useNavigate } from "react-router-dom";
import Templates from "./Templates";
import Three from "../Template/Three";
import Two from "../Template/Two";
import One from "../Template/One";
import PrevieCard from "../Component/PrevieCard";

const Add = () => {
  const submittedDetails = useSelector(
    (state) => state.resumeData.submittedDetails
  );
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const handleCardClick = (templateId) => {
    setSelectedTemplate(templateId);
  };
  const ph = useSelector((state) => state.resumeData.phoneNumber);
  const navigate = useNavigate();

  const del = (id, templateIndex) => {
    dispatch(deleteDetails({ id, templateIndex }));
  };

  const download = (x) => {
    const ele = document.getElementById(x);
    if (ele) {
      const body = document.body;
      body.innerHTML = ele.innerHTML;
      window.print();
      window.location.reload();
    }
  };

  const openPreview = (templateId) => {
    setSelectedTemplate(templateId);
  };

  const closePreview = () => {
    setSelectedTemplate(null);
  };

  return (
    <>
      <div className="addResume">
        <div className="add">
        <h1 style={{textAlign:"center",padding:"10px"}}>Home Page</h1>

          <div className="grid">
            {submittedDetails.map((detail) => {
              const { id, templates } = detail;

              if (ph === id) {
                return templates.map((template, index) => (
                  <div className="template-card" key={index}>
                    <div
                      className="preview-card"
                      onClick={() => openPreview(template.template_id)}
                    >
                      <PrevieCard
                        details={{
                          template: template.template_id,
                          name: template.data.name,
                          deisgnation: template.data.designation,
                          address: template.data.address,
                          objective: template.data.objective,
                          project: template.data.project,
                          experience: template.data.experience,
                          image: template.data.image,
                          skill: template.data.skill,
                          PhoneNumber: template.data.PhoneNumber,
                        }}
                      />
                    </div>
                    <div className="card-buttons">
                      <button
                        className="delete-button"
                        style={{backgroundColor:"transparent"}}
                        onClick={() => del(id, index)}
                      >
                        &#128465;
                      </button>
                    </div>
                  </div>
                ));
              }
              return null;
            })}
          </div>

          <button
            className="add-button"
            onClick={() => {
              setClick(!click);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              dispatch(LogLout());
              navigate("/", { replace: true });
            }}
            style={{ left: "10px", width: "100px", height: "100px" }}
          >
            Logout
          </button>
        </div>
      </div>
      {click && <Templates isclick={setClick} click={click} />}
      {selectedTemplate && (
        <div className="popup-container">
          <div className="popup">
            {submittedDetails.map((detail) => {
              const { id, templates } = detail;
              if (ph === id) {
                const selected = templates.find(
                  (template) => template.template_id === selectedTemplate
                );
                if (selected) {
                  return (
                    <div key={selected.template_id}>
                      {selected.template_id === 1 && (
                        <One
                          details={{
                            name: selected.data.name,
                            designation: selected.data.designation,
                            address: selected.data.address,
                            objective: selected.data.objective,
                            project: selected.data.project,
                            experience: selected.data.experience,
                            image: selected.data.image,
                            skill: selected.data.skill,
                            PhoneNumber: selected.data.PhoneNumber,
                          }}
                        />
                      )}
                      {selected.template_id === 2 && (
                        <Two
                          details={{
                            name: selected.data.name,
                            designation: selected.data.designation,
                            address: selected.data.address,
                            objective: selected.data.objective,
                            project: selected.data.project,
                            experience: selected.data.experience,
                            image: selected.data.image,
                            skill: selected.data.skill,
                            PhoneNumber: selected.data.PhoneNumber,
                          }}
                        />
                      )}
                      {selected.template_id === 3 && (
                        <Three
                          details={{
                            name: selected.data.name,
                            designation: selected.data.designation,
                            address: selected.data.address,
                            objective: selected.data.objective,
                            project: selected.data.project,
                            experience: selected.data.experience,
                            image: selected.data.image,
                            skill: selected.data.skill,
                            PhoneNumber: selected.data.PhoneNumber,
                          }}
                        />
                      )}
                      <button className="close-button" onClick={closePreview}>
                        Close
                      </button>
                    </div>
                  );
                }
              }
              return null;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Add;
