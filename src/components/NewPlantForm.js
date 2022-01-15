import React, { useState } from "react";

function NewPlantForm({ onNewPlant }) {
  const [plantNameInput, setPlantNameInput] = useState("")
  const [imageUrlInput, setImageUrlInput] = useState("")
  const [priceInput, setPriceInput] = useState(0)

  function handlePlantNameInput(e) {
    setPlantNameInput(e.target.value)
  }

  function handleImageUrlInput(e) {
    setImageUrlInput(e.target.value)
  }

  function handlePriceInput(e) {
    const price = Number(e.target.value)
    setPriceInput(price)
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
  },
      body: JSON.stringify({
        "name": plantNameInput,
        "image": imageUrlInput,
        "price": priceInput  
      }),
})
      .then(res => res.json())
      .then(data => onNewPlant(data)
)}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder="Plant name" onChange={handlePlantNameInput} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleImageUrlInput} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handlePriceInput} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
