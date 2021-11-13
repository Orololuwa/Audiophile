import types from "./types";

const actions = {
  loginBegin: () => {
    return {
      type: types.LOGIN_BEGIN,
    };
  },
  loginSuccess: (data) => {
    return {
      type: types.LOGIN_SUCCESS,
      payload: {
        data,
      },
    };
  },
  loginErr: (err) => {
    return {
      type: types.LOGIN_ERR,
      payload: {
        err,
      },
    };
  },
  logoutBegin: () => {
    return {
      type: types.LOGOUT_BEGIN,
    };
  },
  logoutSuccess: (data) => {
    return {
      type: types.LOGOUT_SUCCESS,
      payload: {
        data,
      },
    };
  },
  logoutErr: (err) => {
    return {
      type: types.LOGOUT_ERR,
      payload: {
        err,
      },
    };
  },
};

export default actions;
