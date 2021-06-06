import { call, put, takeLatest } from "redux-saga/effects";
import {
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoFailure,
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

export function* userInfoSaga() {
  yield takeLatest(getUserInfoRequest.type, getUserInfoSaga);
}
