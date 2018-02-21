import * as types from '../../redux/types';
import { filterDishListData } from '../../redux/manipulations/dishDetailDataConvertor';

export function setMenuSearchActive() {
    return (dispatch, getState) => {
        dispatch({type: types.SET_MENU_SEARCH_ACTIVE});
    }
}

export function setMenuSearchInActive() {
    return (dispatch, getState) => {
        dispatch({type: types.SET_MENU_SEARCH_INACTIVE});
    }
}


export function setFavSearchActive() {
    return (dispatch, getState) => {
        dispatch({type: types.SET_FAV_SEARCH_ACTIVE});
    }
}

export function setFavSearchInActive() {
    return (dispatch, getState) => {
        dispatch({type: types.SET_FAV_SEARCH_INACTIVE});
    }
}

export function setMenuSearchValue(searchValue) {
    return (dispatch, getState) => {
        dispatch({type: types.SET_MENU_SEARCH_VALUE, searchValue});
        let filteredDishList = filterDishListData(getState().generalDishList.originalDishlist, searchValue);
        dispatch({type: types.SET_MODIFIED_DISH_LIST, data: filteredDishList});
    }
}

export function setFavSearchValue(searchValue) {
    return (dispatch, getState) => {
        dispatch({type: types.SET_FAV_SEARCH_VALUE, searchValue});
    }
}
