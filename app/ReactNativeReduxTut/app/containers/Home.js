import React, {Component} from "react";
import { TabNavigator } from "react-navigation";
import Menu from './pages/Menu';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';

const Home = TabNavigator({
    Menu: { screen: Menu, navigationOptions: { header: null } },
    Favorites: { screen: Favorites, navigationOptions: { header: null } },
    Profile: { screen: Profile, navigationOptions: { header: null }},
  },{
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#f90b0b',
      inactiveTintColor: '#949292',
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: '#f7f7f7',
        height: 60,
        paddingTop: 5,
      },
      indicatorStyle: {
        backgroundColor: '#f90b0b',
      }
    },
  }
);




export default Home;