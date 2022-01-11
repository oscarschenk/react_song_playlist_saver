import React from "react";

function SongList(props) {
  let displayedSongs = props.songs;
  props.filteredSongs.length > 0
    ? (displayedSongs = props.filteredSongs)
    : (displayedSongs = props.songs);
  const songsMapped = displayedSongs.map((song, index) => {
    return (
      <div key={index} className="song-list-row">
        <div className="song-list-column">{song.title}</div>
        <div className="song-list-column">{song.artist}</div>
        <div className="song-list-column">{song.genre}</div>
        <div className="song-list-column">{song.rating}</div>
        <div className="song-list-delete-button">
          <button
            type="button"
            onClick={() => props.removeSongFunc(song.title)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="song-header-row">
        <div className="song-header-column">Song</div>
        <div className="song-header-column">Artist</div>
        <div className="song-header-column">Genre</div>
        <div className="song-header-column">Rating</div>
      </div>
      {songsMapped}
    </div>
  );
}

export default SongList;
