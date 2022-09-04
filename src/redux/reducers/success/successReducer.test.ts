import { actionTypes } from "../../../actions/correctGuess";
import successReducer from "./successReducer";

test("when previous state is undefined, return false", () => {
  const newState = successReducer(undefined, { type: "" });
  expect(newState).toBe(false);
});

test("return previous state when unkown action type", () => {
  const newState = successReducer(false, { type: "unkown" });
  expect(newState).toBe(false);
});

test('return "true" for action type CORRECT_GUESS', () => {
  const newState = successReducer(false, { type: actionTypes.CORRECT_GUESS });
  expect(newState).toBe(true);
});
