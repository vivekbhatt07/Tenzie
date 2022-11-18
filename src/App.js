import React from "react";
import "./App.css";
import DieContainer from "./Components/Die Container/DieContainer";
function App() {
  // Generates Random Number Between 1-6 :
  function randomNumberGenerator() {
    return Math.ceil(Math.random() * 6);
  }
  randomNumberGenerator();

  // Loop that generates an array with 10 Random Numbers:
  for (let i = 0; i < 10; i++) {}

  return (
    <div className="App">
      <DieContainer />
    </div>
  );
}

export default App;
