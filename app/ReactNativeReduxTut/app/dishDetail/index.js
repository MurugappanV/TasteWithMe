import React, {PureComponent} from "react";
import DishDetails from "./containers/DishDetails";
import HomeHeader from '../header';
import * as IconName from '../Constants/IconName';

export default class DishDetailIndex extends PureComponent {
    static navigationOptions = {
        header: ({navigation}) =>  <HomeHeader headerTitle='Dish Details' leftLogo={IconName.HOTEL_LOGO} backLogo={IconName.BACK_ICON_NAME} navigation={navigation} isNavigateBack={true}/>
    };

    render() {
        return <DishDetails />
    }
}