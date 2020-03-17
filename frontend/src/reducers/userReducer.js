import { userConstants } from "../constants/userConstants";

const initialState = {
  count: 0,
  users: [],
  detail: null,
  loading: false
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.LIST_USER_REQUEST: {
      return { ...state, loading: true };
    }
    case userConstants.LIST_USER_SUCCESS: {
      return { ...state, ...action.list, loading: false };
    }
    case userConstants.ACTIVATE_USER_SUCCESS: {
      let newUsers = state.users.map(element => {
        if (element.id === action.id) {
          element.is_active = true;
        }
        return element;
      });
      return { ...state, users: [...newUsers] };
    }
    case userConstants.DEACTIVATE_USER_SUCCESS: {
      let newUsers = state.users.map(element => {
        if (element.id === action.id) {
          element.is_active = false;
        }
        return element;
      });
      return { ...state, users: [...newUsers] };
    }
    default:
      return state;
  }
}
