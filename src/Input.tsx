import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { guessWord } from "./actions/guessWord";
import { RooState } from "./redux/store";

const Input = () => {
  const [currentGuess, setCurrentGuess] = React.useState("");
  const dispatch = useDispatch();

  const success = useSelector((state: RooState) => state.success);

  if (success) {
    return <div data-test="component-input" />;
  }
  return (
    <div data-test="component-input">
      <form data-test="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type={"text"}
          placeholder="enter guess"
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb2"
          onClick={(e) => {
            e.preventDefault();
            dispatch(guessWord(currentGuess));
            setCurrentGuess("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;
