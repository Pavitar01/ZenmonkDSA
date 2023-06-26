import React, { useState, useEffect } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { auth, provider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";
import { useSelector, useDispatch } from "react-redux";
import { AddUser } from "../Redux/Slice/UserSlice";
const LoginPage = () => {
  const [islogin, setIslogin] = useState(true);
  const [Auth, setAuth] = useState(false);
  const [val, setVal] = useState("");
  const [user, setUser] = useState(null);
  const data = useSelector((state) => {
    return state.userData.user;
  });
  useEffect(() => {
    setUser(data);
  }, []);
  const dispatch = useDispatch();
  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider).then((data) => {
        dispatch(AddUser(data.user));
        console.log(data.user);
      });
    } catch (error) {
      console.log(error);
    }
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
