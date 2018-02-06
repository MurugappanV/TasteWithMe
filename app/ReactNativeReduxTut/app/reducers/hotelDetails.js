import createReducer from '../lib/createReducer';
import *  as types from '../actions/types';
import *  as GeneralConstants from '../Constants/GeneralConstants';

export const fetchHotelStatus = createReducer(0, {
    [types.FETCH_HOTEL_LOADING](state, action) {
         return GeneralConstants.LOADING;
    },
    [types.SET_HOTEL_DETAILS](state, action) {
        return GeneralConstants.LOADED;
    },
    [types.FETCH_HOTEL_ERROR](state, action) {
        return GeneralConstants.ERROR;
    }
});

// export const setViewDimensions = createReducer({width: 300, height: 300}, {
//     [types.SET_FULL_VIEW_DIMENSIONS](state, action) {
//         console.log(state.width + " - " + state.height );
//         return state;
//     }
// });

// export const searchedRecipes = createReducer({}, {

// });

// export const recipeCount = createReducer(0, {
//     [types.ADD_RECIPE](state, action) {
//          return state + 10;
//     }
// });