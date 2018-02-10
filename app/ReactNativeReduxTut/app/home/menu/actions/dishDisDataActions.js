import * as types from '../../../redux/types';
import client from '../../../redux/apollo/client';
import {dishListByCourse} from '../graphql/quries';

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


function mapDishListRawData(inData) {
    let data = {};
    if(inData.allCourses) {
        data.dishList = inData.allCourses.map(courseObj => {
            let course = {};
            course.name = courseObj.name;
            course.dish = courseObj.dishDetailRelations.dishes.map(dishObj => {
                let dish = {};
                dish.name = dishObj.name;
                dish.type = dishObj.dishType;
                dish.photoUrl = dishObj.photoUrls;
                dish.rate = `₹${dishObj.rateDetalil.price}`;
                return dish;
            });
            return course;
        });
    }
    return data;
}