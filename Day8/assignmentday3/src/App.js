import React from "react";
import "./App.css";
import Audioplayer from "./player/Pages/Audioplayer";
import Dics from "./player/Pages/Dics";
const App = () => {
  return (
    <div className="main">
      {/* <h1>Hooks</h1> */}
      {/* <Usestate/>
      <Useeffect/> */}
       <Dics /> 
       <Audioplayer /> 
    </div>
  );
};

export default App;
