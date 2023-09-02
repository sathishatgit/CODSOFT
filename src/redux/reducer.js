import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  BOOKING_SUCCESS,
  BOOKING_ERROR,
  BOOKING_LOADING,
} from "./action";
import { initial } from "./storeData";

export const LoginReducer = (state = initial.login, action) => {
  console.log({ "Log Reducer": action });
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        load: true,
        succes: "",
        error: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        load: false,
        succes: action.payload,
        error: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        load: false,
        succes: "",
        error: true,
      };
    default:
      return state;
  }
};

export const BookingReducer = (state = initial.booking, action) => {
  switch (action.type) {
    case BOOKING_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case BOOKING_ERROR:
      return {
        ...state,
        error: true,
      };
    case BOOKING_LOADING:
      return { ...state, load: true };

    default:
      return state;
  }
};
