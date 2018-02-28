import React, { PureComponent } from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { basicStyles, basicCompStyles } from '../../../../StyleSheets/styles';
import * as Labels from '../../../../Constants/Labels';
import * as Colors from '../../../../Constants/Colors';
import * as IconName from '../../../../Constants/IconName';
import CustomTouchable from '../../../../components/CustomTouchable';
import { googleLogin } from './FirebaseGoogleAuth';

export default class LoginDetailUI extends PureComponent {
    render() {
        const { signOut } = this.props;
        return <View style={basicStyles.fullContent}>
            <Text style={basicStyles.darkHeaderText}>{"Get bio details from"}</Text>
            <View style={basicCompStyles.flexRowNC}>
                <CustomTouchable onPress={googleLogin}>
                    <Icon style={basicCompStyles.padding10pc} name={IconName.GOOGLE_LOGO_ICON_NAME} size={60} color={Colors.HEADER_BACKGROUND_COLOR} /> 
                </CustomTouchable>
                <Text style={basicStyles.darkHeaderText}>{"Or"}</Text>
                <CustomTouchable>
                    <Icon style={basicCompStyles.padding10pc} name={IconName.FACEBOOK_LOGO_ICON_NAME} size={60} color={Colors.HEADER_BACKGROUND_COLOR} />
                </CustomTouchable>
            </View>
            <Text style={basicStyles.darkHeaderText}>{"Or enter manually"}</Text> 
             <TextInput
                onSubmitEditing={() => {}}
                underlineColorAndroid={Colors.DARK_TEXT_COLOR} 
                selectionColor={Colors.DARK_TEXT_COLOR}
                style={[basicCompStyles.darkTextInput, basicCompStyles.marginBottom15]}
                onChangeText={value => {}}
                placeholder={"Name"}
                placeholderTextColor={Colors.IN_ACTIVE_ICON_COLOR} 
                value={''}
            />
            <TextInput
                onSubmitEditing={() => {}}
                underlineColorAndroid={Colors.DARK_TEXT_COLOR} 
                selectionColor={Colors.DARK_TEXT_COLOR}
                style={[basicCompStyles.darkTextInput, basicCompStyles.marginBottom15]}
                onChangeText={value => {}}
                placeholder={"Email"}
                placeholderTextColor={Colors.IN_ACTIVE_ICON_COLOR} 
                value={''}
            />
            <CustomTouchable style={basicStyles.darkButton} onPress={() => {}} >
                <Text style={basicStyles.headerText}>{"Save"}</Text>
            </CustomTouchable> 
            <CustomTouchable style={basicStyles.darkButton} onPress={() => signOut} >
                <Text style={basicStyles.headerText}>{"Sign Out"}</Text>
            </CustomTouchable> 
        </View>
    }
}

 