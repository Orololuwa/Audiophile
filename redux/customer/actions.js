import types from "./types";

const actions = {
  setCustomer: (id) => {
    return {
      type: types.SET_CUSTOMER,
      payload: {
        id,
      },
    };
  },
};

export default actions;
