import "./App.css";
import { useState } from "react";
import Pet from "./Pet";
import { Picsum } from "picsum-photos";

const petsInitialState = [
  {
    id: 1,
    name: "Lukas",
    location: "Vancouver",
    age: 3,
    image: Picsum.url(),
    selected: false,
  },
  {
    id: 2,
    name: "Starfish",
    location: "Surrey",
    age: 5,
    image: Picsum.url(),
    selected: false,
  },
  {
    id: 3,
    name: "Garlfield",
    location: "Vancouver",
    age: 3,
    image: Picsum.url(),
    selected: false,
  },
  {
    id: 4,
    name: "Robin",
    location: "Richmond",
    age: 8,
    image: Picsum.url(),
    selected: false,
  },
];

function App() {
  const [pets, setPets] = useState(petsInitialState);

  function adoptPet(id) {
    const clonedPets = [...pets];
    const selectedPet = clonedPets.find((p) => p.id === id);
    selectedPet.selected = !selectedPet.selected;

    setPets(clonedPets);
  }

  return (
    <div className="App">
      <h1>Adop my Pets</h1>
      <div className="pets">
        {pets.map((pet) => (
          <Pet
            key={pet.id}
            id={pet.id}
            name={pet.name}
            age={pet.age}
            city={pet.location}
            image={pet.image}
            selected={pet.selected}
            adoptPet={adoptPet}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
