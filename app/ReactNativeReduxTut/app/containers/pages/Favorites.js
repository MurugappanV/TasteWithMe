import React, {PureComponent} from "react";
import {ScrollView, Button, View, TextInput, Image, TouchableHighlight, StyleSheet, Text} from "react-native";
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Sizes from '../../Constants/Sizes';
import * as IconName from '../../Constants/IconName';
import * as Labels from '../../Constants/Labels';

class Favorites extends PureComponent {
    static navigationOptions = {
        tabBarLabel: Labels.FAVORITE_TAB_LABEL,
        tabBarIcon: ({ tintColor }) => (
            <Icon name={IconName.FAVORITE_TAB_ICON_NAME} size={Sizes.DEFAULT_HEADER_ICON_SIZE} color={tintColor} />
        ),
    };

    render() {
        return <View>
        <Text>Dummy line </Text>
        <Text>Favorites </Text>
        <Button
            onPress={() => this.props.navigation.navigate('DishDetails', { user: 'Lucy' })}
            title="Chat with Lucy"
        />
        </View>        
    }
}


function mapStateToProps(state) {
    return {
        
    }
}


export default connect(mapStateToProps)(Favorites);