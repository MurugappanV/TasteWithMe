import { combineReducers } from 'redux';
import * as handleException from './handleException';
import * as searchReducer from './searchReducer';
import * as initialDataReducer from '../splashScreen/reducers/initialDataReducer';
import * as fetchHotelDetails from '../aboutUs/reducers/hotelDetails';
import * as dishListDetails from '../menu/reducers/dishListDetails';

export default combineReducers(Object.assign(
    fetchHotelDetails,
    dishListDetails,
    handleException,
    searchReducer,
    initialDataReducer
));