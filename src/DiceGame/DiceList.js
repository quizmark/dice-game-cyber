import React from "react";
import Dice from "./Dice";
import { useSelector, useDispatch } from "react-redux";

export default function DiceList(props) {
  const dispatch = useDispatch();
  const diceList = useSelector((state) => state.DiceGameReducer.diceList);
  return (
    <div>
      <div
        className="bg-white mt-5 me-5"
        style={{ width: 300, height: 300, borderRadius: "50%" }}
      >
        <div className="row">
          <div
            className="col-12 text-center"
            style={{ marginTop: 0, marginLeft: 75 }}
          >
            <Dice dice={diceList[0]} />
          </div>
        </div>
        <div className="row text-center" style={{ marginLeft: 15 }}>
          <div className="col-5">
            <Dice dice={diceList[1]} />
          </div>
          <div className="col-5">
            <Dice dice={diceList[2]} />
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "20%", marginTop: "5%" }}>
        <button
          onClick={() => {
            dispatch({
              type: "ROLL_DICE_GAME",
            });
          }}
          className="btn btn-success p-2"
          style={{ fontSize: 25 }}
        >
          Roll
        </button>
      </div>
    </div>
  );
}
