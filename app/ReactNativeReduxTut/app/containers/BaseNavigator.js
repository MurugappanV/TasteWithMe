import React, {PureComponent} from "react";
import { StackNavigator } from "react-navigation";
import Home from './Home';
import AboutUs from '../aboutUs';
import DishDetails from "../dishDetail";

const BaseNavigator = StackNavigator({
    Home: { screen: Home },
    DishDetails: { screen: DishDetails },
    AboutUs: { screen: AboutUs },
  });


export default BaseNavigator;