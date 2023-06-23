import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TemplateOne from "../Template/TemplateOne";
import TemplateTwo from "../Template/TemplateTwo";
import Templates from "./Templates";
import { delResume } from "../Redux/Store/Slice/ResumeSlice";
import { LogLout } from "../Redux/Store/Slice/UserSlice";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const submittedDetails = useSelector(
    (state) => state.resumeData.submittedDetails
  );
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [click, isclick] = useState(false);
  const dispatch = useDispatch();
  const handleCardClick = (templateId) => {
    setSelectedTemplate(templateId);
  };
  const navigate = useNavigate();
  const del = (key) => {
    dispatch(delResume(key));
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

  return (
    <>
      <div className="addResume">
        <div className="add">
          <div className="grid">
            {submittedDetails &&
              submittedDetails.map((details, index) => {
                return (
                  <div
                    key={index}
                    className="card"
                    onClick={() =>
                      handleCardClick(details.templates.template_id)
                    }
                  >
                    {details.templates.template_id === 1 && (
                      <div style={{ position: "relative",margin:"30px" }}>
                        <TemplateOne
                          details={{
                            Name: details.templates.data.name,
                            Designation: details.templates.data.designation,
                            Address: details.templates.data.address,
                            Objective: details.templates.data.objective,
                            Project: details.templates.data.project,
                            Exp: details.templates.data.experience,
                          }}
                        />
                        <button
                          onClick={(e) => {
                            del(index);
                          }}
                          style={{ background: "red" }}
                        >
                          &#x1F5D1;
                        </button>
                        <button
                          onClick={(e) => {
                            download("print1");
                          }}
                          style={{ right: "100px", backgroundColor: "none" }}
                        >
                          ⬇️
                        </button>
                      </div>
                    )}
                    {details.templates.template_id === 2 && (
                      <div style={{ position: "relative",margin:"30px" }}>
                        <TemplateTwo
                          details={{
                            Name: details.templates.data.name,
                            Designation: details.templates.data.designation,
                            Address: details.templates.data.address,
                            Objective: details.templates.data.objective,
                            Project: details.templates.data.project,
                            Exp: details.templates.data.experience,
                          }}
                        />
                        <button
                          onClick={(e) => {
                            del(index);
                          }}
                          style={{ background: "red" }}
                        >
                          &#x1F5D1;
                        </button>
                        <button
                          onClick={(e) => {
                            download("print2");
                          }}
                          style={{ right: "100px", backgroundColor: "none" }}
                        >
                          ⬇️
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>

          <button
            onClick={() => {
              click ? isclick(false) : isclick(true);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              dispatch(LogLout());
              navigate("/", { replace: true });
            }}
          style={{left:"10px",width:"100px",height:"100px"}}>
            Logout
          </button>
        </div>
      </div>
      {click && <Templates />}
    </>
  );
};

export default Add;
