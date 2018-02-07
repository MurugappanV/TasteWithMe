import createReducer from '../lib/createReducer';
import *  as types from '../actions/types';
import *  as GeneralConstants from '../Constants/GeneralConstants';

let dishList = {
    originalDishlist: {},
    presentDishList: {}
}

export const generalDishList = createReducer(dishList, {
    [types.SET_DISH_LIST](state, action) {
        console.log(`reduce${types.SET_DISH_LIST}`);
        dishList.originalDishlist = action.data;
        dishList.presentDishList = action.data;
        return dishList;
    },
    [types.SET_MODIFIED_DISH_LIST](state, action) {
        console.log(`reduce${types.SET_MODIFIED_DISH_LIST}`);
        dishList.presentDishList = action.data;
        return dishList;
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