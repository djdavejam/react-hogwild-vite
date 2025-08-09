// src/HogForm.jsx
import React, { useState } from "react";

function HogForm({ onAddHog }) {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [greased, setGreased] = useState(false);
  const [weight, setWeight] = useState("");
  const [medal, setMedal] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHog({
      name,
      specialty,
      greased,
      weight: parseFloat(weight),
      "highest medal achieved": medal,
      image,
    });
    setName("");
    setSpecialty("");
    setGreased(false);
    setWeight("");
    setMedal("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
      <label htmlFor="specialty">Specialty:</label>
      <input id="specialty" value={specialty} onChange={(e) => setSpecialty(e.target.value)} />
      <label htmlFor="greased">Greased?</label>
      <input type="checkbox" id="greased" checked={greased} onChange={(e) => setGreased(e.target.checked)} />
      <label htmlFor="weight">Weight:</label>
      <input id="weight" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      <label htmlFor="medal">Highest Medal Achieved:</label>
      <input id="medal" value={medal} onChange={(e) => setMedal(e.target.value)} />
      <label htmlFor="image">Image URL:</label>
      <input id="image" value={image} onChange={(e) => setImage(e.target.value)} />
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;