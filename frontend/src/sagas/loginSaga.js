import { put, take, race, call, takeEvery } from "redux-saga/effects";
import { loginConstants } from "../constants";
import auth from "../services/auth";
import history from "../history";

export function* loginFlow() {
  // Because sagas are generators, doing `while (true)` doesn't block our program
  // Basically here we say "this saga is always listening for actions"
  while (true) {
    // And we're listening for `LOGIN_REQUEST` actions and destructuring its payload
    const request = yield take(loginConstants.LOGIN_REQUEST);
    const { username, password } = request.user;

    // A `LOGOUT` action may happen while the `authorize` effect is going on, which may
    // lead to a race condition. This is unlikely, but just in case, we call `race` which
    // returns the "winner", i.e. the one that finished first
    try {
      const winner = yield race({
        auth: call(auth.login, username, password),
        logout: take(loginConstants.LOGOUT_REQUEST)
      });
      // If `authorize` was the winner...
      if (winner.auth) {
        // ...we send Redux appropiate actions
        if (winner.auth.status === 200) {
          let jwt = require("jsonwebtoken");
          let data = jwt.decode(winner.auth.data.access_token);
          data.access_token = winner.auth.data.access_token;
          localStorage.auth = JSON.stringify(data);
          yield put({
            type: loginConstants.LOGIN_SUCCESS,
            ...data
          });
          
          yield call(history.push, "/");
        } else {
        }
      }
    } catch (error) {
      // yield put({
      //   type: loginConstants.LOGIN_FAILED,
      //   message: error.response ? error.response.data.detail : error.message
      // });
      
    }
  }
}

export function* logoutFlow() {
  yield takeEvery(loginConstants.LOGOUT_REQUEST, function*() {
    yield call(auth.logout);
    yield call(history.push, "/login");
  });
}
