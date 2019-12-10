import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";
import commonReducer from "./commonReducer";

const rootReducer = combineReducers({
  users: userReducer,
  auth: loginReducer,
  common: commonReducer,
});

export default rootReducer;
