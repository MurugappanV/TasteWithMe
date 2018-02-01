import React, {Component} from "react";
import {ScrollView, View, TextInput, Image, TouchableHighlight, StyleSheet, Text} from "react-native";
import {connect} from 'react-redux';

class DishDetails extends Component {

    render() {
        return <View>
        <Text>Dummy line </Text>
        <Text>DishDetails </Text>
        </View>        
    }
}


function mapStateToProps(state) {
    return {
        
    }
}


export default connect(mapStateToProps)(DishDetails);