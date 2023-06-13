import React, { useState } from "react";
// import Task from "./Task";
import { useNavigate } from "react-router-dom";

const Bottom = ({ todos,del,comp }) => {
  return (
    <div className="bottom">
      {todos.map((item, index) => {
        return (
          <div className="task">
            {item}
            <button
              className="btn"
              style={{ float: "right", height: "30px", width: "30px" }}
              onClick={() => {
                del(index);
              }}
            >
              &#128465;
            </button>
            <button
              className="btn"
              style={{ float: "right", height: "30px", width: "30px" }}
              onClick={() => {
                comp(index);
              }}
            >
              &#10003;
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Bottom;
