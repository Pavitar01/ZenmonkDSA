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
import { async } from "react-input-emoji";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
const LoginPage = () => {
  const db = getFirestore(app);

  const [islogin, setIslogin] = useState(true);
  const [val, setVal] = useState("");
  const [user, setUser] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      dispatch(AddUser(data));
      setUser(data);
      console.log(user);
    });
  }, []);
  const auth = getAuth(app);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider).then(async (res) => {
      const user = res.user;
      const q1 = query(collection(db, "User"), where("uid", "==", user.uid));
      const querysnap = await getDocs(q1);
      try {
        if (querysnap.empty) {
          await addDoc(collection(db, "User"), {
            name: user.displayName,
            uid: user.uid,
            url: user.photoURL,
            createdAt: serverTimestamp(),
          });
        }
      } catch (err) {
        console.log("already exits");
      }
    });
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
