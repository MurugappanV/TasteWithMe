import React, {Component} from "react";
import { TabNavigator } from "react-navigation";
import Menu from './pages/Menu';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';

class Home extends Component {
  static navigationOptions = {
    header: null,
  };


  render() {
    return (
      <HomeTabNavigator />
    );
  }
}

const HomeTabNavigator = TabNavigator({
    Menu: { screen: Menu },
    Favorites: { screen: Favorites },
    Profile: { screen: Profile},
  },{
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#f90b0b',
      inactiveTintColor: '#949292',
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: '#f7f7f7',
      },
      indicatorStyle: {
        backgroundColor: '#f90b0b',
      }
    },
  }
);




export default Home;