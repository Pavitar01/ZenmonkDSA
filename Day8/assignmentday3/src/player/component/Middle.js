import React, { useState } from "react";
import Button from "./Button";
import allsong from "../services/Data";

const Middle = ({ value }) => {
  const [ispause, setpause] = useState(true);
  const [button, setbutton] = [
    {
      btn: "glyphicon glyphicon-step-backward",
      btn2: "glyphicon glyphicon-play",
      btn3: "glyphicon glyphicon-step-forward",
      btn4: "glyphicon glyphicon-pause",
    },
  ];


  function play() {
    const audio = new Audio(value.src);
    audio.play();
    setpause(false);
  }
  function pause() {
    setpause(true);
  }
  function prev() {}

  const next = (prev) => {
    const nextIndex = prev + 1;
    if (nextIndex < allsong.length) {
      // Play the next song
      console.log('Playing next song:', value[nextIndex].title);
      return nextIndex;
    } else {
      // Reached the end of the list, loop back to the first song
      console.log('Reached the end of the list, looping back to the first song');
      return 0;
    }
  };

  return (
    <div className="middle">
      <div className="length"></div>
      <div className="buttons">
        <button className="btn">
          <span class={button.btn} onClick={prev}></span>
        </button>
        {ispause ? (
          <button className="btn">
            <span
              class={button.btn2}
              onClick={() => {
                play();
              }}
            ></span>
          </button>
        ) : (
          <button className="btn">
            <span
              class={button.btn4}
              onClick={() => {
                pause();
              }}
            ></span>
          </button>
        )}
        <button className="btn">
          <span class={button.btn3} onClick={()=>{next(value.id)}}></span>
        </button>
      </div>
    </div>
  );
};

export default Middle;
