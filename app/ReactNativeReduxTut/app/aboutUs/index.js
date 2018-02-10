import React, {PureComponent} from "react";
import AboutUs from "./containers/AboutUs";
import HomeHeader from '../header';
import * as IconName from '../Constants/IconName';
import * as hotelDetReducer from './reducers/hotelDetails';

export default class AboutUsIndex extends PureComponent {
    static navigationOptions = {
        header: ({navigation}) =>  <HomeHeader headerTitle='About Us' backLogo={IconName.BACK_ICON_NAME} navigation={navigation} isNavigateBack={true}/>
    };

    render() {
        return <AboutUs/>
    }
}

export const hotelDetDataReducer = Object.assign({},
    hotelDetReducer,
);