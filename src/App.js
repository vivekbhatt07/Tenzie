import React, { useState, useEffect } from "react";
import "./App.css";
import DieContainer from "./Components/Die Container/DieContainer";
import RollBtn from "./Components/RollButton/RollBtn";
import NewGameBtn from "./Components/NewGameButton/NewGameBtn";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

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

  // Created State to hold Boolean to decide whether Win/Lose:
  const [tenzie, setTenzie] = useState(false);

  useEffect(() => {
    const isAllHold = diceItemList.every((die) => {
      return die.isHold;
    });

    const dieOneValue = diceItemList[0].value;
    const isAllEqual = diceItemList.every((die) => {
      return dieOneValue === die.value;
    });

    if (isAllHold && isAllEqual) {
      setTenzie(true);
    } else {
      setTenzie(false);
    }
  }, [diceItemList]);

  return (
    <div className="App">
      {tenzie && <Confetti />}
      <DieContainer list={diceItemList} holdDieValue={handleHoldDieValue} />
      {tenzie ? <NewGameBtn /> : <RollBtn roll={handleRollBtn} />}
    </div>
  );
}

export default App;
