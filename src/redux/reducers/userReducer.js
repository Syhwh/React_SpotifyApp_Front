import { USER_REGISTER, USER_LOGIN, USER_LOGOUT, USER_UPDATE, USER_INFO, ERROR } from '../actions/types';

const initialState = {
  user: '',
  edit: false,
  error: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER:
      return {
        ...state,
        user: action.payload,
        error: ''
      }
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
        error: ''
      }
    case USER_LOGOUT:
      return {
        ...state,
        user: '',
        edit: false,
        error: ''
      }
    case USER_UPDATE:
      return {
        ...state,
        user: action.payload
      }
    case USER_INFO:
      return {
        ...state,
        user: action.payload
      }
    case ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}