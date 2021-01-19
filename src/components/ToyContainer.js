import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteOfToy }) {

  console.log(toys)
  const toyElements= toys.map(toy => {
    return <ToyCard key={toy.id} toy={toy} onDeleteOfToy={onDeleteOfToy} />
  })
  return (
    <div id="toy-collection">{toyElements}</div>
  );
}

export default ToyContainer;
