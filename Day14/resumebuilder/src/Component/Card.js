import React, { useState } from "react";
import user from "../Assets/images/user.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddTemplate } from "../Redux/Store/Slice/ResumeSlice";

const Card = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const handleTemplateChange = (templateId) => {
    setSelectedTemplate(templateId);
  };
  const navigate = useNavigate();
const dispatch=useDispatch()
  return (
    <>
      <div
        className="card1"
        onClick={() => {
          handleTemplateChange(1);
          dispatch(AddTemplate(1))
          navigate("/Resume");
        }}
      >
      </div>
      <div
        className="card2"
        onClick={() => {
          handleTemplateChange(2);
          dispatch(AddTemplate(1))
          navigate("/Resume");
        }}
      >
      </div>
      <div className="card3" onClick={() => handleTemplateChange(3)}>
      </div>
    </>
  );
};

export default Card;
