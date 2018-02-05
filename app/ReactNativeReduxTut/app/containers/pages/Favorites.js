import React, {PureComponent} from "react";
import {ScrollView, Button, View, TextInput, Image, TouchableHighlight, StyleSheet, Text} from "react-native";
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import * as Sizes from '../../Constants/Sizes';
import * as IconName from '../../Constants/IconName';
import * as Colors from '../../Constants/Colors';
import * as Labels from '../../Constants/Labels';
import { basicStyles } from '../../StyleSheets/styles';

class Favorites extends PureComponent {
    static navigationOptions = {
        tabBarLabel: Labels.FAVORITE_TAB_LABEL,
        tabBarIcon: ({ tintColor }) => (
            <Icon name={IconName.FAVORITE_TAB_ICON_NAME} size={Sizes.DEFAULT_HEADER_ICON_SIZE} color={tintColor} />
        ),
    };

    render() {
        return <View style={basicStyles.fullContent}>
            <IonIcon name={IconName.UNDER_CONSTRUCTION_ICON_NAME} size={100} color={Colors.HEADER_BACKGROUND_COLOR} />
            <Text style={basicStyles.darkHeaderText}>Under Construction</Text>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('DishDetails')}>
                <Text style={basicStyles.darkHeaderText}>Go to details page >></Text>
            </TouchableHighlight>
        </View>        
    }
}


function mapStateToProps(state) {
    return {
        
    }
}


export default connect(mapStateToProps)(Favorites);




{/* <View>
        <Text>Dummy line </Text>
        <Text>Favorites </Text>
        <Button
            onPress={() => this.props.navigation.navigate('DishDetails', { user: 'Lucy' })}
            title="Chat with Lucy"
        />
        </View> */}