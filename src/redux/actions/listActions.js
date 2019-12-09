
import ApiRE from '../../utils/ApiConfiguration';
import {
  PROPERTY_CREATE,
  PROPERTY_READ,
  PROPERTY_UPDATE,
  PROPERTY_DELETE,
  PROPERTY_DETAILS,
  PROPERTY_SEARCH,
  ERROR
} from './types';



export function createProperty(propertyData) {
  return function (dispatch) {
    console.log('propertyData')
    console.log(propertyData)
    const token = localStorage.getItem('token');
    ApiRE.post('/property', propertyData, {
      headers: {
        authorization: token
      }
    }).then(({ data }) => {
      dispatch({
        type: PROPERTY_CREATE,
        payload: data
      });
    }).catch(({ data }) => {
      dispatch({
        type: ERROR,
        // payload: data.message
      })
    })
  }
}

export function propertyList() {
  return function (dispatch) {
    ApiRE.get('/property')
      .then(({ data }) => {
        dispatch({
          type: PROPERTY_READ,
          payload: data.properties,
          loading: false
        });
      })
      .catch(({ data }) => {
        dispatch({
          type: ERROR,
          //  payload: data.message
        });
      })
  }
}
export function editProperty(id, propertyData) {
  return function (dispatch) {
    const token = localStorage.getItem('token')
    ApiRE.put(`/property/:${id}`, propertyData, {
      headers: {
        authorization: token
      }
    }).then(({ data }) => {
      dispatch({
        type: PROPERTY_UPDATE,
        payload: data
      });
    }).catch(({ data }) => {
      dispatch({
        type: ERROR,
        payload: data.message
      });
    })
  }
}


export function deleteProperty(id) {
  return function (dispatch) {
    const token = localStorage.getItem('token')
    ApiRE.delete(`/property/:${id}`, null, {
      headers: {
        authorization: token
      }
    }).then(({ data }) => {
      dispatch({
        type: PROPERTY_DELETE,
      });
    }).catch(({ data }) => {
      dispatch({
        type: ERROR,
        payload: data.message
      });
    })
  }
}

export function getPropertyDetails(id) {
  return function (dispatch) {
    ApiRE.get(`/property/${id}`)
      .then(({ data }) => {
        dispatch({
          type: PROPERTY_DETAILS,
          payload: data.property,
          loading: false
        });
      }).catch(({ data }) => {
        dispatch({
          type: ERROR,
          //payload: data.message
        });
      });
  }
}

export function propertySearch(params) {
  return function (dispatch) {
    ApiRE.get(`/search`, { params })
      .then(({ data }) => {
        console.log(data)
        dispatch({
          type: PROPERTY_SEARCH,
          payload: data.searchResult,
          loading: false
        });
      }).catch(({ data }) => {
        dispatch({
          type: ERROR,
          //payload: data.message
        });
      });
  }
}