import React, { PureComponent } from "react";
import { TabNavigator } from "react-navigation";
import Menu from './pages/Menu';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import HomeHeader from '../components/HomeHeader';
import * as Colors from '../Constants/Colors';
import * as Sizes from '../Constants/Sizes';
import { basicStyles } from '../StyleSheets/styles';

const Home = TabNavigator({
        Menu: { screen: Menu, navigationOptions: { header: <HomeHeader/> } },
        Favorites: { screen: Favorites, navigationOptions: { header: null } },
        Profile: { screen: Profile, navigationOptions: { header: null } },
    }, {
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: Colors.ACTIVE_ICON_COLOR,
            inactiveTintColor: Colors.IN_ACTIVE_ICON_COLOR,
            showIcon: true,
            showLabel: false,
            style: basicStyles.pageHeader,
            indicatorStyle: basicStyles.activeBackGround
        },
    }
);




export default Home;