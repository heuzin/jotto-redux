import { ThunkAction } from "redux-thunk";
import { getLetterMatchCount } from "../helpers/getLetterMatchCount";
import { RooState } from "../redux/store";
import { actionTypes, CorrectGuess, GuessWord } from "./correctGuess";

export const guessWord =
  (
    guessedWord: string
  ): ThunkAction<void, RooState, undefined, GuessWord | CorrectGuess> =>
  (dispatch, getState) => {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: {
        guessedWord,
        letterMatchCount,
      },
    });

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  };
