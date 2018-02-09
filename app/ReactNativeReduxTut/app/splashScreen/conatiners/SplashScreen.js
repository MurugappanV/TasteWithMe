import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import timer from 'react-native-timer';
import SplashScreenUI from '../components/SplashScreenUI';
import { initialDataActions } from "../actions";
import * as GeneralConstants from '../../Constants/GeneralConstants';

class SplashScreen extends PureComponent {
    constructor () {
        super()
        this.state = { isDelayed: false, }
    }

    componentDidMount () {
        this.props.fetchInitialData();
        this.delay();
    }

    componentWillUnmount() {
        timer.clearTimeout(this);
    }

    delay() {
        timer.setTimeout(this, 'delay',() => {
            this.setState({isDelayed: true})
        }, GeneralConstants.SPLASH_SCREEN_MIN_TIME);
    }

    render() {
        let {NextPage} = this.props
        return (() => { 
            if(this.state.isDelayed && this.props.fetchHotelStatus == GeneralConstants.LOADED) {
                return <NextPage/>
            } else {
                return <SplashScreenUI displayText={GeneralConstants.SPLASH_SCREEN_TEXT}/>
            }
        })()
    }
}

function mapStateToProps(state) {
    return {
        fetchHotelStatus: state.fetchHotelStatus
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(initialDataActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(SplashScreen);







    // searchRecipes() {
    //     this.props.fetchRecipes('banana');
    // }

// timing () {
//     this.springValue.setValue(0)
//     Animated.timing(
//       this.springValue,
//       {
//         toValue: 1,
//         duration: 1000,
//         easing: Easing.linear
//       }
//     ).start()
// }






// spring () {
//     this.springValue.setValue(0.8)
//     Animated.spring(
//       this.springValue,
//       {
//         toValue: 1,
//         friction: 2
//       }
//     ).start()
// }