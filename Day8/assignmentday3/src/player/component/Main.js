import React, { useState } from 'react';

const MusicPlayer = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: 'Song 1', url: 'song1.mp3' },
    { id: 2, title: 'Song 2', url: 'song2.mp3' },
    { id: 3, title: 'Song 3', url: 'song3.mp3' },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const playNextSong = () => {
    setCurrentSongIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex < songs.length) {
        // Play the next song
        console.log('Playing next song:', songs[nextIndex].title);
        return nextIndex;
      } else {
        // Reached the end of the list, loop back to the first song
        console.log('Reached the end of the list, looping back to the first song');
        return 0;
      }
    });
  };

  return (
    <div>
      <h2>Music Player</h2>
      <p>Currently playing: {songs[currentSongIndex].title}</p>
      <button onClick={playNextSong}>Next Song</button>
    </div>
  );
};

export default MusicPlayer;