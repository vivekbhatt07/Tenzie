import React from "react";
import "./Modal.css";
function Modal() {
  return (
    <div className="modal">
      <p className="modal_description">Enter Your Name to Set your Score</p>
      <input placeholder="Enter Your Name" />
      <div className="modal_btn_wrap">
        <div className="modal_close_btn_wrap">
          <button className="modal_close_btn btn">Cancel</button>
        </div>
        <div className="modal_enter_btn_wrap">
          <button className="modal_enter_btn btn" type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
