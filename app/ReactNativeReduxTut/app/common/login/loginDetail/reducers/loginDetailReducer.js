import createReducer from '../../../../lib/createReducer';
import *  as types from '../../../../redux/types';
import *  as GeneralConstants from '../../../../Constants/GeneralConstants';
import { mapUserDetails } from '../../../../redux/manipulations/userDetailDataConvertor';

const initialUserDetail = {
    userDetailLoadingStatus: 0,
    userDetails: {}
}

export const userProfileDetail = createReducer(initialUserDetail, {
    [types.USER_DETAILS_LOADING](state, action) {
         return {
             ...state,
             userDetailLoadingStatus: GeneralConstants.LOADING,
         }
    },
    [types.USER_DETAILS_LOADED](state, action) {
        return {
            ...state,
            userDetailLoadingStatus: GeneralConstants.LOADED,
            userDetails: mapUserDetails(action.data)
        };
    },
    [types.USER_DETAILS_ERROR](state, action) {
        return {
            ...state,
            userDetailLoadingStatus: GeneralConstants.ERROR,
        };
    },
});