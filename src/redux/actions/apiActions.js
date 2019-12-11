import ApiSpotify from '../../utils/ApiSpotify';
import {
  API_GET_NEW_RELEASES,
  API_SEARCH,
  GET_ARTIST,
  GET_TOP_TRACKS,
  GET_USER_ALBUMS,
  DELETE_USER_ALBUM,
  GET_ALBUM_INFO,
  GET_USER_PLAYLISTS,
  CREATE_USER_PLAYLIST,
  EDIT_USER_PLAYLIST_INFO,
  DELETE_USER_PLAYLIST,
  GET_PLAYLIST_INFO,
  ERROR
} from './types';

export function getNewReleases() {
  return function (dispatch) {
    const appToken = localStorage.getItem('appTkn');
    ApiSpotify.get(`/browse/new-releases?limit=20`, {
      headers: {
        Authorization: `Bearer ${appToken}`
      }
    })
      .then(({ data }) => {
        dispatch({
          type: API_GET_NEW_RELEASES,
          payload: data.albums.items
        });
      })
  }
}




export function search({ search }) {
  return function (dispatch) {
    const appToken = localStorage.getItem('appTkn')
    ApiSpotify.get(`/search`, {
      params: {
        query: search,
        type: 'album,artist,track',
        access_token: appToken
      }
    })
      .then(({ data }) => {
        dispatch({
          type: API_SEARCH,
          payload: data
        });
      })
      .catch(({ data }) => {
        dispatch({
          type: ERROR,

        })
      })

  }
}

export function getArtist(artistID) {
  return function (dispatch) {
    const appToken = localStorage.getItem('appTkn')
    ApiSpotify.get(`/artists/${artistID}`, {
      params: {
        access_token: appToken
      }
    })
      .then(({ data }) => {
        dispatch({
          type: GET_ARTIST,
          payload: data,
        });
      })
      .catch(({ data }) => {
        dispatch({
          type: ERROR,

        })
      })
  }
}

export function getTopTracks(artistID) {
  return function (dispatch) {
    const appToken = localStorage.getItem('appTkn')
    ApiSpotify.get(`/artists/${artistID}/top-tracks`, {
      params: {
        country: 'us',
        access_token: appToken
      }
    })
      .then(({ data }) => {
        dispatch({
          type: GET_TOP_TRACKS,
          payload: data
        });
      })
      .catch(({ data }) => {
        dispatch({
          type: ERROR,

        })
      })
  }
}

export function getUserAlbums() {
  return function (dispatch) {
    const userToken = localStorage.getItem('userToken')
    ApiSpotify.get(`/me/albums`, {
      params: {
        access_token: userToken
      }
    })
      .then(({ data }) => {
        dispatch({
          type: GET_USER_ALBUMS,
          payload: data.items
        });
      })
      .catch(({ data }) => {
        dispatch({
          type: ERROR,

        })
      })
  }
}

export function deleteUserAlbum(albumId) {
  return function (dispatch) {
    const userToken = localStorage.getItem('userToken')

    ApiSpotify.delete(`/me/albums/`, {
      headers: {
        Authorization: `Bearer ${userToken}`
      },
      params: {
        ids: albumId
      },
    })
      .then(() => {
        dispatch({
          type: DELETE_USER_ALBUM,
          payload: albumId
        })
      })
      .catch(({ error }) => {
        console.log(error)
      })
  }
}



export function getAlbumInfo(albumId) {
  return function (dispatch) {
    const appToken = localStorage.getItem('appTkn')
    ApiSpotify.get(`/albums/${albumId}`, {
      headers: {
        Authorization: `Bearer ${appToken}`
      },
    })
      .then(({ data }) => {
        dispatch({
          type: GET_ALBUM_INFO,
          payload: data
        })
      })
      .catch(({ error }) => {
        console.log(error)

      })
  }
}



export function getUserPlaylists() {
  return function (dispatch) {
    const userToken = localStorage.getItem('userToken')
    ApiSpotify.get(`/me/playlists`, {
      headers: {
        Authorization: `Bearer ${userToken}`
      },
    })
      .then(({ data }) => {

        dispatch({
          type: GET_USER_PLAYLISTS,
          payload: data
        })
      })
      .catch(({ error }) => {
        console.log(error)

      })
  }
}


export function getPlaylisDetails(id) {
  return function (dispatch) {
    const userToken = localStorage.getItem('userToken')
    ApiSpotify.get(`/playlists/${id}`, {
      headers: {
        Authorization: `Bearer ${userToken}`
      },
    })
      .then(({ data }) => {
        dispatch({
          type: GET_PLAYLIST_INFO,
          payload: data
        })
      })
      .catch(({ error }) => {
        console.log(error)
      })
  }
}

export function editUserPlaylisDetails({ id, name, description }) {
  return function (dispatch) {
    const userToken = localStorage.getItem('userToken')
    ApiSpotify.put(`/playlists/${id}`, { name, description }, {
      headers: {
        Authorization: `Bearer ${userToken}`
      },
    })
      .then(() => {
        dispatch({
          type: EDIT_USER_PLAYLIST_INFO,
          payload: { id, name, description }
        })
      })
      .catch(({ error }) => {
        console.log(error)
      })
  }
}