import { Action } from "redux";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
  SET_SECRET_WORD: "SET_SECRET_WORD",
};

interface GuessWordState {
  guessedWord: string;
  letterMatchCount: number;
}

export interface CorrectGuess
  extends Action<typeof actionTypes.CORRECT_GUESS> {}
export interface GuessWord extends Action<typeof actionTypes.GUESS_WORD> {
  payload: GuessWordState;
}
export interface SetSecretWord
  extends Action<typeof actionTypes.SET_SECRET_WORD> {
  payload: string;
}

export const correctGuess = () => {
  return { type: actionTypes.CORRECT_GUESS };
};
