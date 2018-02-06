import { combineReducers } from 'redux';
import * as hotelDetails from './hotelDetails';
import * as dishListDetails from './dishListDetails';
import * as handleException from './handleException';

export default combineReducers(Object.assign(
    hotelDetails,
    dishListDetails,
    handleException
));