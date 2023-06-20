import React, { useState } from "react";
import "../css/all.css";
import Addnotes from "../component/Addnotes";
import List from "../component/List";
import Colorpicker from "../component/Colorpicker";
const Notesapp = () => {
  const [istoggle, setistoggle] = useState(false);

  return (
    <div className="note">
    <Colorpicker/>
      <h1 style={{color:"white",textAlign:"center",margin:"10px"}}>Notes App</h1>

      <div className="top">
        {istoggle && <Addnotes />}
        <button
          className="button"
          onClick={() => {
            istoggle ? setistoggle(false) : setistoggle(true);
          }}
        >
          +
        </button>
      </div>
      <List />
    </div>
  );
};

export default Notesapp;
