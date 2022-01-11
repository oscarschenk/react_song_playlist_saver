import React from "react";
import SongListOverview from "./SongListOverview";
import "./style.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Oscar's Little Liedjeslijst</h1>
        <SongListOverview />
      </header>
    </div>
  );
}

export default App;
