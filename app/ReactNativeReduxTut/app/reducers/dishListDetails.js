import createReducer from '../lib/createReducer';
import *  as types from '../actions/types';
import *  as GeneralConstants from '../Constants/GeneralConstants';

export const generalDishList = createReducer([], {
    [types.SET_DISH_LIST](state, action) {
        return action.data;
    },
    [types.DISH_LIST_LOADING](state, action) {
        return state;
    },
    [types.DISH_LIST_ERROR](state, action) {
        return state;
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