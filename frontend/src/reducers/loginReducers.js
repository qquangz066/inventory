import { loginConstants } from "../constants";
import auth from "../services/auth";

const initialState = {
  isAuthenticated: auth.loggedIn(),
  username: auth.getAuth() && auth.getAuth().username,
};

const clearState = {
  isAuthenticated: false,
  username: "",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case loginConstants.LOGIN_SUCCESS: {
      return {
        username: action.username,
        isAuthenticated: true
      };
    }

    case loginConstants.LOGOUT_REQUEST: {
      return clearState;
    }

    case loginConstants.LOGIN_FAILED: {
      return {...clearState,message: action.message};
    }

    default:
      return state;
  }
}
