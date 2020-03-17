import { all } from "redux-saga/effects";
import { loginFlow, logoutFlow } from "../sagas/loginSaga";
import { userSaga } from "../sagas/userSaga";
import { productSaga } from "./productSaga";
import { categorySaga } from "./categorySaga";
import { departmentSaga } from "./departmentSaga";

export default function* rootSaga() {
  yield all([
    loginFlow(),
    logoutFlow(),
    ...userSaga,
    ...productSaga,
    ...categorySaga,
    ...departmentSaga
  ]);
}
