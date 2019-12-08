import { AGENCY_REGISTER, AGENCY_LOGIN,AGENCY_LOGOUT,AGENCY_READ, AGENCY_UPDATE, AGENCY_DELETE, ERROR } from "../actions/types"

const initialState = {
  agency: '',
  edit: false,
  error: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case AGENCY_REGISTER:
      return {
        ...state,
        agency: action.payload,
        error: ''
      }
    case AGENCY_LOGIN:
      return {
        ...state,
        agency: action.payload,
        error: ''
      }
    case AGENCY_LOGOUT:
      return {
        ...state,
        agency: '',
        edit: false,
        error: ''
      }
    case AGENCY_UPDATE:
      return {
        ...state,
        error: action.payload
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