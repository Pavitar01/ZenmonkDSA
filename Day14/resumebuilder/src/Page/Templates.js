import React from "react";
import Card from "../Component/Card";

const Templates = ({ isclick, click }) => {
  return (
    <>
      <div>
        <div className="template">
          <div>
            <h1>
              Template{" "}
              <span
                onClick={() => (click ? isclick(false) : isclick(true))}
                style={{
                  background: "blue",
                  padding: "10px",
                  borderRadius: "10px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Back
              </span>
            </h1>
          </div>
          <div className="cards">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Templates;
