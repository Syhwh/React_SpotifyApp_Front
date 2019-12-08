import {
  PROPERTY_CREATE,
  PROPERTY_READ,
  PROPERTY_UPDATE,
  PROPERTY_DELETE,
  PROPERTY_DETAILS,
  PROPERTY_SEARCH,
  ERROR
} from "../actions/types"

const initialState = {
  propertyList: '',
  propertyDetails: '',
  propertySearchResults: '',
  error: '',
  status: '',
  loading: true
}

export default function (state = initialState, action) {
  switch (action.type) {
    case PROPERTY_CREATE:
      return {
        ...state,
        status: action.payload.message,
        propertyDetails: action.payload.property,
        error: ''
      }
    case PROPERTY_READ:
      return {
        ...state,
        propertyList: action.payload,
        loading: action.loading,
        error: ''
      }
    case PROPERTY_DETAILS:
      return {
        ...state,
        propertyDetails: action.payload,
        loading: action.loading,
        error: ''
      }
    case PROPERTY_UPDATE:
      return {
        ...state,
        error: ''
      }
    case PROPERTY_DELETE:
      return {
        ...state,
        error: ''
      }
    case PROPERTY_SEARCH:
      return {
        ...state,
        propertySearchResults: action.payload,
        error: ''
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