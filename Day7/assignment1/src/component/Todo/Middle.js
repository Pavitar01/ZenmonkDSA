import React from "react";
import { Outlet, Link } from "react-router-dom";

const Middle = (props) => {
  return (
    <>
      <div className="middle">
        <button className="btn">
          <Link to={`/deleted/${JSON.stringify(props.deleted)}`}>Deleted Task</Link>
        </button>
        <button className="btn">
          <Link to={`/completed/${JSON.stringify(props.completed)}`}>Completed Task</Link>
        </button>
      </div>
      <Outlet />
    </>
  );
};

export default Middle;
