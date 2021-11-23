import actions from "./actions";

const { addProduct, clearAll, getTotals } = actions;

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
      if (count === 0) {
        dispatch(removeProduct(product.id));
      } else {
        dispatch(addProduct(product, count));
      }
      dispatch(getTotals());
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearCart = (id) => {
  return async (dispatch) => {
    try {
      dispatch(clearAll());
      dispatch(getTotals());
    } catch (error) {
      console.log(error);
    }
  };
};
