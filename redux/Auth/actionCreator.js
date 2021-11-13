import Cookies from "js-cookie";
import actions from "./actions";

const {
  loginBegin,
  loginSuccess,
  loginErr,
  logoutBegin,
  logoutSuccess,
  logoutErr,
} = actions;

const login = () => {
  return async (dispatch) => {
    try {
      dispatch(loginBegin());
      setTimeout(() => {
        dispatch(loginSuccess(true));
      }, 300);
      Cookies.set("isLoggedIn", "isLoggedIn");
      window.location.replace("/");
    } catch (err) {
      dispatch(loginErr(err));
    }
  };
};

const logOut = () => {
  return async (dispatch) => {
    try {
      dispatch(logoutBegin());
      Cookies.remove("isLoggedIn");
      localStorage.clear();
      dispatch(logoutSuccess(null));
      window.location.reload();
    } catch (err) {
      dispatch(logoutErr(err));
    }
  };
};

export { login, logOut };
