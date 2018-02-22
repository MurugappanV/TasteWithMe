import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import { loginDetailDataActions } from "../actions/index";
import LoginDetailCheck from '../components/LoginDetailCheck';
import LoadingIndicator from '../../../../components/LoadingIndicator';

class LoginDetail extends PureComponent {

//   setUserPhoneNumber = (phoneNumber) => {
//     this.props.setPhoneNumber(phoneNumber);
//   }

//   setTokenId = (token) => {
//     this.props.setTokenId(token);
//   }

//   renderItem = () => {
//       if()
//   }

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getUserById(this.props.userId)
    }

    render() {
        return <View>
            {this.props.children}
        </View>
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
