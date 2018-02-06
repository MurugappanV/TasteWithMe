import createReducer from '../lib/createReducer';
import *  as types from '../actions/types';

export const exception = createReducer(null, {
    [types.EXCEPTION](state, action) {
         return action.exception;
    },
    [types.CLEAR_EXCEPTION_MSG](state, action) {
        return null
    }
});