import createReducer from '../lib/createReducer';
import *  as types from '../actions/types';
import *  as GeneralConstants from '../Constants/GeneralConstants';

let dishList = {
    originalDishlist: {},
    presentDishList: {}
}

export const generalDishList = createReducer(dishList, {
    [types.SET_DISH_LIST](state, action) {
        return {
            ...state,
            originalDishlist: {
                ...action.data,
                dishList: action.data.dishList.map((courseObj) => {
                    return {
                        ...courseObj,
                        dish: courseObj.dish.map((dishObj) => {
                            return {
                                ...dishObj,
                            }
                        })
                    }
                })
            },
            presentDishList: {
                ...action.data,
                dishList: action.data.dishList.map((courseObj) => {
                    return {
                        ...courseObj,
                        dish: courseObj.dish.map((dishObj) => {
                            return {
                                ...dishObj,
                            }
                        })
                    }
                })
            }
        };
    },
    [types.SET_MODIFIED_DISH_LIST](state, action) {
        return {
            ...state,
            presentDishList: {
                ...action.data,
                dishList: action.data.dishList.map((courseObj) => {
                    return {
                        ...courseObj,
                        dish: courseObj.dish.map((dishObj) => {
                            return {
                                ...dishObj,
                            }
                        })
                    }
                })
            }
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