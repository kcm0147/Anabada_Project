import { LOGIN, LOGOUT } from 'actions/ActionTypes'

export default function UserReducer(state = { data: null }, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state, data: action.data }
        case LOGOUT:
            return { ...state, data: null }
        default:
            return state
    }   //추후 reducer 내용 바뀔 수 있음
}