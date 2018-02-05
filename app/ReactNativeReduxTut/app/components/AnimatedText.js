import React, {PureComponent} from "react";
import {Text} from "react-native";
import * as Animatable from 'react-native-animatable';

export default class AnimatedText extends PureComponent {
    render() {
        return <Animatable.Text 
        animation={this.props.animationType} 
        duration={this.props.duration} 
        iterationCount={this.props.iterationCount} 
        delay={this.props.delay} 
        style={this.props.style}
        >{this.props.dispalyContent}
        </Animatable.Text>        
    }
}