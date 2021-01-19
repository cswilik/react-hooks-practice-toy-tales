import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(r => r.json())
    .then(toyData => setToys(toyData))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  
  function handleNewToy(newToyData) {
    const updatedToys = [newToyData, ...toys]
    setToys(updatedToys)
  }

  function handleDelete(deletedToyId) {
    const newToyArr = toys.filter(toy => {
      return (toy.id !== deletedToyId)
      
    })
    setToys(newToyArr)
  }

  // function handleLikes(updatedLikesToy) {

  //   const updatedToy = [...toys, updatedLikesToy]
  //   setToys(updatedToy)
  // }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddNewToy={handleNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys= {toys} onDeleteOfToy={handleDelete} />
    </>
  );
}

export default App;
