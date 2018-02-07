import React, {PureComponent} from "react";
import {View, Text} from "react-native";
import {connect} from 'react-redux';
import * as IconName from '../../Constants/IconName';
import HomeHeader from '../../components/HomeHeader';
import UnderConstruction from '../../components/UnderConstruction';

class AboutUs extends PureComponent {
    static navigationOptions = {
        header: ({navigation}) =>  <HomeHeader headerTitle='About Us' backLogo={IconName.BACK_ICON_NAME} navigation={navigation} isNavigateBack={true}/>
    };

    render() {
        return <UnderConstruction label='Under Construction' iconName={IconName.UNDER_CONSTRUCTION_ICON_NAME}/>     
    }
}


function mapStateToProps(state) {
    return {
        
    }
}


export default connect(mapStateToProps)(AboutUs);