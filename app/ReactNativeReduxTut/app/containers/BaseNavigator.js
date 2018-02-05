import React, {PureComponent} from "react";
import { StackNavigator } from "react-navigation";
import DishDetails from './pages/DishDetails';
import Home from './Home';

const BaseNavigator = StackNavigator({
    Home: { screen: Home },
    DishDetails: { screen: DishDetails },
  });


export default BaseNavigator;