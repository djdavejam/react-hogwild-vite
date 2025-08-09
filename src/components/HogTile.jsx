// src/HogTile.jsx
import React, { useState } from "react";

function HogTile({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleHide = (e) => {
    e.stopPropagation();
    onHide(hog.name);
  };

  return (
    <div className="ui eight wide column">
      <div className="ui card" aria-label="hog card" onClick={toggleDetails}>
        <div className="image">
          <img src={hog.image} alt={`Photo of ${hog.name}`} />
        </div>
        <div className="content">
          <h3 className="header">{hog.name}</h3>
          {showDetails && (
            <div className="description">
              <p>Specialty: {hog.specialty}</p>
              <p>Weight: <span>{hog.weight}</span></p>
              <p>{hog.greased ? "Greased" : "Nongreased"}</p>
              <p>Highest Medal: <span>{hog["highest medal achieved"]}</span></p>
            </div>
          )}
        </div>
        <button onClick={handleHide}>Hide Me</button>
      </div>
    </div>
  );
}

export default HogTile;