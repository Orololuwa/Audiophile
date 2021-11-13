import Cookies from "js-cookie";
import types from "./types";

const {
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERR,
  LOGOUT_BEGIN,
  LOGOUT_SUCCESS,
  LOGOUT_ERR,
} = types;

const initState = {
  isLoggedIn: Cookies.get("isLoggedIn"),
  loading: false,
  error: false,
};

const AuthReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: payload.data,
        error: null,
      };
    case LOGIN_ERR:
      return {
        ...state,
        error: payload.err,
        loading: false,
      };
    case LOGOUT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: payload.data,
        error: null,
      };
    case LOGOUT_ERR:
      return {
        ...state,
        error: payload.err,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
