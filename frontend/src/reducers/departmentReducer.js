import { departmentConstant } from "../constants/departmentConstant";


const initialState = {
  departments: [],
};

export default function departmentReducer(state = initialState, action) {
  switch (action.type) {
    case departmentConstant.LIST_DEPARTMENT_SUCCESS: {
      return { ...state, ...action.list };
    }
    
    default:
      return state;
  }
}
