import { LOGIN, LOGOUT } from 'actions/ActionTypes'

export default function UserReducer(state = {}, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state, data: action.data }
        case LOGOUT:
            return { ...state, data: action.data }
        default:
            return { ...state, data: action.data }
    }   //추후 reducer 내용 바뀔 수 있음
}