import React, { Fragment } from "react";
import { useSpring, animated } from "react-spring";

export default function Dice(props) {
  let { dice } = props;

  const [propsUseSpringRoll, set] = useSpring(() => ({
    to: { xyz: [360, 360, 360] },
    from: { xyz: [0, 0, 0] },
    config: {
      duration: 1000,
    },
    reset: true,
  }));
  const setRoll = () => {
    set.start({
      to: { xyz: [360, 360, 360] },
      from: { xyz: [0, 0, 0] },
      config: {
        duration: 1000,
      },
      reset: true,
    });
  };
  return (
    <Fragment>
      <div
        onClick={() => {
          setRoll();
        }}
        className="scene ms-4"
      >
        <animated.div
          className="cube"
          style={{
            transform: propsUseSpringRoll.xyz.to(
              (x, y, z) =>
                `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
            ),
          }}
        >
          <div className="cube__face front">
            <img style={{ width: "100%" }} src={dice.img} alt="" />
          </div>
          <div className="cube__face back">
            <img
              style={{ width: "100%" }}
              src="./img/DiceGame/bau.png"
              alt=""
            />
          </div>
          <div className="cube__face left">
            <img style={{ width: "100%" }} src="./img/DiceGame/ga.png" alt="" />
          </div>
          <div className="cube__face right">
            <img style={{ width: "100%" }} src="./img/DiceGame/ca.png" alt="" />
          </div>
          <div className="cube__face top">
            <img
              style={{ width: "100%" }}
              src="./img/DiceGame/tom.png"
              alt=""
            />
          </div>
          <div className="cube__face bottom">
            <img
              style={{ width: "100%" }}
              src="./img/DiceGame/nai.png"
              alt=""
            />
          </div>
        </animated.div>
      </div>
    </Fragment>
  );
}
