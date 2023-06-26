import React from "react";

const Feild = ({ time, url, name, text,isActive,color,transform,padding}) => {
  return (
    <div className="UserFeild" style={{backgroundColor:color,padding:padding,transform:transform}}>
      <div className="img">
        <img src={url} />
      </div>
      <div className="middle">
        <div className="name">{name}</div>
        <div className="lastText">{text}</div>
      </div>
      <div className="time"><span>{time}</span></div>
    </div>
  );
};

export default Feild;
