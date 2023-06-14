import React, { useState } from "react";
import Top from "../component/Top";
import Bottom from "../component/Bottom";
import allsong from "../services/Data";
import "../css/all.css";

const Audioplayer = () => {
  const [currentSong, setCurrentSong] = useState(allsong[0]);

  const playSong = (song) => {
    setCurrentSong(song);
  };

  const playNextSong = () => {
    const currentIndex = allsong.findIndex((song) => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % allsong.length;
    setCurrentSong(allsong[nextIndex]);
  };

  const playPreviousSong = () => {
    const currentIndex = allsong.findIndex((song) => song.id === currentSong.id);
    const previousIndex = (currentIndex - 1 + allsong.length) % allsong.length;
    setCurrentSong(allsong[previousIndex]);
  };

  const playRandomSong = () => {
    const randomIndex = Math.floor(Math.random() * allsong.length);
    setCurrentSong(allsong[randomIndex]);
  };

  return (
    <div className="parent">
      <Top
        currentSong={currentSong}
        playNextSong={playNextSong}
        playPreviousSong={playPreviousSong}
        playRandomSong={playRandomSong}
      />
      <Bottom allsongs={allsong} playSong={playSong} />
    </div>
  );
};

export default Audioplayer;
