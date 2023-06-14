import React, { useState } from "react";
import Middle from "./Middle";
import allsong from "../services/Data";
import Uploader from "./Uploader";

const Top = ({ value }) => {

  return (
    <>
      <div className="top">
        <div className="card">
          <img src={value.imgurl} className="songimg" />
          <h1 className="songname">
            {value.title} &nbsp;--<span className="artist">{value.artist}</span>
          </h1>
        </div>
        <Middle value={value}/>
      </div>
    </>
  );
};

export default Top;
