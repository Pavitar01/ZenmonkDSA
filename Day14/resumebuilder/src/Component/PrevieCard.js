import React from "react";
import One from "../Template/One";
import Three from "../Template/Three";
import Two from "../Template/Two";

const PrevieCard = ({ details, popUp, id }) => {
  const {
    name,
    address,
    designation,
    experience,
    objective,
    project,
    skill,
    social,
    image,
    PhoneNumber,
    template,
  } = details;

  return (
    <div className="previewcard">
      <h1>
        Template <span>{template}</span>
      </h1>
      <img src={image} />
      <h5>
        Name: <span>{name}</span>
      </h5>
      <h5>
        Address: <span> {address}</span>
      </h5>
      <h5>
        PhoneNumber: <span>{PhoneNumber}</span>
      </h5>
      <h5>
        Experience: <span> {experience}</span>
      </h5>
      More...
    </div>
  );
};

export default PrevieCard;
