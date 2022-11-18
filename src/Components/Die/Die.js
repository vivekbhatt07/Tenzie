import React, { Fragment } from "react";
import "./Die.css";

function Die(props) {
  return (
    <Fragment>
      <div
        className="die"
        onClick={() => props.holdValue(props.holdId)}
        style={{
          backgroundColor: props.isHold ? "#434343" : "#fff",
          color: props.isHold ? "#fff" : "#000",
        }}
      >
        {props.value}
      </div>
    </Fragment>
  );
}

export default Die;
