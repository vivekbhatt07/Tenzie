import React, { Fragment } from "react";
import "./DieContainer.css";
import Die from "../Die/Die";
function DieContainer(props) {
  // console.log(props.list.map(die => {
  //   return <Die />
  // }));
  return (
    <Fragment>
      <div className="die_container">
        {props.list.map((die) => {
          return <Die key={die.id} value={die.value} isHold={die.isHold} />;
        })}
      </div>
    </Fragment>
  );
}

export default DieContainer;
