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
  setDoc,
  doc,
} from "firebase/firestore"; //firstore
import { app } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import ConvoButton from "./ConvoButton";

const Home = () => {
  const [toggle, isToggle] = useState(false);
  const [text, setText] = useState("");
  const [chats, setChat] = useState([]);
  const [startcConvo, setStartConvo] = useState(false);
  const [searchText, setSearchText] = useState(""); // New state variable for search text
  const [filteredChats, setFilteredChats] = useState([]); // New state variable for filtered chats
  const [isTyping, setIsTyping] = useState(false)
  const data = useSelector((state) => {
    return state.userData.user;
  });

  const db = getFirestore(app);

  const RoomId = useSelector((state) => {
    return state.userData.roomId;
  });

  const q = query(collection(db, "Chat"), orderBy("createdAt", "asc"));
  const handleOnEnter = async (text) => {
   if(text!==""){
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
   }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(q , (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const filteredData = data.filter((item) => item.RoomId === RoomId);
      setChat([...filteredData]);
      const filteredChats = filteredData.filter((item) =>
        item.message.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredChats(filteredChats);
    });

    return () => {
      unsubscribe();
    };
  }, [RoomId, searchText]);


  const handleInputChange = (e) => {
    setText(e);

    updateTypingStatus(e !== "");
  };
  const roomId=useSelector((state)=>{
    return state.userData.roomId
  })

  const updateTypingStatus = async (isTyping) => {
    try {
      await setDoc(doc(db, "TypingStatus", RoomId), {
        isTyping: isTyping,
        userId: data.uid,
        roomId:roomId,
      });
    } catch (err) {
      console.error("Error updating typing status:", err);
    }
  };

  useEffect(() => {
    const typingStatusRef = doc(db, "TypingStatus", RoomId);
    const b = onSnapshot(typingStatusRef, (docSnapshot) => {
      const typingStatus = docSnapshot.data();
      if (typingStatus && typingStatus.userId !== data.uid) {
        setIsTyping(typingStatus.isTyping);
      }
    });

    return () => {
      b();
    };
  }, [RoomId]);






  const handleSearch = () => {
    const filteredChats = chats.filter((item) =>
      item.message.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredChats(filteredChats);
  };

  const submit = async () => {
   if(text!==""){
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
   }
    setText("");


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
              <input
                type="text"
                className="search"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <i
                class="fa-solid fa-magnifying-glass"
                onClick={handleSearch}
                style={{ color: "white", cursor: "pointer" }}
              ></i>
            </div>
            <button onClick={() => (toggle ? isToggle(false) : isToggle(true))}>
              <i class="fa-solid fa-user"></i>
            </button>
            {toggle ? <Details /> : <></>}
          </div>
          <div className="messages">
          {isTyping && <span>Other user is typing...</span>} 
            {startcConvo ? (
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
                startcConvo={startcConvo}
              />
            )}
          </div>
          <div className="messageFeild">
            <div className="bg" style={{border:"1px solid purple"}}>
             <input type="text"
            
             style={{width:"100%",height:"100%",border:"none",outline:"none"}}
              className="inputBox"
                value={text}
                onChange={(e)=>{
                  handleInputChange(e.target.value)
                }}
                cleanOnEnter
                onEnter={handleOnEnter}
                placeholder="Type a message"/>
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
