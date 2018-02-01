import React, {Component} from "react";
import {ScrollView, View, TextInput, Image, TouchableHighlight, StyleSheet, Text} from "react-native";
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';

class Menu extends Component {
    static navigationOptions = {
        tabBarLabel: "mensu",
        tabBarIcon: ({ tintColor }) => (
            <Icon name="cake" style={{fontWeight: "regular"}} size={20} color={tintColor} />
        ),
    };

    render() {
        return <View>
            <Text>Dummy line </Text>
            <Text>Menu </Text>
        </View>        
    }
}


function mapStateToProps(state) {
    return {
        
    }
}


export default connect(mapStateToProps)(Menu);