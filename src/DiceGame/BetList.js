import React from "react";
import Bet from "./Bet";
import { useSelector } from "react-redux";

export default function BetList() {
  const betList = useSelector((state) => state.DiceGameReducer.betList);

  const renderBetList = () => {
    return betList.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <Bet bet={item} />
        </div>
      );
    });
  };
  return <div className="row mt-5 ">{renderBetList()}</div>;
}
