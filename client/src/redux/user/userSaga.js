import { call, put, takeLatest } from "redux-saga/effects";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
} from "./userSlice";
import * as api from "../../lib/api";

function* loginSaga(action) {
  try {
    const result = yield call(api.login, action.payload);
    if (result) {
      alert("로그인에 성공했습니다.");
      yield put(loginSuccess(result));
    } else {
      alert("로그인에 실패했습니다.");
      yield put(loginFailure());
    }
  } catch (e) {
    alert("로그인에 실패했습니다.");
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

function* registerSaga(action) {
  try {
    const result = yield call(api.register, action.payload);
    alert("회원가입에 성공했습니다.");
    yield put(registerSuccess(result));
  } catch (e) {
    yield put(registerFailure(e));
  }
}

export function* userSaga() {
  yield takeLatest(loginRequest.type, loginSaga);
  yield takeLatest(logoutRequest.type, logoutSaga);
  yield takeLatest(registerRequest.type, registerSaga);
}
