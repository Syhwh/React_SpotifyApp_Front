import {
  API_SEARCH,
  GET_ARTIST,
  GET_TOP_TRACKS,
  GET_USER_INFO,
  GET_USER_ALBUMS,
  SAVE_USER_ALBUM,
  DELETE_USER_ALBUM,
  GET_ALBUM_INFO,
  GET_USER_PLAYLISTS,
  CREATE_USER_PLAYLIST,
  EDIT_USER_PLAYLIST_INFO,
  DELETE_USER_PLAYLIST,
  GET_PLAYLIST_INFO,
  ERROR
} from "../actions/types"

const initialState = {
  searchResults: '',
  artist: '',
  tracks: '',
  userInfo: '',
  userAlbums: '',
  albumInfo: '',
  albumTracks: '',
  playlists: '',
  playlistInfo: '',
  message: '',
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
    case GET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
        error: ''
      }
    case GET_USER_ALBUMS:
      return {
        ...state,
        userAlbums: action.payload,
        error: ''
      }
    case DELETE_USER_ALBUM:
      return {
        ...state,
        userAlbums: state.userAlbums.filter(({ album }) => album.id !== action.payload),
        error: ''
      }
    case GET_ALBUM_INFO:
      return {
        ...state,
        albumInfo: action.payload,
        error: ''
      }
    case GET_USER_PLAYLISTS:
      return {
        ...state,
        playlists: action.payload,
        error: ''
      }
    case GET_PLAYLIST_INFO:
      return {
        ...state,
        playlistInfo: action.payload,
        error: ''
      }
    case EDIT_USER_PLAYLIST_INFO:
      return {
        ...state,
        playlistInfo: {
          ...state.playlistInfo,
          name: action.payload.name,
          description: action.payload.description
        }
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