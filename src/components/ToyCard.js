import React, {useState} from "react";

function ToyCard({toy, onDeleteOfToy }) {
 const [ likes, setLikes] = useState(toy.likes)


  
 function handleDelete() {
   const id = toy.id
    fetch(`http://localhost:3001/toys/${id}`, {
    method: 'DELETE',
    })
    .then(res => res.json()) 
    .then(res => onDeleteOfToy(id))
  }

function handleUpdateLikes() {
  const id = toy.id
  fetch(`http://localhost:3001/toys/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ likes: likes + 1}),
  })
    .then(res => res.json()) 
    .then(data => {
      const updatedLikes = data.likes
      return setLikes(updatedLikes)
    })
  }

  
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleUpdateLikes}>Like {"<3"}</button>
      <button className="del-btn" id={toy.id} onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
