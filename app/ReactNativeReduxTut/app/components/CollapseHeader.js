import React, {PureComponent} from "react";
import { View, Text} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import * as IconName from '../Constants/IconName';
import * as Sizes from '../Constants/Sizes';
import * as Animatable from 'react-native-animatable';
import { basicStyles , basicCompStyles , animate } from '../StyleSheets/styles';

const CollapseHeader  = ({data, isCollapsed}) => {
    return <View style={basicStyles.subHeader}>
        <Text style={basicStyles.darkHeaderText}>{data.headerText}</Text>
        <Animatable.View transition="rotate" duration={500} style={animate(isCollapsed).rotation}>
            <Icon name={IconName.DROP_DOWN_ARROW_ICON_NAME} size={Sizes.DEFAULT_ICON_SIZE} style={[basicCompStyles.darkTextColor, {fontWeight: 'bold'}]}/>
        </Animatable.View>
    </View>
}

export default CollapseHeader;



{/* <Text style={{ fontSize: 16}}>{data.headerText}</Text> */}
    // style={basicStyles.headerText}
        {/* <Text >{`is collapsed = ${isCollapsed}`}</Text> */}
        {/* ios-arrow-dropdown  flexDirection: "row" , justifyContent:"center", alignContent:"center",  */}