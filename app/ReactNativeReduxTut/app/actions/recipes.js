import * as types from './types';
import Api from '../lib/api';
import client from '../apollo/client';
import { allUsers } from '../graphql/quries';

export function addRecipe() {
    return {
        type: types.ADD_RECIPE,
    }
}

export function fetchRecipes(dish) {
    return (dispatch, getState) => {
        console.log(getState());
        client.query({
            query: allUsers
        }).then((resp) => {
            console.log("gql ---> " + resp);
            if (resp.data) {
                console.log("gql data - ");
                console.log(resp.data);
            }
            if(resp.errors) {
                console.log("gql errors - " + resp.errors);
            }
        }).catch( (ex) => {
            console.log("gql exception " + ex);
        });
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
        // const params = [
        //     `i=${encodeURIComponent(dish)}`,
        //     'p=1'
        // ].join('&');
        // return Api.get(`/posts`).then(resp => {
        //     console.log(resp);
        //     // dispatch(setSearchedRecipes({recipes: resp}));
        // }).catch( (ex) => {
        //     console.log(ex);
        // });
    }
}