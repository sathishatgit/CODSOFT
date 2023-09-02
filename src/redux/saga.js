import { put, takeLatest } from "redux-saga/effects";
import {
  LOGIN_LOADING,
  loginSuccess,
  loginError,
  BOOKING_LOADING,
  BookingSuccess,
  BookingError,
} from "./action";
import axios from "axios";
import { message } from "antd";
import { initial } from "./storeData";

function* login(action) {
  try {
    console.log({ "Log Saga": action });
    let config = {
      method: "post",
      url: "http://localhost:5000/users/signin",
      data: action.payload,
    };
    const userData = yield axios(config);
    if (userData.status === 200) {
      localStorage.setItem("Token", JSON.stringify(userData.data[1].token));
      message.success("Welcome!");
      window.location.href = "/";
      yield put(loginSuccess(userData.data[0]));
    } else {
      message.error("Invalid Username Or Password");
    }
    console.log(userData);
  } catch (error) {
    yield put(loginError());
    message.error("Invalid Username Or Password");
  }
}

function* booking(values) {
  try {
    const config = {
      method: "post",
      url: "http://localhost:5000/bus",
      data: {
        values: values.payload,
        userData: initial.login.succes,
      },
    };
    const response = yield axios(config);
    console.log(response);
    initial.login.succes.journey = response.data.update;
    yield message.success(response.data.message);
    yield put(BookingSuccess());
  } catch (error) {
    console.log(error.message);
    yield put(BookingError());
  }
}

export function* logCall() {
  yield takeLatest(LOGIN_LOADING, login);
  yield takeLatest(BOOKING_LOADING, booking);
}
