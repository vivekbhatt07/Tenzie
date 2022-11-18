import React from "react";
import "./DieContainer.css";
import Die from "../Die/Die";
function DieContainer(props) {
  return (
    <div className="die_container">
      {props?.list?.map((die) => {
        return (
          <Die
            key={die.id}
            value={die.value}
            isHold={die.isHold}
            holdId={die.id}
            holdValue={props.holdDieValue}
          />
        );
      })}
    </div>
  );
}

export default DieContainer;
