import * as types from './types';
import Api from '../lib/api';

export function addRecipe() {
    return {
        type: types.ADD_RECIPE,
    }
}

export function fetchRecipes(dish) {
    return (dispatch, getState) => {
        console.log(getState());
        // const params = [
        //     `ingredients=${encodeURIComponent(dish)}`,
        //     'fillIngredients=false',
        //     'limitLicense=false',
        //     'number=20',
        //     'raning=1',
        // ].join('&');
        // return Api.get(``).then(resp => {
        //     console.log(resp);
        // }).catch(ex => {
        //     console.log(ex);
        // });
        const params = [
            `i=${encodeURIComponent(dish)}`,
            'p=1'
        ].join('&');
        return Api.get(`/posts`).then(resp => {
            console.log(resp);
            // dispatch(setSearchedRecipes({recipes: resp}));
        }).catch( (ex) => {
            console.log(ex);
        });
    }
}