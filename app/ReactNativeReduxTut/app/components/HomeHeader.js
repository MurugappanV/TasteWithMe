import React, {PureComponent} from "react";
import {Text, View} from "react-native";
import { basicStyles } from '../StyleSheets/styles';
import Icon from 'react-native-vector-icons/Entypo';
import * as Sizes from '../Constants/Sizes';
import * as Colors from '../Constants/Colors';
import * as IconName from '../Constants/IconName';

export default class HomeHeader extends PureComponent {
    render() {
        return <View style={basicStyles.pageHeader}>
            <View style={{flexDirection: 'row'}}>
            <Icon name={IconName.MENU_TAB_ICON_NAME} size={Sizes.DEFAULT_HEADER_ICON_SIZE} color={Colors.ACTIVE_ICON_COLOR} />
                
            </View>
        </View>      
    }
}


{/* <Animatable.Text                                              emoji-happy
        animation={this.props.animationType} 
        duration={this.props.duration} 
        iterationCount={this.props.iterationCount} 
        delay={this.props.delay} 
        style={this.props.style}
        >{this.props.dispalyContent}
        </Animatable.Text>  */}