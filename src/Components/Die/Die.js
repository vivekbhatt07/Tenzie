import React, { Fragment } from "react";
import "./Die.css";

function Die(props) {
  return (
    <Fragment>
      <div
        className="die"
        onClick={() => props.holdValue(props.holdId)}
        style={{
          backgroundColor: props.isHold ? "#834d9b" : "#fff",
          border: props.isHold ? "4px solid #834d9b" : "",
        }}
      >
        {props.diceList.map((dieImgObj) => {
          if (dieImgObj.id === props.value) {
            return <img src={dieImgObj.dieImg} alt="die-img" />;
          }
        })}
      </div>
    </Fragment>
  );
}

export default Die;
