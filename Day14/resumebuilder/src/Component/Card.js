import React from "react";
import user from "../Assets/images/user.jpg"
const Card = () => {
  return (
    <>
      <div className="card">
        <div className="left">
          <div className="image">
          <img src={user} />
          </div>
        </div>
        <div className="right">
            <h1 style={{fontSize:"15px"}}>Admin</h1>
            <p style={{fontSize:"4px"}}>Add. #410 shv</p>
        </div>
      </div>
      <div className="card">hello</div>
      <div className="card">hello</div>
    </>
  );
};

export default Card;
