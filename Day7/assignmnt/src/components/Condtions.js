import React, { useState } from "react";

const Condtions = () => {
  const [val, setval] = useState("");
  const [islogin, setislogin] = useState("no");
  const [login1, setlogin] = useState(true);

  const login = () => {
    setislogin("yes");
    setval("Hy,welcome");
  };
  const logout = () => {
    setislogin("no");
    setval("Thanks for comming");
  };

  return (
    <div>
      <h1>Conditional rendering</h1>
      <ul>
        <h3>Ternary Operator</h3>
        <li>
          {islogin === "no" ? (
            <button onClick={login} className="btn">
              login
            </button>
          ) : (
            <button onClick={logout} className="btn">
              logout
            </button>
          )}
          <p>{val}</p>
        </li>
        <h3>Nullish</h3>
        <li>
          {login1 && (
            <button onClick={login} className="btn">
              login
            </button>
          )}
          
        </li>
      </ul>
    </div>
  );
};

export default Condtions;
