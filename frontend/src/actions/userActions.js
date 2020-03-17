import { userConstants } from "../constants/userConstants";

const userActions = {
  list: params => ({ type: userConstants.LIST_USER_REQUEST, params }),
  activate: id => ({
    type: userConstants.ACTIVATE_USER_REQUEST,
    id
  }),
  deactivate: id => ({
    type: userConstants.DEACTIVATE_USER_REQUEST,
    id
  })
};

export default userActions;
