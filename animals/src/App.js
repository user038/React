import { useState } from "react";
import Animal from "./Animal";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimal] = useState([]);

  const handleClick = () => {
    setAnimal([...animals, getRandomAnimal()]);
  };
  const renderedAnimals = animals.map((animal, index) => {
    return <Animal type={animal} key={index} />;
  });

  return (
    <div>
      <button onClick={handleClick}>Add Amimal</button>
      <div>{renderedAnimals}</div>
    </div>
  );
}

export default App;
