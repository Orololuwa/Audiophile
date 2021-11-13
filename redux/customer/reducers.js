import types from "./types";

const { SET_CUSTOMER } = types;

const initState = {
  id: 0,
};

const CustomerReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CUSTOMER:
      const { id } = payload;
      return {
        ...state,
        id,
      };
    default:
      return { ...state };
  }
};

export default CustomerReducer;
