import React, { useState, useEffect } from "react";
import "./App.css";
import DieContainer from "./Components/Die Container/DieContainer";
import RollBtn from "./Components/RollButton/RollBtn";
import NewGameBtn from "./Components/NewGameButton/NewGameBtn";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import diceLogo from "./Assets/diceLogo.png";
import diceLightOne from "./Assets/diceLight/diceLightOne.svg";
import diceLightTwo from "./Assets/diceLight/diceLightTwo.svg";
import diceLightThree from "./Assets/diceLight/diceLightThree.svg";
import diceLightFour from "./Assets/diceLight/diceLightFour.svg";
import diceLightFive from "./Assets/diceLight/diceLightFive.svg";
import diceLightSix from "./Assets/diceLight/diceLightSix.svg";
import Modal from "./Components/Modal/Modal";
import Overlay from "./Components/Overlay/Overlay";
function App() {
  // Generates Random Number Between 1-6 :
  function randomNumberGenerator() {
    return Math.ceil(Math.random() * 6);
  }

  // Generates an array with 10 Objects{id, value, isHold}:
  const diceList = [];
  const diceImg = [
    { id: 1, dieImg: diceLightOne },
    { id: 2, dieImg: diceLightTwo },
    { id: 3, dieImg: diceLightThree },
    { id: 4, dieImg: diceLightFour },
    { id: 5, dieImg: diceLightFive },
    { id: 6, dieImg: diceLightSix },
  ];
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
  function handleBtn() {
    if (!tenzie) {
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
    } else {
      setTenzie(false);
      setDiceItemList((prevDiceListItem) => {
        return prevDiceListItem.map((die) => {
          return {
            id: nanoid(),
            value: randomNumberGenerator(),
            isHold: false,
          };
        });
      });
    }
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
      {/* {tenzie && <Overlay />} */}
      {/* {tenzie && <Modal isTenzi={tenzie} />} */}
      <div className="app_head">
        <h1>Tenzies</h1>
        <img className="app_logo" src={diceLogo} alt="dice-logo" />
      </div>
      <p className="app_description">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      {tenzie && <Confetti />}
      <DieContainer
        list={diceItemList}
        holdDieValue={handleHoldDieValue}
        diceImgList={diceImg}
      />
      {tenzie ? (
        <NewGameBtn newGame={handleBtn} />
      ) : (
        <RollBtn roll={handleBtn} />
      )}
    </div>
  );
}

export default App;
