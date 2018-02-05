import React, {PureComponent} from "react";
import {View} from "react-native";
import {basicStyles} from '../StyleSheets/styles';
import AnimatedText from '../components/AnimatedText';
import AnimatedImage from '../components/AnimatedImage';
import { Container, Spinner } from 'native-base';


export default class SplashScreenUI extends PureComponent {
    render() {
        const zoomIn = { from: { scale: 1 }, to: { scale: 1.1 } };
        
        return <Container style={{backgroundColor: 'black'}}>  
            <AnimatedImage animationType={zoomIn} duration={2000} delay={0} style={basicStyles.fullSizeAbsolute} source={require('../../assets/images/splashscreenphoto.jpg')} resizeMode='cover'/>
            <View style={basicStyles.fullSizeColumnCC}>
                <AnimatedText animationType="fadeIn" iterationCount={1} duration={2000} delay={500} style={basicStyles.bigHeaderText} dispalyContent={this.props.displayText}/>
                <Spinner color='white' />
            </View>
        </Container>       
    }
}


