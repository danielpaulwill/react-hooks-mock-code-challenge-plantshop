import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsList, plantSearch }) {

  const plantCards = plantsList.map((plant) => (plant.name.toLowerCase().includes(plantSearch.toLowerCase())) ? <PlantCard key={plant.id} plant={plant} /> : null);

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
