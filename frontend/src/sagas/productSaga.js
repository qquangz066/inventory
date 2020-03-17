import { put, call, takeEvery } from "redux-saga/effects";
import { productConstants } from "../constants/productConstant";
import productService from "../services/product";
import { toast } from "react-toastify";
import { getNestedObject } from "../utils/object";

export const productSaga = [
  takeEvery(productConstants.LIST_PRODUCT_REQUEST, function*(request) {
    try {
      const list = yield call(productService.list, request.params);
      yield put({
        type: productConstants.LIST_PRODUCT_SUCCESS,
        list
      });
    } catch (error) {
      console.log(error);
    }
  }),
  takeEvery(productConstants.GET_PRODUCT_REQUEST, function*(request) {
    try {
      const detail = yield call(productService.get, request.id);
      yield put({ type: productConstants.GET_PRODUCT_SUCCESS, detail });
    } catch (error) {
      console.log(error);
    }
  }),
  takeEvery(productConstants.GET_PRODUCT_BY_UPC_REQUEST, function*(request) {
    try {
      const detail = yield call(productService.getByUpc, request.upc);
      yield put({ type: productConstants.GET_PRODUCT_BY_UPC_SUCCESS, detail });
    } catch (error) {
      if(getNestedObject(error, ["response", "status"]) === 404){
        yield put({ type: productConstants.GET_PRODUCT_BY_UPC_NOT_FOUND });
      }
      console.log(error);
    }
  }),
  takeEvery(productConstants.CREATE_PRODUCT_REQUEST, function*(request) {
    try {
      const detail = yield call(productService.create, request.record);
      toast.success("Saved successfully");
      yield put({ type: productConstants.CREATE_PRODUCT_SUCCESS, detail });
    } catch (error) {
      console.log(error);
    }
  }),
  takeEvery(productConstants.UPDATE_PRODUCT_REQUEST, function*(request) {
    try {
      const detail = yield call(
        productService.update,
        request.id,
        request.record
      );
      toast.success("Saved successfully");
      yield put({ type: productConstants.UPDATE_PRODUCT_SUCCESS, detail });
    } catch (error) {
      console.log(error);
    }
  }),
  takeEvery(productConstants.DELETE_PRODUCT_REQUEST, function*(request) {
    try {
      yield call(productService.delete, request.id);
      yield put({
        type: productConstants.LIST_PRODUCT_REQUEST,
        params: request.params
      });
      toast.success("Deleted successfully");
    } catch (error) {
      console.log(error);
    }
  })
];
