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
            <ul style={{padding:"20px"}}>
              <li>{item}<button style={{backgroundColor:"green",color:"white",float:"right",width:"100px"}}>Done</button></li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Completed;
