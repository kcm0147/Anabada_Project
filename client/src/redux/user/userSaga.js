import { call, put, takeLatest } from "redux-saga/effects";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
} from "./userSlice";
import * as api from "../../lib/api";

function* loginSaga(action) {
  try {
    const result = yield call(api.login, action.payload);
    yield put(loginSuccess(result));
  } catch (e) {
    yield put(loginFailure(e));
  }
}

function* logoutSaga() {
  try {
    yield put(logoutSuccess());
  } catch (e) {
    yield put(logoutFailure(e));
  }
}

export function* userSaga() {
  yield takeLatest(loginRequest.type, loginSaga);
  yield takeLatest(logoutRequest.type, logoutSaga);
}
