import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import { loginDetailDataActions } from "../actions/index";
import LoginDetailCheck from '../components/LoginDetailCheck';
import LoadingIndicator from '../../../../components/LoadingIndicator';
import { View } from 'react-native';

class LoginDetail extends PureComponent {

    constructor(props) {
        super(props)
        this.saveUserDetails = this.saveUserDetails.bind(this)
    }

    componentWillMount() {
        this.props.getUserById(this.props.userId)
    }

    saveUserDetails(name, email, photoUrl) {
        this.props.saveUserDetails(this.props.userId, name, email, photoUrl, this.props.userRegisteredPhoneNumber);
    }

    render() {
        const { children, signOut, userDetails, userDetailLoadingStatus } = this.props;
        return <LoginDetailCheck signOut={signOut} userDetails={userDetails} loadingStatus={userDetailLoadingStatus} saveUserDetails={this.saveUserDetails}>
            {children}
        </LoginDetailCheck>
    }

}

function mapStateToProps(state) {
  return {
      userRegisteredPhoneNumber: state.userRegisteredPhoneNumber,
      userId: state.userId,
      userDetailLoadingStatus: state.userProfileDetail.userDetailLoadingStatus,
      userDetails: state.userProfileDetail.userDetails,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(loginDetailDataActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginDetail);
