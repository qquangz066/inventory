import { commonConstants } from "../constants/commonConstants";

const initialState = {
  data: []
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    /* Add contacts to the state array */
    case commonConstants.SHOW_ERROR: {
      return { message: action.message };
    }

    default:
      return state;
  }
}
