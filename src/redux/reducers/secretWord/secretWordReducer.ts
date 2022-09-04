import { actionTypes, SetSecretWord } from "../../../actions/correctGuess";

const secretWordReducer = (state: string = "", action: SetSecretWord) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
};

export default secretWordReducer;
