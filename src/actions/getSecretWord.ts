import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RooState } from "../redux/store";
import { actionTypes, SetSecretWord } from "./correctGuess";

export const getSecretWord =
  (): ThunkAction<void, RooState, undefined, SetSecretWord> =>
  async (dispatch, getState) => {
    const { data } = await axios.get("http://localhost:3030");
    dispatch({
      type: actionTypes.SET_SECRET_WORD,
      payload: data,
    });
  };
