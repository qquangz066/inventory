import { departmentConstant } from "../constants/departmentConstant";

const departmentActions = {
  list: () => ({ type: departmentConstant.LIST_DEPARTMENT_REQUEST })
};

export default departmentActions;
