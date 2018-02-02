import React, {Component} from "react";
import {ScrollView, Button, View, TextInput, Image, TouchableHighlight, StyleSheet, Text} from "react-native";
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Favorites extends Component {
    static navigationOptions = {
        tabBarLabel: "mensu",
        tabBarIcon: ({ tintColor }) => (
            <Icon name="favorite" style={{fontWeight: "regular"}} size={25} color={tintColor} />
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