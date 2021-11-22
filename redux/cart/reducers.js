import types from "./types";

const { ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_ALL, TOGGLE_CART_DISPLAY } = types;

const initState = {
  products: [],
  cartShow: false,
};

const CartReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PRODUCT:
      const { product, count } = payload;
      const cart = state.products;
      product.count = count;
      const productIndex = cart.findIndex(
        (element) => element.id === product.id
      );
      if (productIndex < 0) {
        cart.push(product);
      } else {
        cart[productIndex] = product;
      }
      return {
        ...state,
        products: cart,
      };
    case REMOVE_PRODUCT:
      const { id } = payload;
      const filteredCart = state.products.filter((prd) => prd.id !== id);
      return {
        ...state,
        products: filteredCart,
      };
    case CLEAR_ALL:
      return {
        ...state,
        products: [],
      };
    case TOGGLE_CART_DISPLAY:
      return {
        ...state,
        cartShow: !state.cartShow,
      };
    default:
      return { ...state };
  }
};

export default CartReducer;
