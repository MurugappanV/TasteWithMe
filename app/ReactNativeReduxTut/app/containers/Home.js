import React, {Component} from "react";
import { TabNavigator } from "react-navigation";
import Menu from './pages/Menu';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';



const Home = TabNavigator({
    Menu: { screen: Menu },
    Favorites: { screen: Favorites },
    Profile: { screen: Profile},
  });




export default Home;