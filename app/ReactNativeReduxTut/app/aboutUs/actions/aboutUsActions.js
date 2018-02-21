import * as types from '../../redux/types';
import client from "../../redux/apollo/client";
import { hotelDetailByID } from '../graphql/quries';

export function hotelDetailById(hotelID) {
    return (dispatch, getState) => {
        dispatch({type: types.FETCH_HOTEL_DETAIL_LOADING});
        client.query({
            query: hotelDetailByID,
            variables: {Id: hotelID}
        }).then((resp) => {
            if (resp.data) {
                dispatch({type: types.FETCH_HOTEL_DETAIL, data: resp.data});
            }
            if(resp.errors) {
                 dispatch({ type: types.FETCH_HOTEL_DETAIL_ERROR, errors: resp.errors});
            }
        }).catch( (exception) => {
            dispatch({ type: types.EXCEPTION, exception: exception});
        });
    }
}

