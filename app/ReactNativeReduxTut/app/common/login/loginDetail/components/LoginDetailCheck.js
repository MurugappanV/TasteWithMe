import React, { PureComponent } from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { basicStyles, basicCompStyles } from '../../../../StyleSheets/styles';
import * as Labels from '../../../../Constants/Labels';
import * as Colors from '../../../../Constants/Colors';
import * as IconName from '../../../../Constants/IconName';
import CustomTouchable from '../../../../components/CustomTouchable';
import LoadingIndicator from '../../../../components/LoadingIndicator';
import LoginDetailUI from './LoginDetailUI';

export default class LoginDetailCheck extends PureComponent {
    renderLoginCheck(children, signOut, userDetails) {
        if(userDetails.phoneNo != null) {
            return React.Children.map(children, child => React.cloneElement(child, { signOut: signOut }))
        } else {
            return <LoginDetailUI signOut={signOut}/>
        }
    }

    render() {
        const { children, signOut, userDetails, loadingStatus } = this.props;
        return <LoadingIndicator loadingStatus={loadingStatus} spinnerColor={Colors.MEDIUM_INDICATOR_COLOR} containerStyle={basicStyles.fullContentPad0}>
            {this.renderLoginCheck(children, signOut, userDetails)}
        </LoadingIndicator>
    }
}