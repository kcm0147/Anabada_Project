import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { all } from "redux-saga/effects";
import user, { userSaga } from "./user";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user,
});

export function* rootSaga() {
  yield all([userSaga()]);
}

export default persistReducer(persistConfig, rootReducer);
