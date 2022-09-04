import { actionTypes, CorrectGuess } from "../../../actions/correctGuess";

const successReducer = (state: boolean = false, action: CorrectGuess) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};

export default successReducer;
