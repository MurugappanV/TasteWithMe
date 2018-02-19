import createReducer from '../../../lib/createReducer';
import *  as types from '../../../redux/types';
import *  as GeneralConstants from '../../../Constants/GeneralConstants';

export const userRegisteredPhoneNumber = createReducer('', {
    [types.SET_PHONE_NUMBER](state, action) {
         return action.data;
    },
});