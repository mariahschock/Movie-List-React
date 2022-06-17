import React from 'react';
import './App.css';
import John from './John.mp3';

export default function Music() {
  const audio = new Audio(
    John, { interrupt: true });
  const start = () => {
    audio.play();
  };
  return (
    <div>
      <button onClick={start}>🎵 Click Me 🎵</button>
    </div>
  );
}
