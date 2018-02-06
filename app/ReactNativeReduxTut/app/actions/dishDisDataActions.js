import * as types from './types';
import Api from '../lib/api';
import client from '../apollo/client';
import {hotel} from '../graphql/quries';
import { exception } from '../reducers/handleException';

export function dishList() {
    return (dispatch, getState) => {
        dispatch({type: types.DISH_LIST_LOADING,});
        client.query({
            query: hotel
        }).then((resp) => {
            if (resp.data) {
                dispatch({type: types.SET_DISH_LIST, data: resp.data});
            }
            if(resp.errors) {
                dispatch({ type: types.DISH_LIST_ERROR, errors: resp.errors});
            }
        }).catch( (exception) => {
            dispatch({ type: types.EXCEPTION, exception: exception});
        });
    }
}