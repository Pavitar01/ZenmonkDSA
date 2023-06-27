import React from "react";
import bg1 from "../assets/images/bg1.png";
import { useSelector } from "react-redux";
import { addDoc, collection, query } from "firebase/firestore";
const ConvoButton = ({ setStartConvo, startcConvo }) => {

//     const d=useSelector((state)=>{
//         return state.useData.setRoom
//     })

//   const startConvo = async () => {
//     const q1 = query(collection(db, "Chat"));
//     try {
//       if (q1) {
//         await addDoc(collection(db, "Chat"), {
//           Room: d,
//           uid: user.uid,
//           url: user.photoURL,
//           createdAt: serverTimestamp(),
//         });
//       }
//     } catch (err) {
//       console.log("already exits");
//     }
//   };

  return (
    <div className="startconvo">
      <img src={bg1} />
      <button
        onClick={() => {
          startcConvo ? setStartConvo(false) : setStartConvo(true);
        //   startConvo;
        }}
      >
        Start Conversation
      </button>
    </div>
  );
};

export default ConvoButton;
