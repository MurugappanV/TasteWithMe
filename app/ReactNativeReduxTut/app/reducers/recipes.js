import createReducer from '../lib/createReducer';
import *  as types from '../actions/types';

export const searchedRecipes = createReducer({}, {

});

export const recipeCount = createReducer(0, {
    [types.ADD_RECIPE](state, action) {
         return state + 10;
    }
});

export const fetchHotelStatus = createReducer(0, {
    [types.FETCH_HOTEL_LOADING](state, action) {
         return 1;
    },
    [types.SET_HOTEL_DETAILS](state, action) {
        return 2;
   }
});

// export const setViewDimensions = createReducer({width: 300, height: 300}, {
//     [types.SET_FULL_VIEW_DIMENSIONS](state, action) {
//         console.log(state.width + " - " + state.height );
//         return state;
//     }
// });