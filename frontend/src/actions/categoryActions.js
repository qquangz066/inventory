import { categoryConstants } from "../constants/categoryConstant";

const categoryActions = {
  list: () => ({ type: categoryConstants.LIST_CATEGORY_REQUEST })
};

export default categoryActions;
