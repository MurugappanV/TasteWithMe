import React, { PureComponent } from "react";
import { TabNavigator } from "react-navigation";
import Menu from './pages/Menu';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import HomeHeader from '../components/HomeHeader';
import * as Colors from '../Constants/Colors';
import * as Sizes from '../Constants/Sizes';
import { basicStyles } from '../StyleSheets/styles';
import * as IconName from '../Constants/IconName';

const proflieHeader = (navigation) => <HomeHeader key={'profile'}  headerTitle='TasteE' leftLogo={IconName.HOTEL_LOGO} navigation={navigation} isNavigateBack={false}/>
const menuHeader = (navigation) => <HomeHeader key={'menu'} headerTitle='TasteE' leftLogo={IconName.HOTEL_LOGO} navigation={navigation} searchLogo={IconName.SEARCH_ICON_NAME} searchPlaceHoler={'Search'} backLogo={IconName.BACK_ICON_NAME} closeLogo={IconName.CLOSE_ICON_NAME}  isNavigateBack={false}/>
const favHeader = (navigation) => <HomeHeader key={'fav'} headerTitle='TasteE' leftLogo={IconName.HOTEL_LOGO} navigation={navigation} searchLogo={IconName.SEARCH_ICON_NAME} searchPlaceHoler={'Search'} backLogo={IconName.BACK_ICON_NAME} closeLogo={IconName.CLOSE_ICON_NAME}  isNavigateBack={false}/>

const Home = TabNavigator({
        Menu: { screen: Menu, navigationOptions: { header: ({navigation}) => menuHeader(navigation) } },
        Favorites: { screen: Favorites, navigationOptions: { header: ({navigation}) => favHeader(navigation) } },
        Profile: { screen: Profile, navigationOptions: { header: ({navigation}) => proflieHeader(navigation) } },
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