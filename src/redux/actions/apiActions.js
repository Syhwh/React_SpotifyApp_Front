import ApiSpotify from '../../utils/ApiSpotify';
import { API_SEARCH, GET_ARTIST, GET_TOP_TRACKS, ERROR } from './types';



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
        console.log(data)
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
        //getTopTracks(artistID)
      })
      .catch(({ data }) => {
        dispatch({
          type: ERROR,

        })
      })
  }
}

export function getTopTracks(artistID) {
  console.log('artistID in action' + artistID)
  return function (dispatch) {
    const appToken = localStorage.getItem('appTkn')
    ApiSpotify.get(`/artists/${artistID}/top-tracks`, {
      params: {
        country: 'us',
        access_token: appToken
      }
    })
      .then(({ data }) => {
        console.log(data)
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