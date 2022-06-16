import React from 'react';

export default function Form({ handleSubmit, title, setTitle, artist, setArtist, color, setColor }) {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>
        title
          <input value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label>
        artist
          <input value={artist} onChange={e => setArtist(e.target.value)} />
        </label>
        <label>
        color 
          <select value={color} onChange={e => setColor(e.target.value)} >
            <option value="honeydew">Green</option>
            <option value="lavender">Purple</option>
            <option value="lemonchiffon">Yellow</option>
            <option value="lightcyan">Blue</option>
          </select>
        </label>
        <button>Add to Playlist</button>
      </form>
    </div>
  );
}
