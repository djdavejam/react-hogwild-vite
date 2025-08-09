// src/App.jsx
import React, { useState } from "react";
import Nav from "./Nav";
import hogsData from "../porkers_data";
import HogList from "./HogList";
import HogForm from "./HogForm";
import Filter from "./Filter";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState("none");
  const [hiddenHogs, setHiddenHogs] = useState([]);

  const handleAddHog = (newHog) => {
    setHogs([...hogs, newHog]);
  };

  const handleHideHog = (hogName) => {
    setHiddenHogs([...hiddenHogs, hogName]);
  };

  let displayedHogs = hogs.filter((hog) => !hiddenHogs.includes(hog.name));
  if (showGreased) {
    displayedHogs = displayedHogs.filter((hog) => hog.greased);
  }
  if (sortBy === "name") {
    displayedHogs = [...displayedHogs].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "weight") {
    displayedHogs = [...displayedHogs].sort((a, b) => a.weight - b.weight);
  }

  return (
    <div className="App">
      <Nav />
      <Filter
        showGreased={showGreased}
        onChangeGreased={setShowGreased}
        sortBy={sortBy}
        onChangeSort={setSortBy}
      />
      <HogForm onAddHog={handleAddHog} />
      <HogList hogs={displayedHogs} onHideHog={handleHideHog} />
    </div>
  );
}

export default App;