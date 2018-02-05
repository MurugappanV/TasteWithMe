import React, {PureComponent} from "react";
import {View, Text} from "react-native";
import {connect} from 'react-redux';

class DishDetails extends PureComponent {

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