import React, { useState } from "react";
import Top from "../component/Top";
import Bottom from "../component/Bottom";
import "../css/all.css";

const Audioplayer = () => {
  const [value, setvalue] = useState("");
  const playsongs = (e) => {
    setvalue(e);
  };
  
  return (
    <div className="parent">
      <Top value={value}/>
      <Bottom playsongs={playsongs}  />
    </div>
  );
};

export default Audioplayer;
