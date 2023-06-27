import React, { useEffect, useState } from "react";
import "../css/chat.css";
import logo from "../assets/images/logo.png";
import User from "./User";
import Details from "./Details";
import InputEmoji, { async } from "react-input-emoji";
import Message from "./Message";
import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  where,
  getDoc,
  getDocs,
} from "firebase/firestore"; //firstore
import { app } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import ConvoButton from "./ConvoButton";

const Home = () => {
  const [toggle, isToggle] = useState(false);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [val, setVal] = useState();
  const [startcConvo, setStartConvo] = useState(false);

 
  const data = useSelector((state) => {
    return state.userData.user;
  });


  const db = getFirestore(app);

  const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));

  const handleOnEnter = async (text) => {
    try {
      await addDoc(collection(db, "messages"), {
        messages: text,
        uid: data.uid,
        url: data.photoURL,
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    const onsub = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((i) => {
          const id = i.id;
          return { id, ...i.data() };
        })
      );
    });

    return () => {
      onsub();
    };
  }, []);

  const submit = async () => {
    try {
      await addDoc(collection(db, "messages"), {
        messages: text,
        uid: data.uid,
        url: data.photoURL,
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="chatMain">
      <div className="Main">
        <div className="left">
          <div className="logo">
            <button className="button">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <img src={logo} className="logoIcon" />

            <button className="button">
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
          <div className="users">
            <User />
          </div>
        </div>
        <div className="right">
          <div className="top" style={{ position: "relative" }}>
            <button>
              <i class="fa-regular fa-envelope"></i>
            </button>
            <div className="input">
              <input type="text" className="search" />
              <i
                class="fa-solid fa-magnifying-glass"
                style={{ color: "white", cursor: "pointer" }}
              ></i>
            </div>
            <button onClick={() => (toggle ? isToggle(false) : isToggle(true))}>
              <i class="fa-solid fa-user"></i>
            </button>
            {toggle ? <Details /> : <></>}
          </div>
          <div className="messages">
            {startcConvo ? (
              messages.map((item) => (
                <Message
                  key={item.id}
                  message={item.messages}
                  url={item.url}
                  user={item.uid === data.uid ? "me" : "other"}
                />
              ))
            ) : (
              <ConvoButton
                setStartConvo={setStartConvo}
                startcConvo={startcConvo}
              />
            )}
          </div>
          <div className="messageFeild">
            <div className="bg">
              <InputEmoji
                className="inputBox"
                value={text}
                onChange={setText}
                cleanOnEnter
                onEnter={handleOnEnter}
                placeholder="Type a message"
              />
            </div>
            <button className="button" onClick={submit} disabled={!startcConvo}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
