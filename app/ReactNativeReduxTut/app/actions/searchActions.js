import * as types from './types';
//import Api from '../lib/api';
//import client from '../apollo/client';
//import {dishListByCourse} from '../graphql/quries';
//import { exception } from '../reducers/handleException';

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
        console.log('action state ----');
        console.log(getState().generalDishList.originalDishlist);
        let filteredDishList = filterDishListData(getState().generalDishList.originalDishlist, searchValue);
        dispatch({type: types.SET_MODIFIED_DISH_LIST, data: filteredDishList});
    }
}

export function setFavSearchValue(searchValue) {
    return (dispatch, getState) => {
        dispatch({type: types.SET_FAV_SEARCH_VALUE, searchValue});
    }
}


function filterDishListData(inData, searchValue) {
    if(inData.dishList) {
        inData.dishList = inData.dishList.map(courseObj => {
            courseObj.dish = courseObj.dish.filter(dishObj => (dishObj.name.toLowerCase().indexOf(searchValue.toLowerCase() >= 0)));
            return courseObj;
        });
    }
    return inData;
}