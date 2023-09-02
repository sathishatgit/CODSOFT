export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const BOOKING_LOADING = "BOOKING_LOADING";
export const BOOKING_SUCCESS = "BOOKING_SUCCESS";
export const BOOKING_ERROR = "BOOKING_ERROR";
export const loginLoading = (payload) => ({
  type: LOGIN_LOADING,
  payload: payload,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload: payload,
});

export const loginError = () => ({
  type: LOGIN_ERROR,
});

export const BookingLoading = (payload) => ({
  type: BOOKING_LOADING,
  payload: payload,
});

export const BookingSuccess = () => ({
  type: BOOKING_SUCCESS,
});

export const BookingError = () => ({
  type: BOOKING_ERROR,
});
