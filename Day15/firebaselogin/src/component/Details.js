import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { app } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
const Details = () => {
  const [img, setImg] = useState(
    "https://s3.amazonaws.com/thinkific-import/284749/3JzokDFKQ66wIF2stcSw_Alec_cuence_reviews_tiktok_workshops_png.png"
  );

  const data = useSelector((state) => {
    return state.userData.user;
  });
  const auth = getAuth(app);
  return (
    <div className="details">
      <div className="outerdiv">
        <div className="userDetails">
          <div className="img">
            {data?.photoUrl ? (
              <img src={img} alt="no image" />
            ) : (
              <img src={data?.photoURL} alt="no image" />
            )}
          </div>
          <h1>{data?.displayName}</h1>
          <p>{data?.email}</p>
        </div>
        <div className="logout">
          <i
            class="fa-solid fa-right-from-bracket"
            style={{
              fontSize: "40px",
              float: "right",
              color: "gray",
              cursor: "pointer",
            }}
            onClick={() => {
              if (data && data.uid) {
                signOut(auth);
              }
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Details;
