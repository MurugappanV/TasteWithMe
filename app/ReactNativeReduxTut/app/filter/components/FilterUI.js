import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import * as Colors from '../../Constants/Colors';
import { basicStyles } from '../../StyleSheets/styles';

class FilterUI extends PureComponent {

    render() {
        return <View  style={{ flex: 1,justifyContent: 'flex-end',alignItems: 'center', backgroundColor: Colors.LIGHT_BACKGROUND_COLOR }}>
            <Text >FILTER</Text>
        </View>
    }
}


export default FilterUI;