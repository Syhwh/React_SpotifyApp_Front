import { combineReducers } from 'redux';
import userReducer from './userReducer';
import apiReducer from './apiReducer';

export default combineReducers({
    user: userReducer,
    apiData: apiReducer
})