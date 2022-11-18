import React from "react";
import "./RollBtn.css";
function RollBtn(props) {
  return (
    <button className="roll_btn btn" onClick={props.roll}>
      Roll 🎲
    </button>
  );
}

export default RollBtn;
