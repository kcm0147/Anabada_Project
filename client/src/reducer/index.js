import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'
import UserReducer from 'reducer/UserReducer'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage
}

const RootReducer = combineReducers({
    UserReducer,
})

export default persistReducer(persistConfig, RootReducer)

