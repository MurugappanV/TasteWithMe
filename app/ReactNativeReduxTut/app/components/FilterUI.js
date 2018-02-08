import React, { PureComponent } from "react";
import { FlatList, PanResponder, TouchableHighlight, Animated, ScrollView, View, TextInput, Image, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import * as Sizes from '../Constants/Sizes';
import * as Colors from '../Constants/Colors';
import * as IconName from '../Constants/IconName';
import * as Labels from '../Constants/Labels';
import { basicStyles, fullWidth , contentFullHeight } from '../StyleSheets/styles';

class FilterUI extends PureComponent {

    render() {
        return <View  style={{ flex: 1,justifyContent: 'flex-end',alignItems: 'center', backgroundColor: Colors.LIGHT_BACKGROUND_COLOR }}>
            <Text >FILTER</Text>
        </View>
    }
}


export default FilterUI;