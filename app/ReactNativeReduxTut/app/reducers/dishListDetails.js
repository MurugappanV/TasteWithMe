import createReducer from '../lib/createReducer';
import *  as types from '../actions/types';
import GeneralConstants from '../Constants/GeneralConstants';

export const generalDishList = createReducer({}, {
    [types.SET_DISH_LIST](state, action) {
         return {};
    },
    [types.DISH_LIST_LOADING](state, action) {
        return {};
    },
    [types.DISH_LIST_ERROR](state, action) {
        return {};
    },
});

export const isDIshListLoading = createReducer(0, {
    [types.SET_DISH_LIST](state, action) {
         return GeneralConstants.LOADED;
    },
    [types.DISH_LIST_LOADING](state, action) {
        return GeneralConstants.LOADING;
    },
    [types.DISH_LIST_ERROR](state, action) {
        return GeneralConstants.ERROR;
    },
});