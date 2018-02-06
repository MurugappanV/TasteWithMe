import * as types from './types';
import Api from '../lib/api';
import client from '../apollo/client';
import {dishListByCourse} from '../graphql/quries';
import { exception } from '../reducers/handleException';

export function dishList() {
    return (dispatch, getState) => {
        dispatch({type: types.DISH_LIST_LOADING,});
        client.query({
            query: dishListByCourse
        }).then((resp) => {
            if (resp.data) {
                dispatch({type: types.SET_DISH_LIST, data: mapDishListRawData(resp.data)});
            }
            if(resp.errors) {
                dispatch({ type: types.DISH_LIST_ERROR, errors: resp.errors});
            }
        }).catch( (exception) => {
            dispatch({ type: types.EXCEPTION, exception: exception});
        });
    }
}


function mapDishListRawData(data) {
    let dishList = [];
    if(data.allCourses) {
        dishList = data.allCourses.map(courseObj => {
            let course = {};
            course.name = courseObj.name;
            course.dish = courseObj.dishDetailRelations.dishes.map(dishObj => {
                let dish = {};
                dish.name = dishObj.name;
                dish.photoUrl = dishObj.photoUrls;
                dish.rate = `₹${dishObj.rateDetalil.price}`;
                return dish;
            });
            return course;
        });
    }
    return dishList;
}