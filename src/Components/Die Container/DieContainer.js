import React, { Fragment } from "react";
import "./DieContainer.css";
import Die from "../Die/Die";
function DieContainer() {
  return (
    <Fragment>
      <div className="die_container">
        <Die />
      </div>
    </Fragment>
  );
}

export default DieContainer;
