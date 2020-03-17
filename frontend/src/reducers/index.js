import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";
import commonReducer from "./commonReducer";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import departmentReducer from "./departmentReducer";

const rootReducer = combineReducers({
  user: userReducer,
  auth: loginReducer,
  common: commonReducer,
  product: productReducer,
  category: categoryReducer,
  department: departmentReducer,
});

export default rootReducer;
