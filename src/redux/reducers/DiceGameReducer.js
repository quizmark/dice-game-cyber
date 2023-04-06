const initialState = {
  betList: [
    { id: "ga", img: "./img/DiceGame/ga.png", score: 0 },
    { id: "bau", img: "./img/DiceGame/bau.png", score: 0 },
    { id: "ca", img: "./img/DiceGame/ca.png", score: 0 },
    { id: "nai", img: "./img/DiceGame/nai.png", score: 0 },
    { id: "cua", img: "./img/DiceGame/cua.png", score: 0 },
    { id: "tom", img: "./img/DiceGame/tom.png", score: 0 },
  ],
  totalScore: 1000,
  diceList: [
    { id: "ga", img: "./img/DiceGame/ga.png", score: 0 },
    { id: "bau", img: "./img/DiceGame/bau.png", score: 0 },
    { id: "ca", img: "./img/DiceGame/ca.png", score: 0 },
  ],
};

export const DiceGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BET_DICE_GAME": {
      const betListUpdate = [...state.betList];
      const index = betListUpdate.findIndex((bet) => bet.id === action.bet.id);
      if (index !== -1) {
        if (action.change) {
          if (state.totalScore > 0) {
            betListUpdate[index].score += 100;
            state.totalScore -= 100;
          }
        } else {
          if (betListUpdate[index].score > 0) {
            betListUpdate[index].score -= 100;
            state.totalScore += 100;
          }
        }
      }
      state.betList = betListUpdate;
      return state;
    }
    case "ROLL_DICE_GAME": {
      const randomDiceList = [];
      const betListUpdate = [...state.betList];
      let winScore = 0;
      for (let i = 0; i < 3; i++) {
        let randomNum = Math.floor(Math.random() * 6);
        const randomDice = state.betList[randomNum];
        randomDiceList.push(randomDice);
        winScore += state.betList[randomNum].score * 2;
      }
      state.diceList = randomDiceList;
      state.totalScore += winScore;
      for (let i = 0; i < 6; i++) betListUpdate[i].score = 0;
      state.betList = betListUpdate;
      return state;
    }
    case "REPLAY_DICE_GAME": {
      state.totalScore = 1000;
      const betListUpdate = [...state.betList];
      for (let i = 0; i < 6; i++) betListUpdate[i].score = 0;
      state.betList = betListUpdate;
      return state;
    }
    default:
      return state;
  }
};
