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
    renderLoginCheck() {
        if(this.props.userDetails.phoneNo == null) {
            return this.props.children
        } else {
            <LoginDetailUI />
        }
    }

    render() {
        return <LoadingIndicator loadingStatus={this.props.loadingStatus} spinnerColor={Colors.MEDIUM_INDICATOR_COLOR} containerStyle={basicStyles.fullContentPad0}>
            {this.renderLoginCheck()}
        </LoadingIndicator>
    }
}