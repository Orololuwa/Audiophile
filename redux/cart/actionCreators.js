import actions from "./actions";

const { addProduct, removeProduct, getTotals } = actions;

export const addToCart = (product, count) => {
  return async (dispatch) => {
    try {
      dispatch(addProduct(product, count));
      dispatch(getTotals());
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateCart = (product, count) => {
  return async (dispatch) => {
    try {
      dispatch(addProduct(product, count));
      dispatch(getTotals());
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeFromCart = (id) => {
  return async (dispatch) => {
    try {
      dispatch(removeProduct(id));
      dispatch(getTotals());
    } catch (error) {
      console.log(error);
    }
  };
};
