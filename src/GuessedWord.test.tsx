import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import { findByTestAttr, storeFactory } from "../test/testUtils";
import App from "./App";

jest.mock("./actions/getSecretWord");

const setup = (
  initialState = {
    success: true,
    secretWord: "",
    guessedWords: [{ guessedWord: "", letterMatchCount: 0 }],
  }
) => {
  const store = storeFactory(initialState);
  const wrapper = mount(
    <Provider store={store}>
      {" "}
      <App />
    </Provider>
  );

  const inputBox = findByTestAttr!(wrapper, "input-box");
  inputBox.simulate("change", { target: { value: "train " } });

  const submitButton = findByTestAttr!(wrapper, "submit-button");
  submitButton.simulate("click", { preventDefault() {} });

  return wrapper;
};

describe("no words guessed", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [],
    });
  });

  test("creates guessedWords table with one row", () => {
    const guessedWordRows = findByTestAttr!(wrapper, "guessed-word");
    expect(guessedWordRows).toHaveLength(1);
  });
});

describe("some words guessed", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [{ guessedWord: "agile", letterMatchCount: 1 }],
    });
  });

  test("adds row to guessedWords table", () => {
    const guessedWordRows = findByTestAttr!(wrapper, "guessed-word");
    expect(guessedWordRows).toHaveLength(2);
  });
});

describe("guess  secret word", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [{ guessedWord: "agile", letterMatchCount: 1 }],
    });

    const inputBox = findByTestAttr!(wrapper, "input-box");
    const mockEvent = { target: { value: "party" } };
    inputBox.simulate("change", mockEvent);

    const submitButton = findByTestAttr!(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });
  });

  test("adds row to guessedWords table", () => {
    const guessedWordNotes = findByTestAttr!(wrapper, "guessed-word");
    expect(guessedWordNotes).toHaveLength(3);
  });

  test("displays congrats component", () => {
    const congrats = findByTestAttr!(wrapper, "component-congrats");
    expect(congrats.text().length).toBeGreaterThan(0);
  });

  test("does not display input component contents", () => {
    const inputBox = findByTestAttr!(wrapper, "input-box");
    expect(inputBox.exists()).toBe(false);

    const submitButton = findByTestAttr!(wrapper, "submit-button");
    expect(submitButton.exists()).toBe(false);
  });
});
