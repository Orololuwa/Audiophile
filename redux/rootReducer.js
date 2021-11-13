import { combineReducers } from "redux";
import AuthReducer from "./Auth/reducers";
import CustomerReducer from "./customer/reducers";

const rootReducer = combineReducers({
  auth: AuthReducer,
  customer: CustomerReducer,
});

export default rootReducer;
