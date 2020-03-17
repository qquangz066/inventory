import { productConstants } from "../constants/productConstant";

const productActions = {
  list: params => ({ type: productConstants.LIST_PRODUCT_REQUEST, params }),
  get: id => ({ type: productConstants.GET_PRODUCT_REQUEST, id }),
  getByUpc: upc => ({ type: productConstants.GET_PRODUCT_BY_UPC_REQUEST, upc }),
  create: record => ({ type: productConstants.CREATE_PRODUCT_REQUEST, record }),
  update: (id, record) => ({
    type: productConstants.UPDATE_PRODUCT_REQUEST,
    id,
    record
  }),
  delete: (id, params) => ({
    type: productConstants.DELETE_PRODUCT_REQUEST,
    id,
    params
  }),
  addExpiration: (date) => ({
    type: productConstants.ADD_EXPIRATION,
    date
  }),
  removeExpiration: (index) => ({
    type: productConstants.REMOVE_EXPIRATION,
    index
  })
};

export default productActions;
