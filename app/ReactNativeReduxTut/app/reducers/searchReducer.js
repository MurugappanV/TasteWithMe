import createReducer from '../lib/createReducer';
import *  as types from '../actions/types';
import *  as GeneralConstants from '../Constants/GeneralConstants';

export const isMenuSearchActive = createReducer(false, {
    [types.SET_MENU_SEARCH_ACTIVE](state, action) {
         return true;
    },
    [types.SET_MENU_SEARCH_INACTIVE](state, action) {
        return false;
    },
});

export const menuSearchValue = createReducer('', {
    [types.SET_MENU_SEARCH_VALUE](state, action) {
         return action.searchValue;
    },
});

export const isFavSearchActive = createReducer(false, {
    [types.SET_FAV_SEARCH_ACTIVE](state, action) {
         return true;
    },
    [types.SET_FAV_SEARCH_INACTIVE](state, action) {
        return false;
    },
});

export const favSearchValue = createReducer('', {
    [types.SET_FAV_SEARCH_VALUE](state, action) {
         return action.searchValue;
    },
});