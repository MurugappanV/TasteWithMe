import createReducer from '../../../lib/createReducer';
import *  as types from '../../../redux/types';
import *  as GeneralConstants from '../../../Constants/GeneralConstants';
import { mapDishListData } from '../../../redux/manipulations/dishDetailDataConvertor';

let dishList = {
    originalDishlist: {},
    presentDishList: {}
}

export const generalDishList = createReducer(dishList, {
    [types.SET_DISH_LIST](state, action) {
        return {
            ...state,
            originalDishlist: mapDishListData(action.data),
            presentDishList: mapDishListData(action.data)
        };
    },
    [types.SET_MODIFIED_DISH_LIST](state, action) {
        return {
            ...state,
            presentDishList: mapDishListData(action.data)
        };
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