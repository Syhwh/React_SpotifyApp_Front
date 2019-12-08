import ApiRE from '../../utils/ApiConfiguration';
import { USER_REGISTER, USER_LOGIN, USER_LOGOUT, USER_UPDATE, USER_INFO, ERROR } from './types';

export function signUpUser(userData) {
  return function (dispatch) {
    ApiRE.post('/register', userData)
      .then(({ data }) => {
        dispatch({
          type: USER_REGISTER,
          //  payload: userData
        });
        // localStorage.setItem('token', data.token)
      })
      .catch((error) => {
        console.dir(error)
        dispatch({
          type: ERROR,
          // payload: data.message
        })
      })
  }
}

export function loginUser(userData, callback) {
  return function (dispatch) {
    ApiRE.post('/login', userData)
      .then(({ data }) => {
        console.log('response login user')
        console.log(data)
        dispatch({
          type: USER_LOGIN,
          payload: data.user
        });
        localStorage.setItem('token', data.token);
        callback(data.user._id);
      })
      .catch(({ data }) => {
        dispatch({
          type: ERROR,
          //payload: data.error.message
        });
      })
  }
}
export function logOutUser() {
  return function (dispatch) {
    const token = localStorage.getItem('token')
    ApiRE.post('/logout', null, {
      headers: {
        authorization: token
      }
    })
      .then(({ data }) => {
        dispatch({
          type: USER_LOGOUT
        });
        localStorage.removeItem('token')
      })
      .catch(({ data }) => {
        dispatch({
          type: ERROR,
          //  payload: data.error.message
        });
      })
  }
}

export function editUser(id, userData) {
  return function (dispatch) {
    const token = localStorage.getItem('token')
    ApiRE.put(`/user/${id}`, userData, {
      headers: {
        authorization: token
      }
    })
      .then(({ data }) => {
        console.log('response edit user')
        console.log(data)
        dispatch({
          type: USER_UPDATE,
          payload: data.user
        });

      })
      .catch(({ data }) => {
        dispatch({
          type: ERROR,
          // payload: data.message
        });
      })
  }
}
export function getUser(id) {
  return function (dispatch) {
    const token = localStorage.getItem('token')
    ApiRE.get(`/user/${id}`, {
      headers: {
        authorization: token
      }
    })
      .then(({ data }) => {
        console.log('response get user')
        console.log(data)
        dispatch({
          type: USER_INFO,
          payload: data.user
        });

      })
      .catch(({ data }) => {
        dispatch({
          type: ERROR,
          // payload: data.message
        });
      })
  }
}