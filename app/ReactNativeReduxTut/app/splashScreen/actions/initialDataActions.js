import * as types from '../../redux/types';
import client from '../../redux/apollo/client';
import {hotel} from '../graphql/quries';

export function fetchInitialData() {
    return (dispatch, getState) => {
        dispatch({type: types.FETCH_HOTEL_LOADING,});
        client.query({
            query: hotel
        }).then((resp) => {
            if (resp.data) {
                dispatch({type: types.SET_HOTEL_DETAILS,});
            }
            if(resp.errors) {
                dispatch({ type: types.FETCH_HOTEL_ERROR,});
            }
        }).catch( (exception) => {
            dispatch({ type: types.EXCEPTION, exception: exception});
        });
    }
}

// export function addRecipe() {
//     return {
//         type: types.ADD_RECIPE,
//     }
// }

// export function setViewDimensions(event) {
//     let fullViewDimens = {
//         width: event.nativeEvent.layout.width,
//         height: event.nativeEvent.layout.height
//     }
//     console.log(fullViewDimens.width + " + " + fullViewDimens.height);
//     return {
//         type: types.SET_FULL_VIEW_DIMENSIONS,
//         state: fullViewDimens
//     }
// }

// function navigateForward(state) {
//     return {
//         type: types.FETCH_HOTEL_LOADING
//     }
// }

// export function fetchRecipes(dish) {
//     return (dispatch, getState) => {
//         console.log(getState());
//         client.query({
//             query: allUsers
//         }).then((resp) => {
//             console.log("gql ---> " + resp);
//             if (resp.data) {
//                 console.log("gql data - ");
//                 console.log(resp.data);
//             }
//             if(resp.errors) {
//                 console.log("gql errors - " + resp.errors);
//             }
//         }).catch( (ex) => {
//             console.log("gql exception " + ex);
//         });
//         // const params = [
//         //     `ingredients=${encodeURIComponent(dish)}`,
//         //     'fillIngredients=false',
//         //     'limitLicense=false',
//         //     'number=20',
//         //     'raning=1',
//         // ].join('&');
//         // return Api.get(``).then(resp => {
//         //     console.log(resp);
//         // }).catch(ex => {
//         //     console.log(ex);
//         // });
//         // const params = [
//         //     `i=${encodeURIComponent(dish)}`,
//         //     'p=1'
//         // ].join('&');
//         // return Api.get(`/posts`).then(resp => {
//         //     console.log(resp);
//         //     // dispatch(setSearchedRecipes({recipes: resp}));
//         // }).catch( (ex) => {
//         //     console.log(ex);
//         // });
//     }
// }