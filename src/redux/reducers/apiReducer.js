import { API_SEARCH, GET_ARTIST, GET_TOP_TRACKS, ERROR } from "../actions/types"

const initialState = {
  searchResults: '',
  artist: '',
  tracks: '',
  error: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case API_SEARCH:
      return {
        ...state,
        searchResults: action.payload,
        error: ''
      }
    case GET_ARTIST:
      return {
        ...state,
        artist: action.payload,
        error: ''
      }
    case GET_TOP_TRACKS:
      return {
        ...state,
        tracks: action.payload,
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