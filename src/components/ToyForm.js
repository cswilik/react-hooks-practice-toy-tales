import React, { useState } from "react";

function ToyForm({ onAddNewToy }) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")

 
  const formData = {
    name: name ,
    image: image,
    likes: 0
  }

  function handleNewToy(evt) {
    evt.preventDefault()
    fetch('http://localhost:3001/toys', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(r => r.json())
    .then(newToy => onAddNewToy(newToy))
  
  }
  
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleNewToy}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          value = {name}
          className="input-text"
          onChange={(evt) => setName(evt.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          value={image}
          onChange={(evt) => setImage(evt.target.value)}
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
