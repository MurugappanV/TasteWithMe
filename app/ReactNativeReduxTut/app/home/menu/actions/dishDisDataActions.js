import * as types from '../../../redux/types';
import client from '../../../redux/apollo/client';
import {dishListByCourse} from '../graphql/quries';
import { mapDishListRawData } from '../../../redux/manipulations/dishDetailDataConvertor';

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

