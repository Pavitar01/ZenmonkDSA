import React, { useState, useEffect } from "react";
import Middle from "./Middle";
import allsong from "../services/Data";

const Top = ({ currentSong, playNextSong, playPreviousSong, playRandomSong }) => {
  const [songTitle, setSongTitle] = useState("");
  const [songArtist, setSongArtist] = useState("");
  const [songImage, setSongImage] = useState("");

  useEffect(() => {
    if (currentSong) {
      setSongTitle(currentSong.title);
      setSongArtist(currentSong.artist);
      setSongImage(currentSong.imgurl);
    }
  }, [currentSong]);

  const handleNextSong = () => {
    playNextSong();
  };

  const handlePreviousSong = () => {
    playPreviousSong();
  };

  const handleRandomSong = () => {
    playRandomSong();
  };

  return (
    <div className="top">
      <div className="card">
        <img src={songImage} className="songimg" alt="Song Cover" />
        <h1 className="songname">
          {songTitle} &nbsp;--<span className="artist">{songArtist}</span>
        </h1>
      </div>
      <Middle
        currentSong={currentSong}
        playNextSong={handleNextSong}
        playPreviousSong={handlePreviousSong}
      />
      <button onClick={handleRandomSong} className="random">Random</button>
    </div>
  );
};

export default Top;
