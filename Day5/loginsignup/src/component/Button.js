import React from "react";
import "../css/button.css";
const Button = ({text}) => {
    const text="hello"
  return (
    <div className="btn">
      <button>{text}</button>
    </div>
  );
};

export default Button;
