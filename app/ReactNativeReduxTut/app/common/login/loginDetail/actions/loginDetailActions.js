import * as types from '../../../../redux/types';
import client from '../../../../redux/apollo/client';
import { userByIdQuery } from '../graphql/quries';

export function getUserById(userId) {
    return (dispatch, getState) => {
        dispatch({type: types.USER_DETAILS_LOADING});
        client.query({
            query: userByIdQuery,
            variables: {id: userId}
        }).then((resp) => {
            if (resp.data) {
                dispatch({type: types.USER_DETAILS_LOADED, data: resp.data.User});
            }
            if(resp.errors) {
                 dispatch({ type: types.USER_DETAILS_ERROR, errors: resp.errors});
            }
        }).catch( (exception) => {
            dispatch({ type: types.EXCEPTION, exception: exception});
        });
    }
}