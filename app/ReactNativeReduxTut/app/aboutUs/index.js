import React, {PureComponent} from "react";
import AboutUs from "./containers/AboutUs";
import HomeHeader from '../header';
import * as IconName from '../Constants/IconName';

export default class AboutUsIndex extends PureComponent {
    static navigationOptions = {
        header: ({navigation}) =>  <HomeHeader headerTitle='About Us' backLogo={IconName.BACK_ICON_NAME} navigation={navigation} isNavigateBack={true}/>
    };

    render() {
        return <AboutUs/>
    }
}