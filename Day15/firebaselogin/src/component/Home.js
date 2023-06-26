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
  query,orderBy
} from "firebase/firestore"; //firstore
import { app } from "../firebase/firebase";
import { useSelector } from "react-redux";

const Home = () => {
  const [toggle, isToggle] = useState(false);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const db = getFirestore(app);
  const q=query(collection(db,"messages"),orderBy("createdAt","asc"))


  const handleOnEnter = async (text) => {
    try {
      await addDoc(collection(db, "messages"), {
        messages: text,
        uid: data[0].uid,
        url: data[0].photoURL,
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      alert(err);
    }
  };
  const data = useSelector((state) => {
    return state.userData.user;
  });
  useEffect(() => {
    const onsub = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((i) => {
        const id = i.id;
        return { id, ...i.data()}
      })
      )
    });

    return () => {
      onsub();
    };
  }, []);

  const submit = async () => {
    try {
      await addDoc(collection(db, "messages"), {
        messages: "hello",
        uid: data[0].uid,
        url: data[0].photoURL,
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
            {messages.map((item) => (
              <Message
                key={item.id}
                message={item.message}
                url={item.url}
                user={item.uid === data[0].uid ? "me" : "other"}
              />
            ))}
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
            <button className="button" onClick={submit}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
