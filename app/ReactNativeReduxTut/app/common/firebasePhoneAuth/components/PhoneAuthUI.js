import React, { Component } from 'react';
import { View, Button, Text, TextInput, Image } from 'react-native';
import firebase from 'react-native-firebase';
import Toast from 'react-native-simple-toast';
import PhoneNumberInput from './PhoneNumberInput';
import VerificationCodeInput from './VerificationCodeInput';
import { basicCompStyles } from '../../../StyleSheets/styles';

export default class PhoneAuthUI extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      message: '',
      confirmResult: null,
    };
    this.renderMessage = this.renderMessage.bind(this)
    this.signIn = this.signIn.bind(this)
    this.signOut = this.signOut.bind(this)
    this.confirmCode = this.confirmCode.bind(this)
    this.changeNumber = this.changeNumber.bind(this)
    this.resendCode = this.resendCode.bind(this)
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken(false)
        .then(token => {
          console.log('set token')
          console.log(token)
          this.props.setTokenId(token);
        }).catch(error => {
          console.log(`error ${error}`); 
          return null 
        })
        this.setState({ user: user.toJSON() });
      } else {
        this.setState({
          user: null,
          message: '',
          confirmResult: null,
        });
      }
    });
  }

  componentWillUnmount() {
     if (this.unsubscribe) this.unsubscribe();
  }

  signIn = (phoneNumber) => {
    this.props.setPhoneNumber(phoneNumber)
    this.setState({ message: 'Sending code ...' });
    firebase.auth().signInWithPhoneNumber(phoneNumber)
      .then(confirmResult =>  {
        this.setState({ confirmResult, message: 'Code has been sent!' })
      })
      .catch(error => {
        let msg = error.message.substr(0, error.message.indexOf('.'))
        this.setState({ message: `Error during sign in : ${msg}` })
      }
       
      );
  };

  resendCode = () => {
    this.signIn(this.props.userPhoneNumber)
    
  }

  changeNumber = () => {
    this.setState({
      confirmResult: null,
      message: ''
    });
  }

  confirmCode = (codeInput) => {
    const { confirmResult } = this.state;
    if (confirmResult && codeInput.length) {
      confirmResult.confirm(codeInput)
        .then((user) => {
          this.setState({ message: 'Code Confirmed!' });
        })
        .catch(error => {
            let msg = error.message.substr(0, error.message.indexOf('.'))
            this.setState({ message: `Code Confirm Error: ${msg}` })
        });
    }
  };

  signOut = () => {
    this.props.setPhoneNumber('')
    firebase.auth().signOut();
  }

  renderMessage = (message) => {
    if (!!message.length) Toast.show(message, Toast.LONG)
  }

  render() {
    const { user, confirmResult, message } = this.state;
    const { children } = this.props;
    this.renderMessage(message)
    return (
      <View style={basicCompStyles.fullSize}>
        {!user && !confirmResult && <PhoneNumberInput signIn={this.signIn} phoneNumber={this.props.userPhoneNumber}/>}
        {!user && confirmResult && <VerificationCodeInput confirmCode={this.confirmCode} resendCode={this.resendCode} changeNumber={this.changeNumber}/>}
        {user && React.Children.map(children, child => React.cloneElement(child, { signOut: this.signOut }))}
      </View>
    );
  }
}