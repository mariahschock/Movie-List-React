import React from 'react';
import Sheesh from './Sheesh.mp3';

export default function Music2() {
  const audio = new Audio(
    Sheesh, { interrupt: true });
  const start = () => {
    audio.play();
  };
  return (
    <div>
      <button onClick={start}>🎵 Click Me 🎵</button>
    </div>
  );
}

