import React, { useState } from "react";
import user from "../Assets/images/user.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddTemplate } from "../Redux/Store/Slice/ResumeSlice";

const Card = () => {
  const selTemp=useSelector((item)=>{
    return item.resumeData.templates
  })
  const [selectedTemplate, setSelectedTemplate] = useState(selTemp);
  const handleTemplateChange = (templateId) => {
    setSelectedTemplate(templateId);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ph = useSelector((state) => {
    return state.userData.data;
  });


  // usestate object;


// const


  const tempData = {
    id: ph,
    templates: {
      template_id: selectedTemplate,
      data: null,
    },
  };

  return (
    <>
      <div
        className="card1"
        onClick={() => {
          handleTemplateChange(1);
          dispatch(AddTemplate(1));
          navigate("/Resume");
        }}
      ></div>
      <div
        className="card2"
        onClick={() => {
          handleTemplateChange(2);
          dispatch(AddTemplate(2));
          navigate("/Resume");
        }}
      ></div>
      <div
        className="card3"
        onClick={() => {
          handleTemplateChange(3);
          dispatch(AddTemplate(3));
        }}
      ></div>
    </>
  );
};

export default Card;
