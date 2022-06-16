import './App.css';
import { useState, useEffect } from 'react';
import Form from './Form';

function App() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [color, setColor] = useState('lemonchiffon');
  const [allSongs, setAllSongs] = useState([
    {
      title: 'All I Want Is to Be With You',
      artist: 'John Mayer',
      color: 'lightcyan',
    }
  ]);
  // const [visibleSongs, setVisibleSongs] = useState(allSongs);


  function handleSubmit(e) {
    e.preventDefault();

    const song = {
      title: title,
      artist: artist,
      color: color,
    };

    const updatedSongs = [...allSongs, song];
    setAllSongs(updatedSongs);
  }

  return (
    <div className="App">
      <Form 
        handleSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
        artist={artist}
        setArtist={setArtist}
        color={color}
        setColor={setColor}
      />
    </div>
  );
}

export default App;
