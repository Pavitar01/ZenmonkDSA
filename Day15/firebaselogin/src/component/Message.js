import React from "react";

const Message = ({ message, url, user = "other", time = "13:12" }) => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert timestamp to milliseconds
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      // second: "2-digit",
    });
  };
  if (user === "me") {
    return (
      <div className="message1">
        <div className="m1">
          <div>
            <p>{message} </p>
            <span
              style={{ color: "gray", fontSize: "15px", marginTop: "10px" }}
            >
              {formatTime(time)}
            </span>
          </div>

          <img src={url} alt="no image" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="message2">
        <div className="m2">
          <img src={url} alt="no image" />

          <div>
            <p>{message}</p>
            <span
              style={{
                color: "gray",
                fontSize: "15px",
                marginTop: "10px",
                float: "right",
              }}
            >
              {formatTime(time)}
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default Message;
