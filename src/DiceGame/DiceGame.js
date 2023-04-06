import React from "react";
import Score from "./Score";
import BetList from "./BetList";
import DiceList from "./DiceList";
import "./DiceGame.css";

export default function DiceGame() {
  return (
    <div id="DiceGame" className="container-fluid" style={{ margin: 0 }}>
      <Score />
      <div className="row">
        <div className="col-8 ">
          <BetList />
        </div>
        <div className="col-4">
          <DiceList />
        </div>
      </div>
    </div>
  );
}
