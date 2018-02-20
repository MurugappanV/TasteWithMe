import * as types from '../../../redux/types';
import client from '../../../redux/apollo/client';
import { authenticateUser } from '../graphql/quries';
import { AsyncStorage } from 'react-native'

export function setPhoneNumber(phoneNumber) {
    return (dispatch, getState) => {
        dispatch({type: types.SET_PHONE_NUMBER, data: phoneNumber});
    }
}

export function setTokenId(token) {
    return (dispatch, getState) => {
        client.mutate({
            mutation: authenticateUser,
            variables: {firebaseToken: token}
        }).then((resp) => {
            console.log(`token -- resp`)
            console.log(resp)
            if (resp.data) {
                console.log(`token data -- ${resp.data.authenticateFirebaseUser.token}`)
                AsyncStorage.setItem('token', resp.data.authenticateFirebaseUser.token);
            }
        }).catch( (exception) => {
            dispatch({ type: types.EXCEPTION, exception: exception});
        });
    }
    // return (dispatch, getState) => {
    //     dispatch({type: types.SET_PHONE_NUMBER, data: phoneNumber});
    // }
} 