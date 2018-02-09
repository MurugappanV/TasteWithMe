import * as types from './types';
import Api from '../lib/api';
import client from '../apollo/client';
import {hotelDetailByID} from '../graphql/quries';
import { exception } from '../reducers/handleException';

export function hotelDetailById(hotelID) {
    return (dispatch, getState) => {
        client.query({
            query: hotelDetailByID
        }).then((resp) => {
            if (resp.data) {
                dispatch({type: types.FETCH_HOTEL_DETAIL, data: mapHotelDetails(resp.data)});
            }
            if(resp.errors) {
                 dispatch({ type: types.FETCH_HOTEL_DETAIL_ERROR, errors: resp.errors});
            }
        }).catch( (exception) => {
            dispatch({ type: types.EXCEPTION, exception: exception});
        });
    }
}

function mapHotelDetails(inData) {
    console.log("indata ---")
    console.log(inData)
    let data = {
        hotel: {
            ...inData.Hotel,
            hotelImages: {
                ...inData.Hotel.hotelImages,
                hotelImageUrls: inData.Hotel.hotelImages.hotelImageUrls.map((imageUrl) => {
                    return imageUrl
                })
            },
            hotelDetail: {
                ...inData.Hotel.hotelDetail,
                openingTime: "",
                closingTime: ""
            }
        }
    };
    return data;
}