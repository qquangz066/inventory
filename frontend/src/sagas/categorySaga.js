import { put, call, takeEvery } from "redux-saga/effects";
import { categoryConstants } from "../constants/categoryConstant";
import categoryService from "../services/category";

export const categorySaga = [
  takeEvery(categoryConstants.LIST_CATEGORY_REQUEST, function*(request) {
    try {
      const list = yield call(categoryService.list);
      yield put({
        type: categoryConstants.LIST_CATEGORY_SUCCESS,
        list
      });
    } catch (error) {
      console.log(error);
    }
  })
];
