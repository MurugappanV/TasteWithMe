import React, {PureComponent} from "react";
import { StackNavigator } from "react-navigation";
import DishDetails from './pages/DishDetails';
import Home from './Home';
import AboutUs from "./pages/AboutUs";

const BaseNavigator = StackNavigator({
    Home: { screen: Home },
    DishDetails: { screen: DishDetails },
    AboutUs: { screen: AboutUs },
  });


export default BaseNavigator;