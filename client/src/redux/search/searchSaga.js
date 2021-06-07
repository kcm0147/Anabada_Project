import { call, put, takeLatest } from "redux-saga/effects";
import {
  getAllItemsRequest,
  getAllItemsSuccess,
  getAllItemsFailure,
} from "./searchSlice";
import * as api from "../../lib/api";

function* getAllItemsSaga() {
  try {
    const result = yield call(api.getAllItems);
    if (result) {
      yield put(getAllItemsSuccess(result));
    } else {
      yield put(getAllItemsFailure());
    }
  } catch (e) {
    yield put(getAllItemsFailure(e));
  }
}

export function* searchSaga() {
  yield takeLatest(getAllItemsRequest.type, getAllItemsSaga);
}
