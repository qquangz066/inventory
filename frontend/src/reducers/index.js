import { combineReducers } from "redux";
import userReducer from "./userReducers";
import loginReducers from "./loginReducers";

const rootReducer = combineReducers({
  users: userReducer,
  auth: loginReducers
});

export default rootReducer;
