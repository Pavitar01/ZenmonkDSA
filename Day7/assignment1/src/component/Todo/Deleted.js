import React from "react";
import { useParams } from "react-router-dom";
const Deleted = () => {
  const {taskdl}=useParams();
  const array=JSON.parse(taskdl);
  return (
    <div className="deleted">
      <div className="card">
        <h1>Deleted Items</h1>
        {
          array.map((item)=>{
            return(<li>{item}</li>)
          })
        }
      </div>
    </div>
  );
};

export default Deleted;
