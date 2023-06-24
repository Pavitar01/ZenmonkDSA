import React, { useState } from "react";
import user from "../Assets/images/user.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTemplate } from "../Redux/Store/Slice/ResumeSlice";

const Card = () => {
  const img1 =
    "https://th.bing.com/th/id/OIP._5MXqmJqyqkkEMMp7DdxagAAAA?pid=ImgDet&rs=1";
  const img2 =
    "https://i.pinimg.com/originals/b4/55/17/b455170adb05065d9d884736da260d12.jpg";
  const selTemp = useSelector((state) => state.resumeData.templates);
  const [selectedTemplate, setSelectedTemplate] = useState(selTemp);
  const handleTemplateChange = (templateId) => {
    setSelectedTemplate(templateId);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ph = useSelector((state) => state.userData.data);

  return (
    <>
      <div
        className="card"
        style={{ backgroundImage: `url('${img1}')` }}
        onClick={() => {
          handleTemplateChange(1);
          dispatch(addTemplate(1));
          navigate("/Resume");
        }}
      ></div>
      <div
        className="card"
        onClick={() => {
          handleTemplateChange(2);
          dispatch(addTemplate(2));
          navigate("/Resume");
        }}
      ></div>
      <div
        className="card"
        style={{ backgroundImage: `url('${img2}')` }}

        onClick={() => {
          
          handleTemplateChange(3);
          dispatch(addTemplate(3));
          navigate("/Resume");

        }}
      ></div>
      <div
        className="card"
        onClick={() => {
          handleTemplateChange(3);
          dispatch(addTemplate(1));
        }}
      ></div>
      <div
        className="card"
        onClick={() => {
          handleTemplateChange(3);
          dispatch(addTemplate(1));
        }}
      ></div>
    </>
  );
};

export default Card;
