import React, { useState } from "react";

const Top = ({ addTodo }) => {
  const [task, settask] = useState("");
  const [date, setdate] = useState("");
  const [arr, setarr] = useState([]);
  const [err, seterr] = useState();
  const handlechange = (e) => {
    e.preventDefault();
    if (task !== "" )
     {
      const val=`Task: ${task} and date is ${date}`
      addTodo(val);
      settask("");
    } else {
      seterr("Please Fill This..")
    }
  };
  return (
    <>
      <form className="top" onSubmit={handlechange}>
        <input
          type="text"
          value={task}
          className="input"
          onChange={(e) => {
            settask(e.target.value);
            seterr("")
          }}
        />
          <p style={{ position: "absolute", marginTop: "10px", color: "red" }}>
          {err}
        </p>
        <input style={{marginTop:"10px"}}
          type="date"
          value={date}
          className="input"
          onChange={(e) => {
            setdate(e.target.value);
            seterr("")
          }}
        />

        <button type="submit" className="btn">
          Add +
        </button>
      
      </form>
    </>
  );
};

export default Top;
