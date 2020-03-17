
import { categoryConstants } from "../constants/categoryConstant";

const initialState = {
  categories: [],
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case categoryConstants.LIST_CATEGORY_SUCCESS: {
      return { ...state, ...action.list };
    }
    
    default:
      return state;
  }
}
