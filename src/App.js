import './App.css';
import { useState, useEffect } from 'react';
import Form from './Form';

function App() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [color, setColor] = useState('');

  return (
    <div className="App">
      <Form 
        // handleSubmit={handleSubmit}
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
