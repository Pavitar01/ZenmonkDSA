import React from "react";
import Usestate from "./hooks/Usestate";
import "./App.css";
import Useeffect from "./hooks/Useeffect";
import Audioplayer from "./player/Pages/Audioplayer";
import Dics from "./player/Pages/Dics";
import Uploader from "./player/component/Uploader";
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
