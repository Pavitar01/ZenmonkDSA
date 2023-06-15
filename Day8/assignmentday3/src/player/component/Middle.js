import React, { useState, useEffect, useRef } from "react";

const Middle = ({ currentSong, playNextSong, playPreviousSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrev = () => {
    playPreviousSong();
    setIsPlaying(true);
  };

  const handleNext = () => {
    playNextSong();
    setIsPlaying(true);
  };

  return (
    <div className="middle">
      <div className="length"></div>
      <div className="buttons">
        <button className="btn" onClick={handlePrev}>
          <span className="glyphicon glyphicon-step-backward"></span>
        </button>
        {isPlaying ? (
          <button className="btn" onClick={togglePlay}>
            <span className="glyphicon glyphicon-pause"></span>
          </button>
        ) : (
          <button className="btn" onClick={togglePlay}>
            <span className="glyphicon glyphicon-play"></span>
          </button>
        )}
        <button className="btn" onClick={handleNext}>
          <span className="glyphicon glyphicon-step-forward"></span>
        </button>
      </div>
      <audio ref={audioRef} src={currentSong.src}></audio>
    </div>
  );
};

export default Middle;
