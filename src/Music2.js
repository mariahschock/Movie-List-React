import React from 'react';
import Sheesh from './Sheesh.mp3';

export default function Music2() {
  const audio = new Audio(
    Sheesh, { interrupt: true });
  const start = () => {
    audio.play();
  };
  const stop = () => {
    audio.pause();
  };
  
  return (
    <div className="sheesh">
      <button onClick={start}>🎵 Click Me 🎵</button>
      <button onClick={stop}>Pause</button>
    </div>
  );
}

