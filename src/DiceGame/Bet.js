import React from "react";
import { useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";

export default function Bet(props) {
  const dispatch = useDispatch();

  const [propsUseSpringDecrease, setDecrease] = useSpring(() => ({
    from: { scale: 1 },
    config: { duration: 500 },
  }));
  const setDecreaseClick = () => {
    setDecrease.start({
      from: { scale: 1 },
      to: { scale: 1.25 },
    });
    setDecrease.start({
      from: { scale: 1.25 },
      to: { scale: 1 },
    });
  };

  const [propsUseSpringIncrease, setIncrease] = useSpring(() => ({
    from: { scale: 1 },
  }));
  const setIncreaseClick = () => {
    setIncrease.start({
      from: { scale: 1 },
      to: { scale: 1.25 },
    });
    setIncrease.start({
      from: { scale: 1.25 },
      to: { scale: 1 },
    });
  };

  const { bet } = props;

  return (
    <div className="mt-3" style={{ width: 250 }}>
      <img style={{ width: "100%", height: "100%" }} src={bet.img} alt="" />
      <div
        className="bg-success mt-2 pb-2 text-center"
        style={{ borderRadius: "10px" }}
      >
        <animated.button
          style={{
            ...propsUseSpringDecrease,
          }}
          onClick={() => {
            setDecreaseClick();
            dispatch({
              type: "BET_DICE_GAME",
              bet,
              change: false,
            });
          }}
          className="btn btn-danger me-3"
        >
          -
        </animated.button>
        <span style={{ color: "yellow", fontSize: 25 }}>{bet.score}</span>
        <animated.button
          style={{
            ...propsUseSpringIncrease,
          }}
          onClick={() => {
            setIncreaseClick();
            dispatch({
              type: "BET_DICE_GAME",
              bet,
              change: true,
            });
          }}
          className="btn btn-danger ms-3"
        >
          +
        </animated.button>
      </div>
    </div>
  );
}
