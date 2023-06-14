import React, { Children, useState } from "react";

const Main = () => {
    const [val,setval]=useState("click any button")
    const arrow=()=>{
        setval("i am arrow function")
    }
    function naming(){
        setval("i am naming function")

    }

const countarray=[
    {
        id:1,
        name:"one"
    },
    {
        id:2,
        name:"two"
    },
    {
        id:3,
        name:"three"
    }
]



  return (
    <div>
      <h1>Naming and arrow function</h1>
      <ul>
        <li>
          <button onClick={()=>{naming()}} className="btn">Naming</button>

        </li>
        <li>
        <button onClick={arrow  } className="btn">Arrow</button>
        </li>
      </ul>
      <p>{val}</p>
    </div>
  );
};

export default Main;
