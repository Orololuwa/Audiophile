import types from "./types";

const actions = {
  addProduct: (product, count) => {
    return {
      type: types.ADD_PRODUCT,
      payload: {
        product,
        count,
      },
    };
  },
  removeProduct: (id) => {
    return {
      type: types.REMOVE_PRODUCT,
      payload: {
        id,
      },
    };
  },
  clearAll: () => {
    return {
      type: types.CLEAR_ALL,
    };
  },
  toggleCartDisplay: () => {
    return {
      type: types.TOGGLE_CART_DISPLAY,
    };
  },
  getTotals: () => {
    return {
      type: types.CALC_TOTAL,
    };
  },
  bumpCart: (value) => {
    return {
      type: types.BUMP_CART,
      payload: {
        value,
      },
    };
  },
};

export default actions;
