import React, { useState, useEffect } from "react";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import { app } from "../firebase/firebase";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopu,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { AddUser } from "../Redux/Slice/UserSlice";
const LoginPage = () => {
  const [islogin, setIslogin] = useState(true);
  const [val, setVal] = useState("");
  const [user, setUser] = useState(false);
  
  const dispatch = useDispatch();
  const d = useSelector((state) => {
    return state.userData.user;
  });
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      dispatch(AddUser(data));
      setUser(data);
    });
  },[]);
  const auth = getAuth(app);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <>
      {user ? (
        <Home />
      ) : (
        <div className="login" style={{ position: "relative" }}>
          {islogin ? (
            <>
              <Login />
            </>
          ) : (
            <Signup />
          )}
          <p
            style={{
              position: "absolute",
              left: "20px",
              fontWeight: "100",
              marginTop: "-10px",
              cursor: "pointer",
            }}
            onClick={() => (islogin ? setIslogin(false) : setIslogin(true))}
          >
            {islogin ? "Register urself" : "Login with Email"}
          </p>

          <p style={{ width: "100%", textAlign: "center" }}>- Or -</p>
          <button className="gbutton" onClick={googleSignIn}></button>
          {val}
        </div>
      )}
    </>
  );
};

export default LoginPage;
