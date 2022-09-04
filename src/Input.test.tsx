import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { findByTestAttr, storeFactory } from "../test/testUtils";
import Input from "./Input";
import { Provider } from "react-redux";

const setup = (
  initialState = { success: true, secretWord: "", guessedWords: [] },
  secretWord = "party"
) => {
  const store = storeFactory(initialState);
  return mount(
    <Provider store={store}>
      <Input />
    </Provider>
  );
};

test("Input renders without errors", () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr!(wrapper, "component-input");
  expect(inputComponent.length).toBe(1);
});

describe("render", () => {
  describe("success is true", () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
      wrapper = setup({ success: true, secretWord: "", guessedWords: [] });
    });

    test("Input renders without error", () => {
      const inputComponent = findByTestAttr!(wrapper, "component-input");
      expect(inputComponent.length).toBe(1);
    });

    test("input box does not show", () => {
      const inputBox = findByTestAttr!(wrapper, "input-box");
      expect(inputBox.exists()).toBe(false);
    });

    test("submit burron does not show", () => {
      const submitButton = findByTestAttr!(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(false);
    });
  });

  describe("success is false", () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
      wrapper = setup({ success: false, secretWord: "", guessedWords: [] });
    });

    test("Input renders without error", () => {
      const inputComponent = findByTestAttr!(wrapper, "component-input");
      expect(inputComponent.length).toBe(1);
    });

    test("input box does not show", () => {
      const inputBox = findByTestAttr!(wrapper, "input-box");
      expect(inputBox.exists()).toBe(true);
    });

    test("submit burron does not show", () => {
      const submitButton = findByTestAttr!(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(true);
    });
  });
});

describe("state controlled input field", () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper: ReactWrapper;
  let originalUseState: any;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup({ success: false, secretWord: "", guessedWords: [] });
  });

  afterEach(() => {
    React.useState = originalUseState;
  });

  test("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr!(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("field is cleared upon submit click", () => {
    const inputBox = findByTestAttr!(wrapper, "submit-button");

    inputBox.simulate("click", { preventDefault() {} });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
