import React, { Fragment } from "react";
import "./Die.css";

function Die(props) {
  return (
    <Fragment>
      <div className="die">{props.value}</div>
    </Fragment>
  );
}

export default Die;
