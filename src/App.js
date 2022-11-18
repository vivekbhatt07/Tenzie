import React, { useState } from "react";
import "./App.css";
import DieContainer from "./Components/Die Container/DieContainer";
import { nanoid } from "nanoid";

function App() {
  // Generates Random Number Between 1-6 :
  function randomNumberGenerator() {
    return Math.ceil(Math.random() * 6);
  }

  // Generates an array with 10 Objects{id, value, isHold}:
  const diceList = [];

  function diceListGenerator() {
    for (let i = 0; i < 10; i++) {
      diceList.push({
        id: nanoid(),
        value: randomNumberGenerator(),
        isHold: false,
      });
    }
    return diceList;
  }

  // Created State to hold the Generated Dice List Array:
  const [diceItemList, setDiceItemList] = useState(diceListGenerator());

  return (
    <div className="App">
      <DieContainer list={diceItemList} />
    </div>
  );
}

export default App;
