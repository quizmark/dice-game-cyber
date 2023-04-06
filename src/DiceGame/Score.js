import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Score(props) {
  const dispatch = useDispatch();
  const totalScore = useSelector((state) => state.DiceGameReducer.totalScore);

  return (
    <div>
      <h3
        className="text-center display-4"
        style={{ color: "#58fa58", marginTop: 0 }}
      >
        DICE GAME
      </h3>
      <div className="text-center mt-5">
        <span
          style={{ fontSize: "20px", borderRadius: "5%" }}
          className="p-3 text-white bg-danger"
        >
          Score: <span className="text-warning">{totalScore}$</span>
        </span>
      </div>
      <div className="text-center mt-5">
        <button
          onClick={() => {
            dispatch({
              type: "REPLAY_DICE_GAME",
            });
          }}
          style={{ fontSize: "15px", borderRadius: "5%", border: "none" }}
          className="p-2 text-white bg-success"
        >
          Replay
        </button>
      </div>
    </div>
  );
}
