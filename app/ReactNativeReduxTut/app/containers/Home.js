import React, { PureComponent } from "react";
import { TabNavigator } from "react-navigation";
import HomeHeader from '../header';
import * as Colors from '../Constants/Colors';
import { basicStyles } from '../StyleSheets/styles';
import * as IconName from '../Constants/IconName';
import Favorites from "../favorites/containers/Favorites";
import Profile from "../profile/containers/Profile";
import Menu from "../menu/containers/Menu";

const proflieHeader = (navigation) => <HomeHeader key={'profile'}  headerTitle='TasteE' leftLogo={IconName.HOTEL_LOGO} navigation={navigation} isNavigateBack={false}/>
const menuHeader = (navigation) => <HomeHeader key={'menu'} isMenu={true} headerTitle='TasteE' leftLogo={IconName.HOTEL_LOGO} navigation={navigation} searchLogo={IconName.SEARCH_ICON_NAME} searchPlaceHoler={'Search'} backLogo={IconName.BACK_ICON_NAME} closeLogo={IconName.CLOSE_ICON_NAME}  isNavigateBack={false}/>
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