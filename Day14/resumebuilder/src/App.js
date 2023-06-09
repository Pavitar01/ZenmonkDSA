import React, { useEffect } from "react";
import Resume from "./Page/Resume";
import {
  BrowserRouter,
  Routes,
  Route,
  redirect,
  useNavigate,
  useFetcher,
  Navigate,
} from "react-router-dom";
import Login from "./Page/Login";
import { PublicRouter } from "../src/Routers/PublicRouters";
import { PrivateRouter } from "./Routers/PrivateRouters";
import Otp from "./Page/Otp";
import { useSelector } from "react-redux";
import Add from "./Page/Add";
const App = () => {
  const data = useSelector((state) => {
    return state.userData.islogin;
  });
  const verified = useSelector((state) => {
    return state.userData.isverified;
  });

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />

      {data
        ? PrivateRouter.map((i, index) => (
            <Route path={i.path} element={i.component} key={index} />
          ))
        : PublicRouter.map((i, index) => (
            <Route path={i.path} element={i.component} key={index} />
          ))}

      {verified && (
        <>
          <Route path="/Add" element={<Add />} />
          <Route path="/Resume" element={<Resume />} />
        </>
      )}
    </Routes>
  );
};

export default App;
