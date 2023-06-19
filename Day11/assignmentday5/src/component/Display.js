import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delt } from "../Redux/store/Userslice";

const Display = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.user;
  });
  const del = (index) => {
    dispatch(delt(index));
  };

  return (
    <div>
      {data.map((i, index) => {
        return (
            <li style={{width:"200px",background:"crimson",color:"white",textAlign:"center",borderRadius:"20px",margin:"5px auto",listStyle:"none"}}
              key={index}
              onClick={() => {
                del(index);
              }}
            >
              {i.name}
            </li>
        );
      })}
    </div>
  );
};

export default Display;
