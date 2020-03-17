import { loginConstants } from "../constants/loginConstants";

export const login = user => {
  return {
    type: loginConstants.LOGIN_REQUEST,
    user
  };
};

export const logout = () => {
  return {
    type: loginConstants.LOGOUT_REQUEST
  };
};
