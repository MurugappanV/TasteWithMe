import Menu from "./containers/Menu";
import * as dishDetReducer from './reducers/dishListDetails';

export default Menu;

export const dishDisplayDataReducer = Object.assign({},
    dishDetReducer,
);