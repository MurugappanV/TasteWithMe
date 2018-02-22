import React, { PureComponent } from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { basicStyles, basicCompStyles } from '../../../../StyleSheets/styles';
import * as Labels from '../../../../Constants/Labels';
import * as Colors from '../../../../Constants/Colors';
import * as IconName from '../../../../Constants/IconName';
import CustomTouchable from '../../../../components/CustomTouchable';

export default class LoginDetailUI extends PureComponent {
    render() {
        return <View></View>
    }
}

// {/* <Text style={basicStyles.darkHeaderText}>{Labels.LOGIN_TITLE}</Text>
//             <View style={basicCompStyles.flexRow}>
//                 <CustomTouchable>
//                     <Icon style={basicCompStyles.padding10pc} name={IconName.GOOGLE_LOGO_ICON_NAME} size={60} color={Colors.HEADER_BACKGROUND_COLOR} /> 
//                 </CustomTouchable>
//                 <CustomTouchable>
//                     <Icon style={basicCompStyles.padding10pc} name={IconName.FACEBOOK_LOGO_ICON_NAME} size={60} color={Colors.HEADER_BACKGROUND_COLOR} />
//                 </CustomTouchable>
//             </View> */}
//             {/* <TextInput
//                 onSubmitEditing={() => {}}
//                 underlineColorAndroid={Colors.DARK_TEXT_COLOR} 
//                 selectionColor={Colors.DARK_TEXT_COLOR}
//                 style={[basicCompStyles.darkTextInput, basicCompStyles.marginBottom15]}
//                 onChangeText={value => {}}
//                 placeholder={Labels.PHONE_NUMBER_PLACEHOLDER}
//                 placeholderTextColor={Colors.IN_ACTIVE_ICON_COLOR} 
//                 value={''}
//             />
//             <CustomTouchable style={basicStyles.darkButton} onPress={() => {}} >
//                 <Text style={basicStyles.headerText}>{Labels.SEND_VERIFICATION_CODE}</Text>
//             </CustomTouchable> */}