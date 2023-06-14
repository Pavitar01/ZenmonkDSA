import React, { useState, useEffect } from 'react';
import songsData from './songs.json';
import all from '../services/Data';
const MusicPlayer = () => {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    // Fetch songs data from JSON file or API
    setSongs(all);
  }, []);

  const currentSong = songs[currentSongIndex];

  const handlePrevSong = () => {
    setCurrentSongIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? songs.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  const handleNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  return (
    <div>
      <h1>Music Player</h1>
      <div>
        <h2>{currentSong.}</h2>
        <h3>{currentSong.artist}</h3>
        <audio controls src={currentSong.url} />
      </div>
      <div>
        <button onClick={handlePrevSong}>Previous</button>
        <button onClick={handleNextSong}>Next</button>
      </div>
    </div>
  );
};

export default MusicPlayer;