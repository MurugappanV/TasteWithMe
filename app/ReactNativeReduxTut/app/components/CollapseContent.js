import React, {PureComponent} from "react";
import { View, Text} from "react-native";
import { basicStyles } from '../StyleSheets/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as IconName from '../Constants/IconName';
import * as Sizes from '../Constants/Sizes';

const CollapseContent  = ({data, isCardView}) => {
    if(isCardView) {
        return <View style={basicStyles.dishListView}>
            <Icon name={IconName.VEG_INDICATE_ICON_NAME} size={Sizes.DEFAULT_ICON_SIZE} color={'green'} />
            <Text>manchow</Text>
            <Text>$40</Text>
        </View>
    } else {
        return <View><Text>Fries</Text>
            <Text>pop corn</Text>
            <Text>chicken 65</Text>
        </View>
    }
}

export default CollapseContent;