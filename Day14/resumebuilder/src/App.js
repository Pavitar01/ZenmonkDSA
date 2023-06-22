import React, { useEffect } from "react";
import Resume from "./Page/Resume";
import {
  BrowserRouter,
  Routes,
  Route,
  redirect,
  useNavigate,
  useFetcher,
} from "react-router-dom";
import Login from "./Page/Login";
import { PublicRouter } from "../src/Routers/PublicRouters";
import { PrivateRouter } from "./Routers/PrivateRouters";
import Otp from "./Page/Otp";
import { useSelector } from "react-redux";
import UserSlice from "./Redux/Store/Slice/UserSlice";
const App = () => {
  const data = useSelector((state) => {
    return state.userSice.islogin;
  });
  const verified = useSelector((state) => {
    return state.userSice.isverified;
  });
  // useEffect(()=>{
  //     verified && navigate("/Resume")
  // },[])
  return (
    <Routes>
      {verified
        ? PrivateRouter.map((i, index) => (
            <Route path={i.path} element={i.component} key={index} />
          ))
        : PublicRouter.map((i, index) => (
            <Route path={i.path} element={i.component} key={index} />
          ))}
    </Routes>
  );
};

export default App;
