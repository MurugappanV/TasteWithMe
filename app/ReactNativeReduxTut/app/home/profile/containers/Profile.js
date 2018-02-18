import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Sizes from '../../../Constants/Sizes';
import * as IconName from '../../../Constants/IconName';
import * as Labels from '../../../Constants/Labels';
import UnderConstruction from '../../../components/UnderConstruction';
import { View , Animated, PanResponder, Text} from "react-native";
import { fullFilterHeight, fullWidth, fullFilterWidth, basicCompStyles, sizes , fullFilterHeightNegate, halfFilterHeightNegate} from "../../../StyleSheets/styles";
import FilterUI from "../../filter";

class Profile extends PureComponent {
    static navigationOptions = {
        tabBarLabel: Labels.PROFILE_TAB_LABEL,
        tabBarIcon: ({ tintColor }) => (
            <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={Sizes.DEFAULT_HEADER_ICON_SIZE+5} color={tintColor} />
        ),
    };

    

    render() {
        return <UnderConstruction label='Under Construction' iconName={IconName.UNDER_CONSTRUCTION_ICON_NAME}/>        
    }
}


function mapStateToProps(state) {
    return {
        
    }
}


export default connect(mapStateToProps)(Profile);