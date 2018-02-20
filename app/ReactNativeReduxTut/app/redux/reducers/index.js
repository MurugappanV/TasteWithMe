import { combineReducers } from 'redux';
import * as handleException from './handleException';
import { searchDataReducer} from '../../header';
import { initialDataReducer } from '../../splashScreen';
import { hotelDetDataReducer } from '../../aboutUs';
import { dishDisplayDataReducer } from '../../home/menu';
import { phoneAuthDataReducer } from '../../common/firebasePhoneAuth';

export default combineReducers(Object.assign(
    hotelDetDataReducer,
    dishDisplayDataReducer,
    phoneAuthDataReducer,
    handleException,
    searchDataReducer,
    initialDataReducer
));