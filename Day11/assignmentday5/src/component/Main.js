import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; //for unique id
import { useDispatch } from "react-redux";
import Display from "./Display";
import { adduser } from "../Redux/store/Userslice";
const Main = () => {
//   const [arr, setArr] = useState([]);
  const [val, setVal] = useState("");
  const [err, setErr] = useState("");

  const dispatch = useDispatch();
  const additems = () => {
    if (val !== "") {
      setVal("");
      setErr("");

      dispatch(adduser({ name: val, id: uuidv4() })); //dispatch to call thge method
    } else {
      setErr("Please fill correct name");
    }
  };

 

  return (
    <div className="Userlist">
      <h1>Name</h1>
      <input
        type="text"
        onChange={(e) => {
          setVal(e.target.value);
          setErr("");
        }}
        value={val}
      />
      <button onClick={additems}>Add</button>
      <p>{err}</p>
      <Display />
    </div>
  );
};

export default Main;
