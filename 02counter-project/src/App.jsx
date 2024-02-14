import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  //let counter = 5;
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button id="Increase" onClick={addValue}>
        Increase Value
      </button>
      <br />
      <button id="Decrease" onClick={removeValue}>
        Decrease Value
      </button>
    </>
  );
}

export default App;
