import React, {PureComponent} from "react";
import {View, Text, Button} from "react-native";
import IonIcon from 'react-native-vector-icons/Ionicons';
import { basicStyles } from '../StyleSheets/styles';
import * as Colors from '../Constants/Colors';

const UnderConstruction = (props) => {
    return <View style={basicStyles.fullContent}>
        <IonIcon name={props.iconName} size={100} color={Colors.HEADER_BACKGROUND_COLOR} />
        <Text style={basicStyles.darkHeaderText}>{props.label}</Text>
        
        <Button title="Sign Out" color="red" onPress={() => props.signOut()}/>
        {props.children}
    </View>        
}

export default UnderConstruction;

//import * as IconName from '../../Constants/IconName';
//Under Construction
//IconName.UNDER_CONSTRUCTION_ICON_NAME