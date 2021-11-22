import actions from "./actions";

const { addProduct, getTotals } = actions;

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
