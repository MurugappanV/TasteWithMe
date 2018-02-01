import React, {Component} from "react";
import {Image} from "react-native";
import * as Animatable from 'react-native-animatable';

export default class AnimatedImage extends Component {
    render() {
        return <Animatable.Image 
        animation={this.props.animationType} 
        duration={this.props.duration} 
        iterationCount={1} 
        delay={this.props.delay} 
        style={this.props.style}
        source={this.props.source} 
        resizeMode={this.props.resizeMode}
        />       
    }
}