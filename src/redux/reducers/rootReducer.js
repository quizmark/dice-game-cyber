import { combineReducers } from "redux";
import { BurgerReducer } from "./BurgerReducer";
import { DiceGameReducer } from "./DiceGameReducer";
//store of stores
export const rootReducer = combineReducers({
  BurgerReducer,
  DiceGameReducer,
});

export default rootReducer;
