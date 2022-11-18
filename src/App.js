import React from "react";
import "./App.css";
import DieContainer from "./Components/Die Container/DieContainer";
function App() {
  // Generates Random Number Between 1-6 :
  function randomNumberGenerator() {
    return Math.ceil(Math.random() * 6);
  }
  randomNumberGenerator();

  // Generates an array with 10 Random Numbers:
  const diceNumList = [];

  function diceNumListGenerator() {
    for (let i = 0; i < 10; i++) {
      diceNumList.push({
        id: "1",
        value: randomNumberGenerator(),
        isHold: false,
      });
    }
    console.log(diceNumList);
  }

  diceNumListGenerator();

  return (
    <div className="App">
      <DieContainer />
    </div>
  );
}

export default App;
