import './App.css';
import { useState, useEffect } from 'react';
import Form from './Form';


function App() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [color, setColor] = useState('lemonchiffon');
  const [songFilter, setSongFilter] = useState('');
  const [allSongs, setAllSongs] = useState([
    {
      title: 'Why You No Love Me',
      artist: 'John Mayer',
      color: 'lightcyan',
    }
  ]);
  const [visibleSongs, setVisibleSongs] = useState(allSongs);

  useEffect(() => {
    setVisibleSongs(allSongs);
  }, [allSongs]);

  function handleSubmit(e) {
    e.preventDefault();

    const newSong = {
      title: title,
      artist: artist,
      color: color,
    };

    const updatedSongs = [...allSongs, newSong];
    setAllSongs(updatedSongs);

    setTitle('');
    setArtist('');
    setColor('lemonchiffon');
  }

  function handleDeleteSong(title) {
    const songIndex = allSongs.findIndex((song) => song.title === title);
    allSongs.splice(songIndex, 1);
    setVisibleSongs([...allSongs]);
  }

  function filterSongs(songFilter) {
    setSongFilter(songFilter);

    const updatedSongs = allSongs.filter(song => song.title.includes(songFilter));
    setVisibleSongs(updatedSongs);
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
      <div>
        Search Songs: 
        <input value={songFilter} onChange={e => filterSongs(e.target.value)}/>
      </div>
      <div className="song-list">
        {
          visibleSongs.map((song, i) => 
            <div onClick={() => handleDeleteSong(song.title)}
              key={song.title + i}
              className='album-art' style={{ background: song.color }}>
              <h2>{song.title}</h2> 
              <p>{song.artist}</p>
            </div>)
      
        }
      </div>
      
    </div>
  
  );
}

export default App;
