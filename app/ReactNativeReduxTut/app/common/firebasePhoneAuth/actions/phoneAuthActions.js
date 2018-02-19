import * as types from '../../../redux/types';
import client from '../../../redux/apollo/client';

export function setPhoneNumber(phoneNumber) {
    return (dispatch, getState) => {
        dispatch({type: types.SET_PHONE_NUMBER, data: phoneNumber});
    }
}