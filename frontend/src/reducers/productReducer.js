import { productConstants } from "../constants/productConstant";

const initialState = {
  count: 0,
  products: [],
  detail: null,
  loading: false
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case productConstants.LIST_PRODUCT_REQUEST: {
      return { ...state, loading: true };
    }
    case productConstants.LIST_PRODUCT_SUCCESS: {
      return { ...state, ...action.list, loading: false };
    }
    case productConstants.GET_PRODUCT_REQUEST: {
      return { ...state, loading: true };
    }
    case productConstants.GET_PRODUCT_SUCCESS: {
      return { ...state, detail: action.detail, loading: false };
    }
    case productConstants.GET_PRODUCT_BY_UPC_SUCCESS: {
      return { ...state, detail: action.detail };
    }
    case productConstants.GET_PRODUCT_BY_UPC_NOT_FOUND: {
      return { ...state, detail: "UPC_NOT_FOUND" };
    }
    case productConstants.CREATE_PRODUCT_SUCCESS: {
      return { ...state, detail: action.detail };
    }
    case productConstants.UPDATE_PRODUCT_SUCCESS: {
      return { ...state, detail: action.detail };
    }
    case productConstants.ADD_EXPIRATION: {
      let expiration = [...new Set([...state.detail.expiration, action.date])];
      return { ...state, detail: { ...state.detail, expiration } };
    }
    case productConstants.REMOVE_EXPIRATION: {
      let expiration = [...state.detail.expiration];
      expiration.splice(action.index, 1);
      return { ...state, detail: { ...state.detail, expiration } };
    }
    default:
      return state;
  }
}
