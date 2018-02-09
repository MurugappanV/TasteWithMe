import createReducer from '../../lib/createReducer';
import *  as types from '../../redux/types';
import *  as GeneralConstants from '../../Constants/GeneralConstants';

export const fetchHotelStatus = createReducer(0, {
    [types.FETCH_HOTEL_LOADING](state, action) {
         return GeneralConstants.LOADING;
    },
    [types.SET_HOTEL_DETAILS](state, action) {
        return GeneralConstants.LOADED;
    },
    [types.FETCH_HOTEL_ERROR](state, action) {
        return GeneralConstants.ERROR;
    }
});