import { actionTypes, GuessWord } from "../../../actions/correctGuess";

interface GuessWordState {
  guessedWord: string;
  letterMatchCount: number;
}

const guessedWordsReducer = (
  state: GuessWordState[] = [],
  action: GuessWord
) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default guessedWordsReducer;
