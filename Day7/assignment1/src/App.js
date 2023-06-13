import React from "react";
import Todo from "./Pages/Todo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deleted from "./component/Todo/Deleted";
import Completed from "./component/Todo/Completed";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        
          <Route path='/deleted/:taskdl' element={<Deleted />} />
          <Route path="/completed/:taskcp" element={<Completed />} />
          <Route path="/" element={<Todo/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
