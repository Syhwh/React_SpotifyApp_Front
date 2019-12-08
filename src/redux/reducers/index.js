import { combineReducers } from 'redux';
import userReducer from './userReducer';
import propertyReducer from './propertyReducer';
import agencyReducer from './agencyReducer';

export default combineReducers({
    user: userReducer,
    property: propertyReducer,
    agency: agencyReducer
})