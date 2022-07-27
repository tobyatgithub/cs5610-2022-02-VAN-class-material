import { useState } from "react";

function App() {
  const [name, setName] = useState("Cristian");
  const [counter, setCounter] = useState(0);
  const [currentColor, setCurrentColor] = useState("red");

  return (
    <div>
      <p className={currentColor}>My name is {name}</p>
      <button
        onClick={() => {
          setName("Jose");
        }}
      >
        Change Name
      </button>
      <p className={currentColor}>The value of counter is {counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
          // setCounter((currentCounter) => currentCounter + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCurrentColor("blue");
        }}
      >
        Change to Blue
      </button>
      <button
        onClick={() => {
          setCurrentColor("red");
        }}
      >
        Change to Red
      </button>
      <button
        onClick={() => {
          setCurrentColor("yellow");
        }}
      >
        Change to Yellow
      </button>
    </div>
  );
}

export default App;
