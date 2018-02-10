import HomeHeader from "./containers/HomeHeader";
import * as searchReducer from './reducers/searchReducer';

export default HomeHeader

export const searchDataReducer = Object.assign({},
    searchReducer,
);