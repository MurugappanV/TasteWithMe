import React, { PureComponent } from "react";
import * as Colors from '../../../Constants/Colors';
import * as IconName from '../../../Constants/IconName';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View , Animated, PanResponder, Text} from "react-native";
import { fullFilterHeight, fullWidth, fullFilterWidth, basicCompStyles, sizes , fullFilterHeightNegate, halfFilterHeightNegate} from "../../../StyleSheets/styles";


const GESTURE_DELAY = 10;
const GESTURE_DELAY_NEGATE = -10;
class FilterUI extends PureComponent {


    constructor() {
        super()
        const position = new Animated.Value(0);
        const rotatedDegree = new Animated.Value(0);
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => false,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderTerminationRequest: (evt, gestureState) => false,
            onPanResponderMove: (evt, gestureState) => {
                if (gestureState.dx > GESTURE_DELAY || gestureState.dx < GESTURE_DELAY_NEGATE) {
                    let dxChange = Math.abs(gestureState.dx);
                    let noOf90Deg = (dxChange / (fullFilterHeight-50)) 
                    let noOf90DegWholeNum = noOf90Deg - (noOf90Deg % 1)
                    dxChange -= (noOf90DegWholeNum * (fullFilterHeight-50))
                    degreeChange = Math.asin(dxChange / (fullFilterHeight-50)) * 180 / Math.PI
                    degreeChange += (noOf90DegWholeNum * 90)
                    if(gestureState.dx < 0) {
                        degreeChange = degreeChange * -1;
                    }
                    console.log(`position-${degreeChange}`)
                    position.setValue(degreeChange);
                }
            },
            onPanResponderRelease: (evt, gestureState) => {
                console.log(`vel-----${gestureState.vx}<->${gestureState.vy}`)
                if (gestureState.dx > GESTURE_DELAY || gestureState.dx < GESTURE_DELAY_NEGATE) {
                    let dxChange = Math.abs(gestureState.dx);
                    let noOf90Deg = (dxChange / (fullFilterHeight-50)) 
                    let noOf90DegWholeNum = noOf90Deg - (noOf90Deg % 1)
                    dxChange -= (noOf90DegWholeNum * (fullFilterHeight-50))
                    degreeChange = Math.asin(dxChange / (fullFilterHeight-50)) * 180 / Math.PI
                    degreeChange += (noOf90DegWholeNum * 90)

                    let distance = (gestureState.vx * gestureState.vx) / (2 * 0.01)
                    let noOf90Degd = (distance / (fullFilterHeight-50)) 
                    let noOf90DegWholeNumd = noOf90Degd - (noOf90Degd % 1)
                    distance -= (noOf90DegWholeNumd * (fullFilterHeight-50))
                    degreeChanged = Math.asin(distance / (fullFilterHeight-50)) * 180 / Math.PI
                    degreeChanged += (noOf90DegWholeNumd * 90)
                    degreeChange += degreeChanged

                    if(gestureState.dx < 0) {
                        degreeChange = degreeChange * -1;
                    }
                    console.log(`deg chang----${degreeChange}`)
                    console.log(`distance----${distance}`)
                    Animated.decay(this.state.position, {
                        // toValue: degreeChange,
                        velocity: gestureState.vx / 4,
                        deceleration: 0.995,
                        useNativeDriver: true,
                    }).start(() => {
                        this.setState({ rotatedDegree: ((this.state.rotatedDegree + this.state.animatedValue) % 360) })
                        position.setValue(0);
                    });
                    
                }
                // if ((gestureState.dy > 0 && gestureState.dy < MIN_GESTURE_DISTANCE) || (gestureState.dy > 0 && this.state.isFilterOpen) ||
                //         (gestureState.dy < 0 && gestureState.dy > MIN_GESTURE_DISTANCE_NEGATE) || (gestureState.dy < 0 && !this.state.isFilterOpen) ) {
                //     Animated.timing(this.state.position, {
                //         toValue: { x: 0, y: this.state.isFilterOpen ? this.state.dragViewHideHeight : 0  },
                //         duration: 150,
                //     }).start(() => {
                //     });
                // } else {
                //     Animated.timing(this.state.position, {
                //         toValue: { x: 0, y: this.state.isFilterOpen ? 0 :  this.state.dragViewHideHeight },
                //         duration: 300,
                //     }).start(() => {
                //         this.setState({ isFilterOpen: !this.state.isFilterOpen })
                //     });
                // }
            },
        });
        this.panResponder = panResponder;
        this.state = { position , animatedValue : 0, rotatedDegree : 0}
    }


    render() {
        let itemleft = (fullWidth/2) - 50;
        let innerItemleft = fullFilterHeight - 50;
        let innerItemleft2 = fullFilterHeight - 150;
        let innerItemleft3 = fullFilterHeight - 250;
        let BigCircleDegree = Math.asin((fullWidth/2) / fullFilterHeight) * 180 / Math.PI
        let SmallCircleDegree = Math.asin((fullWidth/2) / (fullFilterHeight - 100)) * 180 / Math.PI
        this.state.position.addListener(({value}) => this.setState({animatedValue: value}));
        let animatedValueDeg = `${(this.state.animatedValue + this.state.rotatedDegree)}deg`;
        return <View style={sizes.contentFullHeightPad0}>
            <Text>{`degrees->${BigCircleDegree}`}</Text>
            <Text>{`smallCirdegrees->${SmallCircleDegree}`}</Text>
            <Text>{`degreeChange->${this.state.position}`}</Text>
            <Text>{animatedValueDeg}</Text>
            <Animated.View {...this.panResponder.panHandlers} style={{position: 'absolute', height: fullFilterWidth, width: fullFilterWidth, borderRadius: fullFilterHeight, backgroundColor: 'green', bottom: fullFilterHeightNegate, left: halfFilterHeightNegate, transform: [{rotate : animatedValueDeg}, {perspective: 1000},]}}>
                
                <View style={{transform: [{ rotate: '-20deg'}],position: 'absolute', height: fullFilterWidth, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: innerItemleft, alignItems: 'center'}}>
                    <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={'white'} />
                </View>
                <View style={{transform: [{ rotate: '0deg'}], position: 'absolute', height: fullFilterWidth, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: innerItemleft, alignItems: 'center'}}>
                    <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={'white'} />
                </View>
                <View style={{transform: [{ rotate: '20deg'}],position: 'absolute', height: fullFilterWidth, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: innerItemleft, alignItems: 'center'}}>
                    <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={'white'} />
                </View>
                <View style={{transform: [{ rotate: '-40deg'}],position: 'absolute', height: fullFilterWidth, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: innerItemleft, alignItems: 'center'}}>
                    <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={'white'} />
                </View>
                <View style={{transform: [{ rotate: '-60deg'}], position: 'absolute', height: fullFilterWidth, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: innerItemleft, alignItems: 'center'}}>
                    <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={'white'} />
                </View>
                <View style={{transform: [{ rotate: '-80deg'}],position: 'absolute', height: fullFilterWidth, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: innerItemleft, alignItems: 'center'}}>
                    <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={'white'} />
                </View>
                <View style={{transform: [{ rotate: '-100deg'}],position: 'absolute', height: fullFilterWidth, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: innerItemleft, alignItems: 'center'}}>
                    <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={'white'} />
                </View>
                <View style={{transform: [{ rotate: '-120deg'}], position: 'absolute', height: fullFilterWidth, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: innerItemleft, alignItems: 'center'}}>
                    <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={'white'} />
                </View>
                <View style={{transform: [{ rotate: '-140deg'}],position: 'absolute', height: fullFilterWidth, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: innerItemleft, alignItems: 'center'}}>
                    <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={'white'} />
                </View>
            </Animated.View>
            
        </View>   
    }
}


export default FilterUI;





// return <View  style={[basicCompStyles.fullSize, basicCompStyles.contentBackGround]}>
//             <Text >FILTER</Text>
//         </View>