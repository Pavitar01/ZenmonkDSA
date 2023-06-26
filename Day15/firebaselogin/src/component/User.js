import React, { useState } from "react";
import { data } from "../DummyData/data";
import Feild from "./Feild";
const User = () => {
  const [isActive, setIsActive] = useState();
  const setActive = (i) => {
    setIsActive(i);
    console.log(i);
  };
  return (
    <div className="mainfeild" >
      {data.map((i, index) => {
        return (
          <div onClick={() => setActive(index)} style={{cursor:"pointer"}} key={index}>
            <Feild
              color={isActive == index ? "#f23f79" : ""}
              width={isActive == index ? "800px" : ""}
              padding={isActive == index ? "10px" : ""}
              // transform={isActive == index ? "scale(2, 0.5);" : ""}
              name={i.name}
              url={i.logo}
              time={i.time}
              text={i.text}
        
            />
          </div>
        );
      })}
    </div>
  );
};

export default User;
