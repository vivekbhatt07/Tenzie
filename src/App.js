import React, { useState } from "react";
import "./App.css";
import DieContainer from "./Components/Die Container/DieContainer";
import RollBtn from "./Components/RollButton/RollBtn";
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

  // Handle Roll Button:
  function handleRollBtn() {
    setDiceItemList((prevDiceItemList) => {
      return prevDiceItemList.map((die) => {
        if (die.isHold) {
          return die;
        } else {
          return {
            id: nanoid(),
            value: randomNumberGenerator(),
            isHold: die.isHold,
          };
        }
      });
    });
  }

  // Hold Dice Number:
  function handleHoldDieValue(holdDieId) {
    setDiceItemList((prevDiceItemList) => {
      return prevDiceItemList.map((die) => {
        if (die.id === holdDieId) {
          return { ...die, isHold: !die.isHold };
        } else {
          return die;
        }
      });
    });
  }

  return (
    <div className="App">
      <DieContainer list={diceItemList} holdDieValue={handleHoldDieValue} />
      <RollBtn roll={handleRollBtn} />
    </div>
  );
}

export default App;
