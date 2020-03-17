import { put, call, takeEvery } from "redux-saga/effects";
import { departmentConstant } from "../constants/departmentConstant";
import departmentService from "../services/department";

export const departmentSaga = [
  takeEvery(departmentConstant.LIST_DEPARTMENT_REQUEST, function*(request) {
    try {
      const list = yield call(departmentService.list);
      yield put({
        type: departmentConstant.LIST_DEPARTMENT_SUCCESS,
        list
      });
    } catch (error) {
      console.log(error);
    }
  })
];
