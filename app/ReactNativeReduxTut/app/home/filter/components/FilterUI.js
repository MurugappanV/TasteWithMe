import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import * as Colors from '../../../Constants/Colors';
import { basicStyles, basicCompStyles } from '../../../StyleSheets/styles';

class FilterUI extends PureComponent {

    render() {
        return <View  style={[basicCompStyles.fullSize, basicCompStyles.contentBackGround]}>
            <Text >FILTER</Text>
        </View>
    }
}


export default FilterUI;