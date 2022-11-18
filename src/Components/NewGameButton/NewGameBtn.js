import React from "react";

function NewGameBtn(props) {
  return (
    <button className="new_game_btn btn" onClick={props.newGame}>
      New Game
    </button>
  );
}

export default NewGameBtn;
