import React, {PureComponent} from "react";
import {ScrollView, View, TextInput, Image, TouchableHighlight, StyleSheet, Text} from "react-native";
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import * as Sizes from '../../Constants/Sizes';
import * as IconName from '../../Constants/IconName';
import * as Colors from '../../Constants/Colors';
import * as Labels from '../../Constants/Labels';
import { basicStyles } from '../../StyleSheets/styles';
import UnderConstruction from '../../components/UnderConstruction';

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