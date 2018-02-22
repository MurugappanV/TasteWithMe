import { combineReducers } from 'redux';
import * as handleException from './handleException';
import { searchDataReducer} from '../../header';
import { initialDataReducer } from '../../splashScreen';
import { hotelDetDataReducer } from '../../aboutUs';
import { dishDisplayDataReducer } from '../../home/menu';
import { phoneAuthDataReducer } from '../../common/login/firebasePhoneAuth';
import { loginDetailDataReducer } from '../../common/login/loginDetail';

export default combineReducers(Object.assign(
    hotelDetDataReducer,
    dishDisplayDataReducer,
    phoneAuthDataReducer,
    loginDetailDataReducer,
    handleException,
    searchDataReducer,
    initialDataReducer
));