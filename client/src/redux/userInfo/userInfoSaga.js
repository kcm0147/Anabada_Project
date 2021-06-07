import { call, put, takeLatest } from "redux-saga/effects";
import {
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoFailure,
  modifyUserInfoRequest,
  modifyUserInfoSuccess,
  modifyUserInfoFailure,
} from "./userInfoSlice";
import * as api from "../../lib/api";

function* getUserInfoSaga() {
  try {
    const result = yield call(api.getUserInfo);
    if (result) {
      yield put(getUserInfoSuccess(result));
    } else {
      yield put(getUserInfoFailure());
    }
  } catch (e) {
    yield put(getUserInfoFailure(e));
  }
}

function* modifyUserInfoSaga(action) {
  try {
    yield call(api.modifyUserInfo, action.payload);
    alert("정보를 수정했습니다.");
    yield put(modifyUserInfoSuccess());
  } catch (e) {
    yield put(modifyUserInfoFailure(e));
  }
}

export function* userInfoSaga() {
  yield takeLatest(getUserInfoRequest.type, getUserInfoSaga);
  yield takeLatest(modifyUserInfoRequest.type, modifyUserInfoSaga);
}
