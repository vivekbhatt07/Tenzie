import React, { useState, useEffect } from "react";
import "./Modal.css";
function Modal(props) {
  const [openModal, setOpenModal] = useState(props.isTenzi);
  const [player, setPlayer] = useState({ playerName: "" });
  const [list, setList] = useState([]);
  function handleModal() {
    return setOpenModal((prevOpenModal) => {
      return !prevOpenModal;
    });
  }

  function onChangeHandler(event) {
    setPlayer({ playerName: event.target.value });
  }

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(list));
  }, [list]);

  function getData() {
    return JSON.parse(localStorage.getItem("lists"));
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    console.log(getData());
    setList((prevList) => {
      return [...prevList, player];
    });
  }

  return (
    <div className="modal">
      <div className="modal_close_btn_wrap" type="button">
        <button className="modal_close_btn btn" onClick={handleModal}>
          X
        </button>
      </div>
      <p className="modal_description">Enter Your Name to Set your Score</p>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter Your Name"
          onChange={onChangeHandler}
          value={player.playerName}
        />

        <div className="modal_enter_btn_wrap">
          <button className="modal_enter_btn btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
