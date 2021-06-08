import { call, put, takeLatest } from "redux-saga/effects";
import {
  getAllItemsRequest,
  getAllItemsSuccess,
  getAllItemsFailure,
  getItemsWithNameRequest,
  getItemsWithNameSuccess,
  getItemsWithNameFailure,
} from "./itemSlice";
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

function* getItemsWithNameSaga(action) {
  try {
    const result = yield call(api.getItemsWithName, action.payload);
    if (result) {
      yield put(getItemsWithNameSuccess(result));
    } else {
      yield put(getItemsWithNameFailure());
    }
  } catch (e) {
    yield put(getItemsWithNameFailure(e));
  }
}

export function* itemSaga() {
  yield takeLatest(getAllItemsRequest.type, getAllItemsSaga);
  yield takeLatest(getItemsWithNameRequest.type, getItemsWithNameSaga);
}
