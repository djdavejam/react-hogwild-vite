// src/Filter.jsx
import React from "react";

function Filter({ showGreased, onChangeGreased, sortBy, onChangeSort }) {
  return (
    <div>
      <label htmlFor="greased-filter">Greased Pigs Only?</label>
      <input
        type="checkbox"
        id="greased-filter"
        checked={showGreased}
        onChange={(e) => onChangeGreased(e.target.checked)}
      />
      <label htmlFor="sort-select">Sort by:</label>
      <select id="sort-select" value={sortBy} onChange={(e) => onChangeSort(e.target.value)}>
        <option value="none">Sort by</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
}

export default Filter;