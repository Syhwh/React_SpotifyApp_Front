import ApiRE from '../../utils/ApiConfiguration';
import { AGENCY_REGISTER, AGENCY_LOGIN, AGENCY_LOGOUT, AGENCY_UPDATE, ERROR } from './types';



export function signUpAgency(userData) {
  return function (dispatch) {
    ApiRE.post('/agency/register', userData)
      .then(({ data }) => {
        dispatch({
          type: AGENCY_REGISTER,
          payload: userData
        });
        localStorage.setItem('token', data.token)
      })
      .catch(({ data }) => {
        dispatch({
          type: ERROR,
         // payload: data.message
        })
      })
  }
}

export function loginAgency(userData, callback) {
  return function (dispatch) {
    ApiRE.post('/agency/login', userData)
      .then(({ data }) => {     
        dispatch({
          type: AGENCY_LOGIN,
          payload:data.user
        });
        localStorage.setItem('token', data.token);
        callback();
      })
      .catch(({ data }) => {
        dispatch({
          type: ERROR,
          // payload: data.message
        });
      })
  }
}
export function logOutAgency() {
  return function (dispatch) {
    const token = localStorage.getItem('token')
    ApiRE.post('/logout', null, {
      headers: {
        authorization: token
      }
    })
      .then(({ data }) => {
        dispatch({
          type: AGENCY_LOGOUT
        });
        localStorage.removeItem('token')
      })
      .catch(({ data }) => {
        dispatch({
          type: ERROR,
          payload: data.message
        });
      })
  }
}

export function editAgency(id, userData) {
  return function (dispatch) {
    const token = localStorage.getItem('token')
    ApiRE.put(`/user/:${id}`, userData, {
      headers: {
        authorization: token
      }
    })
      .then(({ data }) => {
        dispatch({
          type: AGENCY_UPDATE,
          payload: data
        });
      })
      .catch(({ data }) => {
        dispatch({
          type: ERROR,
          payload: data.message
        });
      })
  }
}