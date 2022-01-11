import React, { useState } from "react";

function Navbar(props) {
  const [songTitle, setSongTitle] = useState("");
  const [songArtist, setSongArtist] = useState("");
  const [songGenre, setSongGenre] = useState("");
  const [songRating, setSongRating] = useState("");

  function handleChange(event) {
    const { value, name } = event.target;
    switch (name) {
      case "songTitle":
        return setSongTitle(value);
      case "songArtist":
        return setSongArtist(value);
      case "songGenre":
        return setSongGenre(value);
      case "songRating":
        return setSongRating(value);
      default:
        return null;
    }
  }

  const submitForm = (event) => {
    event.preventDefault();
    props.addSongsFunc(songInfo);
    setSongTitle("");
    setSongArtist("");
    setSongGenre("");
    setSongRating("");
  };

  const songInfo = {
    title: songTitle,
    artist: songArtist,
    genre: songGenre,
    rating: songRating,
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="songTitle"
          placeholder="Song Title"
          value={songTitle}
          onChange={handleChange}
        />

        <input
          type="text"
          name="songArtist"
          placeholder="Song Artist"
          value={songArtist}
          onChange={handleChange}
        />

        <select
          type="text"
          name="songGenre"
          placeholder="Song Genre"
          value={songGenre}
          onChange={handleChange}
        >
          <option value="Choose A Genre">Choose A Genre</option>
          <option value="Metal">Metal</option>
          <option value="Pop">Pop</option>
          <option value="Punk">Punk</option>
          <option value="Soul">Soul</option>
          <option value="Rock">Rock</option>
          <option value="Funk">Funk</option>
          <option value="House">House</option>
          <option value="Disco">Disco</option>
        </select>

        <select
          type="text"
          name="songRating"
          placeholder="Song Rating"
          value={songRating}
          onChange={handleChange}
        >
          <option value="Rate This Song">Rate This Song</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button type="submit">Add Song</button>
      </form>
    </div>
  );
}

export default Navbar;
