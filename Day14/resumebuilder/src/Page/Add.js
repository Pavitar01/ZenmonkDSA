import React, { useState } from "react";
import Templates from "./Templates";

const Add = () => {
  const [click, isclick] = useState(false);
  return (
    <>
      <div className="addResume">
        <div className="add">
          <div className="grid"></div>
          <button
            onClick={() => {
              click ? isclick(false) : isclick(true);
            }}
          >
            +
          </button>
        </div>
      </div>
      {click && <Templates />}
    </>
  );
};

export default Add;
