import React, { useState } from "react";

function FilterControls(props) {
  const [filterNameArtist, setFilterNameArtist] = useState("");
  const [filterGenre, setFilterGenre] = useState("");
  const [filterRating, setFilterRating] = useState("");

  function handleChange(event) {
    const { value, name } = event.target;
    switch (name) {
      case "filterNameArtist":
        return setFilterNameArtist(value);
      case "filterGenre":
        return setFilterGenre(value);
      case "filterRating":
        return setFilterRating(value);
      default:
        return null;
    }
  }

  function submitNameArtistFilter(event) {
    event.preventDefault();
    const arrayCopy = [...props.songs];
    switch (filterNameArtist) {
      case "titleAZ":
        return props.setSongsFunc(
          arrayCopy.sort((a, b) =>
            a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
          )
        );
      case "titleZA":
        return props.setSongsFunc(
          arrayCopy.sort((a, b) =>
            a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
          )
        );
      case "artistAZ":
        return props.setSongsFunc(
          arrayCopy.sort((a, b) =>
            a.artist.toLowerCase() > b.artist.toLowerCase() ? 1 : -1
          )
        );
      case "artistZA":
        return props.setSongsFunc(
          arrayCopy.sort((a, b) =>
            a.artist.toLowerCase() < b.artist.toLowerCase() ? 1 : -1
          )
        );
      default:
        return arrayCopy;
    }
  }

  function submitGenreFilter(event) {
    event.preventDefault();
    const filteredSongList = props.songs.filter((songs) => {
      return songs.genre === filterGenre;
    });
    return props.setFilteredSongsFunc(filteredSongList);
  }

  function submitRatingFilter(event) {
    event.preventDefault();
    const filteredSongList = props.songs.filter((songs) => {
      return songs.rating === filterRating;
    });
    return props.setFilteredSongsFunc(filteredSongList);
  }

  return (
    <div id="filter-controls-row">
      <form onSubmit={submitNameArtistFilter}>
        <select
          type="text"
          name="filterNameArtist"
          value={filterNameArtist}
          onChange={handleChange}
        >
          <option value="Sort By Name or Artist">Sort By Name or Artist</option>
          <option value="titleAZ">Name A-Z</option>
          <option value="titleZA">Name Z-A</option>
          <option value="artistAZ">Artist A-Z</option>
          <option value="artistZA">Artist Z-A</option>
        </select>

        <button type="submit">Sort</button>
      </form>

      <form onSubmit={submitGenreFilter}>
        <select
          type="text"
          name="filterGenre"
          value={filterGenre}
          onChange={handleChange}
        >
          <option value="Filter By Genre">Filter By Genre</option>
          <option value="Metal">Metal</option>
          <option value="Pop">Pop</option>
          <option value="Punk">Punk</option>
          <option value="Soul">Soul</option>
          <option value="Rock">Rock</option>
          <option value="Funk">Funk</option>
          <option value="House">House</option>
          <option value="Disco">Disco</option>
        </select>

        <button type="submit">Filter</button>
      </form>

      <form onSubmit={submitRatingFilter}>
        <select
          type="text"
          name="filterRating"
          value={filterRating}
          onChange={handleChange}
        >
          <option value="Filter By Rating">Filter By Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button type="submit">Filter</button>
      </form>
    </div>
  );
}

export default FilterControls;
