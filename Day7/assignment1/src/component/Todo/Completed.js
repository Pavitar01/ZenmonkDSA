import React from "react";
import { useParams } from "react-router-dom";
const Completed = () => {
  const { taskcp } = useParams();
  const newarr = JSON.parse(taskcp);
  return (
    <div className="completed">
      <div className="card">
        <h1>Completed</h1>
        {newarr.map((item) => {
          return (
            <ul>
              <li>{item}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Completed;
