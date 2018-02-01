import React, {Component} from "react";
import {Animated , Platform, Easing, ScrollView, View, TextInput, Image, TouchableHighlight, StyleSheet, Text} from "react-native";
import {connect} from 'react-redux';
import SplashScreenUI from '../components/SplashScreenUI';
import { fetchInitialData } from "../actions/recipes";
import BaseNavigator from './BaseNavigator';
import timer from 'react-native-timer';

class SplashScreen extends Component {
    constructor () {
        super()
        this.state = {
            isDelayed: false, 
        }
    }

    delay() {
        timer.setTimeout(this, 'delay',() => {
            this.setState({isDelayed: true})
        }, 2000);
    }

    componentDidMount () {
        this.props.fetchInitialData();
        this.delay();
    }

    componentWillUnmount() {
        timer.clearTimeout(this);
    }

    render() {
        // return <View><Home/></View>
        return (() => { 
            
            if(this.state.isDelayed && this.props.fetchHotelStatus == 2 ) {
                return <BaseNavigator />
            } else {
                return <SplashScreenUI fetchHotelStatus={this.props.fetchHotelStatus}/>
            }
        })()
        
    }
}

function mapStateToProps(state) {
    return {
        fetchHotelStatus: state.fetchHotelStatus
    }
}


export default connect(mapStateToProps)(SplashScreen);







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