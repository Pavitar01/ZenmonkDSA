import React from "react";
const Button1 = ({ text }) => {
  return (
    <>
      <button
        style={{
          float: "right",
          height: "30px",
          width: "30px",
          width: "100px",
        }}
      >
        {text}
      </button>
    </>
  );
};

export default Button1;
