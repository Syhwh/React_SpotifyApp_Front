import { combineReducers } from 'redux';
import userReducer from './userReducer';
import listReducer from './listReducer';
import apiReducer from './apiReducer';

export default combineReducers({
    user: userReducer,
    lists: listReducer,
    apiData: apiReducer
})