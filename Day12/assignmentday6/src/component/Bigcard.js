import React from "react";

const Bigcard = ({ title, des }) => {
  return (
    <div className="bigcard">
      <h1>{title}</h1>
      <div className="p" dangerouslySetInnerHTML={{__html:des}}></div>
      <button>Back</button>
    </div>
  );
};

export default Bigcard;
