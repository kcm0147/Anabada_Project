import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { createLogger } from "redux-logger";
import { USER, userReducer } from "../redux/user/userSlice";
import { USER_INFO, userInfoReducer } from "../redux/userInfo/userInfoSlice";
import { ITEM, itemReducer } from "../redux/item/itemSlice";
import { userSaga } from "../redux/user/userSaga";
import { userInfoSaga } from "../redux/userInfo/userInfoSaga";
import { itemSaga } from "../redux/item/itemSaga";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import "bootstrap/dist/css/bootstrap.min.css";

const rootReducer = combineReducers({
  [USER]: userReducer,
  [USER_INFO]: userInfoReducer,
  [ITEM]: itemReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([userSaga(), userInfoSaga(), itemSaga()]);
}

const createStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: [sagaMiddleware, logger],
  });

  sagaMiddleware.run(rootSaga);
  return store;
};

export default createStore;
