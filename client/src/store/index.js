import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { createLogger } from "redux-logger";
import { USER, userReducer } from "../redux/user/userSlice";
import { userSaga } from "../redux/user/userSaga";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import 'bootstrap/dist/css/bootstrap.min.css';

const rootReducer = combineReducers({
  [USER]: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([userSaga()]);
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
