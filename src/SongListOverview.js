import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import SongList from "./Components/SongList";
import FilterControls from "./Components/FilterControls";

function SongListOverview() {
  const [listOfSongs, setSongs] = useState([
    {
      title: "Morgen",
      artist: "Marco",
      genre: "Metal",
      rating: "1",
    },
    {
      title: "Appel",
      artist: "Borsato",
      genre: "Pop",
      rating: "3",
    },
    {
      title: "Banaan",
      artist: "Mr Polska",
      genre: "Funk",
      rating: "4",
    },
    {
      title: "Toekomst",
      artist: "Ons Guus",
      genre: "Rock",
      rating: "2",
    },
    {
      title: "Poepoe",
      artist: "Roelvink",
      genre: "Soul",
      rating: "5",
    },
    {
      title: "Dat Ene Nummer",
      artist: "Joling",
      genre: "Punk",
      rating: "4",
    },
  ]);

  const [filteredSongs, setFilteredSongs] = useState([]);

  const addSongs = (newSong) => {
    setSongs((prevSongs) => {
      return [...prevSongs, newSong];
    });
  };

  function removeSong(songTitle) {
    setSongs((prevSongs) =>
      prevSongs.filter((song) => song.title !== songTitle)
    );
  }

  return (
    <>
      <Navbar addSongsFunc={addSongs} />

      <h2>Ik ben de songlist</h2>

      <div id="filter-controls">
        <FilterControls
          setFilteredSongsFunc={setFilteredSongs}
          setSongsFunc={setSongs}
          songs={listOfSongs}
        />
      </div>

      <div id="song-list-container">
        <SongList
          songs={listOfSongs}
          filteredSongs={filteredSongs}
          removeSongFunc={removeSong}
        />
      </div>
    </>
  );
}

export default SongListOverview;
