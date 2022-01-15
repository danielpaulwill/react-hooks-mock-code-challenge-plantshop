import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantsList, setPlantsList] = useState([])
  const [plantSearch, setPlantSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(data => setPlantsList(data));  
  }, [])

  function handleOnNewPlant(newPlant) {
    setPlantsList([...plantsList, newPlant])
  }

  function handlePlantSearch(e) {
    setPlantSearch(e.target.value)
  }

  return (
    <main>
      <NewPlantForm onNewPlant={handleOnNewPlant} />
      <Search handleSearch={handlePlantSearch} />
      <PlantList plantsList={plantsList} plantSearch={plantSearch} />
    </main>
  );
}

export default PlantPage;
