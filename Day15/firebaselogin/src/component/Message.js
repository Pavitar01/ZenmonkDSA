import React from "react";

const Message = ({ message, url, user = "other", time = "13:12" }) => {
  if (user === "me") {
    return (
      <div className="message1">
        <div className="m1">
        <div>
        <p>{message} </p>
          <span style={{ color:"gray",fontSize:"15px",marginTop:"10px"}}>{time}</span>
        </div>

          <img
            src={url}
            alt="no image"
          />

        </div>
      </div>
    );
  } else {
    return (
      <div className="message2">
        <div className="m2">
          <img
            src={url}
            alt="no image"
          />

         <div> <p>{message}</p>
          <span style={{color:"gray",fontSize:"15px",marginTop:"10px",float:"right"}} >{time}</span>
          </div>

        </div>
      </div>
    );
  }
};

export default Message;
