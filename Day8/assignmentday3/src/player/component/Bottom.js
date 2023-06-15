import React from "react";

const Bottom = ({ allsongs, playSong }) => {
  const play = (song) => {
    playSong(song);
  };

  return (
    <div className="bottom">
      {allsongs.map((song) => (
        <div className="songs" key={song.id} onClick={() => play(song)}>
          <img src={song.imgurl} className="icon" alt="Song Cover" />
          <p className="title">{song.title}</p>
          <p className="timer">{song.timer}</p>
        </div>
      ))}
    </div>
  );
};

export default Bottom;
