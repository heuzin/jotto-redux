import { combineReducers } from "redux";
import guessedWordsReducer from "./guessedWords/guessedWordsReducer";
import secretWordReducer from "./secretWord/secretWordReducer";
import successReducer from "./success/successReducer";

const rootReducer = combineReducers({
  success: successReducer,
  guessedWords: guessedWordsReducer,
  secretWord: secretWordReducer,
});

export default rootReducer;
