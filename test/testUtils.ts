import { ReactWrapper, ShallowWrapper } from "enzyme";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../src/redux/reducers";
import { middlewares } from "../src/redux/store";

interface InitialState {
  guessedWords: {
    guessedWord: string;
    letterMatchCount: number;
  }[];
  secretWord: string;
}

export const storeFactory = (initialState: InitialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
};

export const findByTestAttr = (
  wrapper: ShallowWrapper | ReactWrapper,
  val: string
) => {
  return wrapper.find(`[data-test='${val}']`);
};
