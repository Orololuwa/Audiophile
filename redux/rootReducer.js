import { combineReducers } from "redux";
import AuthReducer from "./Auth/reducers";
import CustomerReducer from "./customer/reducers";
import CartReducer from "./cart/reducers";

const rootReducer = combineReducers({
  auth: AuthReducer,
  customer: CustomerReducer,
  cart: CartReducer,
});

export default rootReducer;
