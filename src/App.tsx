import React, { useEffect } from "react";
import "./App.css";
import { getSecretWord } from "./actions/getSecretWord";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { RooState } from "./redux/store";

function App() {
  const success = useSelector((state: RooState) => state.success);
  const guessedWords = useSelector((state: RooState) => state.guessedWords);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSecretWord());
  }, [dispatch]);

  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
