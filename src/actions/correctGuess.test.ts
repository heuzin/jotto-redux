import { actionTypes, correctGuess } from "./correctGuess";

describe("correctGuess", () => {
  test('returns an action with type "CORRECT_GUESS', () => {
    const action = correctGuess();
    expect(action).toStrictEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
