import React from 'react';
import './App.css';
import Queen from './Queen.mp3';

export default function Music() {
  const audio = new Audio(
    Queen, { interrupt: true });
  const start = () => {
    audio.play();
  };
  return (
    <div>
      <button onClick={start}>🎵 Click Me 🎵</button>
    </div>
  );
}       