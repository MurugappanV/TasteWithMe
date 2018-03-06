import React, { PureComponent } from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { basicStyles, basicCompStyles } from '../../../../StyleSheets/styles';
import * as Labels from '../../../../Constants/Labels';
import * as Colors from '../../../../Constants/Colors';
import * as IconName from '../../../../Constants/IconName';
import CustomTouchable from '../../../../components/CustomTouchable';
import { googleLogin } from './FirebaseGoogleAuth';
import { facebookLogin } from './FirebaseFacebookAuth';
import Toast from 'react-native-simple-toast';

const validateEmail = (emailInput) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    return reg.test(emailInput)
}

export default class LoginDetailUI extends PureComponent {
    
    constructor(props) {
        super(props);
        this.state = {name: "", email: ""};
    }

    saveManualEntry = (saveUserDetails) => {
        if(this.state.name.length == 0) {
            Toast.show("Please enter your name", Toast.LONG)
            this.refs.nameInput.focus(); 
        } else if (!validateEmail(this.state.email)) {
            Toast.show("Please enter valid email id", Toast.LONG)
            this.refs.emailInput.focus(); 
        } else {
            saveUserDetails(this.state.name, this.state.email, null);
            // save in db
        }
    }

    render() {
        const { signOut, saveUserDetails } = this.props;
        return <View style={[basicStyles.fullContent, basicCompStyles.padding10pc]}>
            <Text style={basicStyles.darkHeaderText}>{"Congrats, Logged in successfully!!!"}</Text>
            <Text style={basicStyles.darkHeaderText}>{" "}</Text>
            <Text style={basicStyles.darkHeaderText}>{"Get bio details from"}</Text>
            <View style={basicCompStyles.flexRowNC}>
                <CustomTouchable onPress={() => googleLogin(saveUserDetails)}>
                    <Icon style={basicCompStyles.padding10pc} name={IconName.GOOGLE_LOGO_ICON_NAME} size={60} color={Colors.HEADER_BACKGROUND_COLOR} /> 
                </CustomTouchable>
                <Text style={basicStyles.darkHeaderText}>{"Or"}</Text>
                <CustomTouchable onPress={() => facebookLogin(saveUserDetails)}>
                    <Icon style={basicCompStyles.padding10pc} name={IconName.FACEBOOK_LOGO_ICON_NAME} size={60} color={Colors.HEADER_BACKGROUND_COLOR} />
                </CustomTouchable>
            </View>
            <Text style={basicStyles.darkHeaderText}>{"Or enter manually"}</Text> 
            <TextInput
                ref="nameInput"
                onSubmitEditing={(event) => { 
                    this.refs.emailInput.focus(); 
                }}
                returnKeyType={"next"}
                autoCorrect={false}
                underlineColorAndroid={Colors.DARK_TEXT_COLOR} 
                selectionColor={Colors.DARK_TEXT_COLOR}
                style={[basicCompStyles.darkTextInput, basicCompStyles.marginBottom15]}
                onChangeText={value => this.setState({ name : value })}
                placeholder={"Name"}
                placeholderTextColor={Colors.IN_ACTIVE_ICON_COLOR} 
                value={this.state.name}
            />
            <TextInput
                ref="emailInput"
                onSubmitEditing={this.saveManualEntry}
                returnKeyType={"done"}
                autoCorrect={false}
                underlineColorAndroid={Colors.DARK_TEXT_COLOR} 
                selectionColor={Colors.DARK_TEXT_COLOR}
                style={[basicCompStyles.darkTextInput, basicCompStyles.marginBottom15]}
                onChangeText={value => this.setState({ email: value })}
                placeholder={"Email"}
                placeholderTextColor={Colors.IN_ACTIVE_ICON_COLOR} 
                value={this.state.email}
            />
            <CustomTouchable style={[basicStyles.darkButton, basicCompStyles.alignSelfS]} onPress={this.saveManualEntry} >
                <Text style={[basicStyles.headerText, basicCompStyles.alignSelfC]}>{"Save"}</Text>
            </CustomTouchable> 
            <CustomTouchable style={[basicStyles.darkButtonRad0, basicCompStyles.absoluteBottomLeftRight0]} onPress={signOut} >
                <Text style={[basicStyles.headerText, basicCompStyles.alignSelfC]}>{"Sign Out"}</Text>
            </CustomTouchable> 
        </View>
    }
}

 