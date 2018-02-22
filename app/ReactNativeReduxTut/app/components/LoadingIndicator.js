import React, {PureComponent} from "react";
import {View, Text} from "react-native";
import IonIcon from 'react-native-vector-icons/Ionicons';
import * as GeneralConstants from '../Constants/GeneralConstants';
import { Spinner } from 'native-base';

const renderItem = (loadingStatus, spinnerColor, children) => {
    if(loadingStatus != GeneralConstants.LOADED) {
        return <Spinner color={spinnerColor} />
    } else {
        return children
    }
}

const LoadingIndicator = (props) => {
    return <View style={props.containerStyle}>
        {renderItem(props.loadingStatus, props.spinnerColor, props.children)}
    </View>        
}

export default LoadingIndicator;