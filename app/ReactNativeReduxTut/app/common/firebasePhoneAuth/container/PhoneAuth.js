import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import { phoneAuthDataActions } from "../actions/index";
// import { View, Button, Text, TextInput, Image } from 'react-native';
// import firebase from 'react-native-firebase';
// import PhoneNumberInput from '../components/PhoneNumberInput';
// import PhoneAuthUI from '../components/PhoneAuthUI';
// import Toast from 'react-native-simple-toast';
// import { basicCompStyles } from '../../../StyleSheets/styles';

class PhoneAuth extends Component {

  setUserPhoneNumber = (phoneNumber) => {
    this.props.setPhoneNumber(phoneNumber);
  }

  render() {
    return <PhoneAuthUI userPhoneNumber={this.props.userRegisteredPhoneNumber} setPhoneNumber={this.setUserPhoneNumber}>
      {this.props.children}
    </PhoneAuthUI>
  }

}

function mapStateToProps(state) {
  return {
      userRegisteredPhoneNumber: state.userRegisteredPhoneNumber
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(phoneAuthDataActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(PhoneAuth);