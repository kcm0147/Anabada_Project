import { call, put, takeLatest } from "redux-saga/effects";
import {
  getAllItemsRequest,
  getAllItemsSuccess,
  getAllItemsFailure,
  getItemsWithNameRequest,
  getItemsWithNameSuccess,
  getItemsWithNameFailure,
  addWishItemRequest,
  addWishItemSuccess,
  addWishItemFailure,
  removeWishItemRequest,
  removeWishItemSuccess,
  removeWishItemFailure,
  buyItemRequest,
  buyItemSuccess,
  buyItemFailure,
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

function* addWishItemSaga(action) {
  try {
    yield call(api.addWishItem, action.payload);
    alert("찜 목록에 추가되었습니다.");
    yield put(addWishItemSuccess());
    yield put(getAllItemsRequest());
  } catch (e) {
    yield put(addWishItemFailure(e));
  }
}

function* removeWishItemSaga(action) {
  try {
    yield call(api.removeWishItem, action.payload);
    alert("찜 목록에서 제거되었습니다.");
    yield put(removeWishItemSuccess());
    yield put(getAllItemsRequest());
  } catch (e) {
    yield put(removeWishItemFailure(e));
  }
}

function* buyItemSaga(action) {
  try {
    yield call(api.buyItem, action.payload);
    alert("입찰에 성공했습니다.");
    yield put(buyItemSuccess());
    yield put(getAllItemsRequest());
  } catch (e) {
    yield put(buyItemFailure(e));
  }
}

export function* itemSaga() {
  yield takeLatest(getAllItemsRequest.type, getAllItemsSaga);
  yield takeLatest(getItemsWithNameRequest.type, getItemsWithNameSaga);
  yield takeLatest(addWishItemRequest.type, addWishItemSaga);
  yield takeLatest(removeWishItemRequest.type, removeWishItemSaga);
  yield takeLatest(buyItemRequest.type, buyItemSaga);
}
