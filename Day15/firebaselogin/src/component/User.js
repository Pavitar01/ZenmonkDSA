import React, { useEffect, useState } from "react";
import { data } from "../DummyData/data";
import Feild from "./Feild";
import {
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { app } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { AddReceiver, SetRoom } from "../Redux/Slice/UserSlice";

const User = () => {
  const currentReceiver = useSelector((state) => {
    return state.userData.Receiver;
  });

  const d = useSelector((state) => {
    return state.userData.user;
  });
  const db = getFirestore(app);
  const [user, setUsers] = useState([]);

  const q = query(collection(db, "User"), orderBy("createdAt", "asc"));

  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState();
  const setActive = (i) => {
    setIsActive(i);
  };
  const s = useSelector((state) => {
    return state.userData.RoomId;
  });
  useEffect(() => {
    const onsub = onSnapshot(q, (snapshot) => {
      setUsers(
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

  return (
    <div className="mainfeild">
      {user.map((i, index) => {
        return (
          <div
            onClick={() => {
              setActive(index);
              dispatch(SetRoom({ sid: d.uid, rid: i.uid }));
            }}
            style={{ cursor: "pointer" }}
            key={index}
          >
            {i.uid != d.uid ? (
              <Feild
                color={isActive == index ? "#f23f79" : ""}
                width={isActive == index ? "800px" : ""}
                padding={isActive == index ? "10px" : ""}
                // transform={isActive == index ? "scale(2, 0.5);" : ""}
                name={i.name}
                url={i.url}
                time={isActive == index ? "Now" : i.time}
                text={"hello"}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default User;
