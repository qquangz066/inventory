import { put, call, takeEvery } from "redux-saga/effects";
import { userConstants } from "../constants/userConstants";
import userService from "../services/user";
import { toast } from "react-toastify";

export const userSaga = [
  takeEvery(userConstants.LIST_USER_REQUEST, function*(request) {
    try {
      const list = yield call(userService.list, request.params);
      yield put({
        type: userConstants.LIST_USER_SUCCESS,
        list
      });
    } catch (error) {
      console.log(error);
    }
  }),
  takeEvery(userConstants.ACTIVATE_USER_REQUEST, function*(request) {
    try {
      yield call(userService.activate, request.id);
      yield put({
        type: userConstants.ACTIVATE_USER_SUCCESS,
        id: request.id
      });
      toast.success("Activated successfully");
    } catch (error) {
      console.log(error);
    }
  }),
  takeEvery(userConstants.DEACTIVATE_USER_REQUEST, function*(request) {
    try {
      yield call(userService.deactivate, request.id);
      yield put({
        type: userConstants.DEACTIVATE_USER_SUCCESS,
        id: request.id
      });
      toast.success("Deactivated successfully");
    } catch (error) {
      console.log(error);
    }
  })
];
