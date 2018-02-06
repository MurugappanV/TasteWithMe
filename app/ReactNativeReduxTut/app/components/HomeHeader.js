import React, {PureComponent} from "react";
import {TouchableOpacity, Text, View} from "react-native";
import { basicStyles, basicCompStyles } from '../StyleSheets/styles';
import Icon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import * as Sizes from '../Constants/Sizes';
import * as Colors from '../Constants/Colors';

const backButton = (backLogo, navigation) => {
    if(backLogo) {
        return <TouchableOpacity onPress={() => navigation.goBack()}>
            <IonIcon style={basicCompStyles.paddingLR10} name={backLogo} size={Sizes.DEFAULT_HEADER_ICON_SIZE} color={Colors.ACTIVE_ICON_COLOR} />
        </TouchableOpacity>
    }
}

const logo = (logo, navigation) => {
    if(logo) {
        return <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
            <Icon style={basicCompStyles.paddingLR10} name={logo} size={Sizes.DEFAULT_HEADER_ICON_SIZE} color={Colors.ACTIVE_ICON_COLOR} />
        </TouchableOpacity>
    }
}

const HomeHeader = (props) => {
    return <View style={[basicStyles.pageHeader,{flexDirection: 'row', padding: Sizes.DEFAULT_PADDING, alignItems: 'center'}]}>
            {backButton(props.backLogo, props.navigation)}
            {logo(props.leftLogo, props.navigation)}
            <Text style={basicStyles.paddedHeaderText}>{props.headerTitle}</Text>
    </View>      
}

export default HomeHeader;
