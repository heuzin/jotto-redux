import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers";

export const middlewares = [ReduxThunk];

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

export type RooState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
