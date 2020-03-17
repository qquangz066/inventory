import { loginConstants } from "../constants/loginConstants";
import auth from "../services/auth";

let user = auth.getAuth() || [];
delete user.access_token;
const initialState = {
  isAuthenticated: auth.loggedIn(),
  ...user
};

const clearState = {
  isAuthenticated: false
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case loginConstants.LOGIN_SUCCESS: {
      delete action.user.access_token;
      return {
        ...action.user,
        isAuthenticated: true
      };
    }

    case loginConstants.LOGOUT_REQUEST: {
      return clearState;
    }

    default:
      return state;
  }
}
