// store.js
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { BookingReducer, LoginReducer } from "./reducer";
import { logCall } from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    reducers: LoginReducer,
    booking: BookingReducer,
  }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(logCall);
