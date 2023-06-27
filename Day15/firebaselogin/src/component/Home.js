import React, { useEffect, useState, useRef } from "react";
import "../css/chat.css";
import logo from "../assets/images/logo.png";
import User from "./User";
import Details from "./Details";
import InputEmoji from "react-input-emoji";
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
} from "firebase/firestore";
import { app } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import ConvoButton from "./ConvoButton";

const Home = () => {
  const [toggle, isToggle] = useState(false);
  const [text, setText] = useState("");
  const [chats, setChats] = useState([]);
  const [startConvo, setStartConvo] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredChats, setFilteredChats] = useState([]);
  const data = useSelector((state) => state.userData.user);
  const messagesEndRef = useRef(null);

  const db = getFirestore(app);

  const RoomId = useSelector((state) => state.userData.roomId);

  const q = query(collection(db, "Chat"), orderBy("createdAt", "asc"));
  const handleOnEnter = async (text) => {
    try {
      await addDoc(collection(db, "Chat"), {
        RoomId: RoomId,
        sId: data.uid,
        message: text,
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const filteredData = data.filter((item) => item.RoomId === RoomId);
      setChats([...filteredData]);
      const filteredChats = filteredData.filter((item) =>
        item.message.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredChats(filteredChats);
      scrollToBottom(); // Auto-scroll to the latest message
    });

    return () => {
      unsubscribe();
    };
  }, [RoomId, searchText]);

  const handleSearch = () => {
    const filteredChats = chats.filter((item) =>
      item.message.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredChats(filteredChats);
  };

  const submit = async () => {
    try {
      await addDoc(collection(db, "Chat"), {
        RoomId: RoomId,
        sId: data.uid,
        message: text,
        url: data.photoURL,
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      alert(err);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="chatMain">
      <div className="Main">
        <div className="left">
          <div className="logo">
            <button className="button">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <img src={logo} className="logoIcon" alt="Logo" />

            <button className="button">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          <div className="users">
            <User />
          </div>
        </div>
        <div className="right">
          <div className="top" style={{ position: "relative" }}>
            <button>
              <i className="fa-regular fa-envelope"></i>
            </button>
            <div className="input">
              <input
                type="text"
                className="search"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <i
                className="fa-solid fa-magnifying-glass"
                onClick={handleSearch}
                style={{ color: "white", cursor: "pointer" }}
              ></i>
            </div>
            <button onClick={() => (toggle ? isToggle(false) : isToggle(true))}>
              <i className="fa-solid fa-user"></i>
            </button>
            {toggle ? <Details /> : <></>}
          </div>
          <div className="messages">
            {startConvo ? (
              filteredChats.map((item) => (
                <Message
                  key={item.id}
                  message={item.message}
                  url={item.url}
                  user={item.sId === data.uid ? "me" : "other"}
                  time={item.createdAt}
                />
              ))
            ) : (
              <ConvoButton
                setStartConvo={setStartConvo}
                startcConvo={startConvo}
              />
            )}
            <div ref={messagesEndRef} /> {/* This empty div is used for auto-scrolling */}
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
            <button
              className="button"
              onClick={submit}
              disabled={!startConvo}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
