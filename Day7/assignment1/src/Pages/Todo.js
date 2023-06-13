import React, { useState } from "react";
import "../Css/todo.css";
import Top from "../component/Todo/Top";
import Middle from "../component/Todo/Middle";
import Bottom from "../component/Todo/Bottom";
const Todo = () => {
  const [todos, setTodos] = useState([]);
const [deleted,setdeleted]=useState([]);
const [completed,setcompleted]=useState([]);
  const addTodo = (task) => {
    setTodos([...todos, task]);
  };
  const del = (key) => {
    const delitem=todos[key];
    const newTodos = todos.filter((item, index) => index !== key);
    setTodos(newTodos);
    setdeleted([...deleted,delitem]);
  };
  const comp = (key) => {
    const comp=todos[key];
    const newcomp = todos.filter((item, index) => index !== key);
    setTodos(newcomp);
    setcompleted([...completed,comp])
  };
  return (
    <div className="parent">
      <div className="box">
        <Top addTodo={addTodo} />
        <Middle completed={completed} deleted={deleted}/>
        <Bottom todos={todos} del={del} comp={comp}/>
      </div>
    </div>
  );
};

export default Todo;
