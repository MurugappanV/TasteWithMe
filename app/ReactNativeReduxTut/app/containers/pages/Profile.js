import React, {PureComponent} from "react";
import {ScrollView, View, TextInput, Image, TouchableHighlight, StyleSheet, Text} from "react-native";
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Sizes from '../../Constants/Sizes';
import * as IconName from '../../Constants/IconName';
import * as Labels from '../../Constants/Labels';

class Profile extends PureComponent {
    static navigationOptions = {
        tabBarLabel: Labels.PROFILE_TAB_LABEL,
        tabBarIcon: ({ tintColor }) => (
            <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={Sizes.DEFAULT_HEADER_ICON_SIZE+5} color={tintColor} />
        ),
    };

    render() {
        return <View>
        <Text>Dummy line </Text>
        <Text>Profile </Text>
        </View>        
    }
}


function mapStateToProps(state) {
    return {
        
    }
}


export default connect(mapStateToProps)(Profile);