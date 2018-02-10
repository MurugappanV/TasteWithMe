import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Sizes from '../../../Constants/Sizes';
import * as IconName from '../../../Constants/IconName';
import * as Labels from '../../../Constants/Labels';
import UnderConstruction from '../../../components/UnderConstruction';
import { View , Animated, PanResponder, Text} from "react-native";
import { fullFilterHeight, fullWidth, fullFilterWidth, basicCompStyles, sizes , fullFilterHeightNegate, halfFilterHeightNegate} from "../../../StyleSheets/styles";
const GESTURE_DELAY = 10;
const GESTURE_DELAY_NEGATE = -10;
class Profile extends PureComponent {
    static navigationOptions = {
        tabBarLabel: Labels.PROFILE_TAB_LABEL,
        tabBarIcon: ({ tintColor }) => (
            <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={Sizes.DEFAULT_HEADER_ICON_SIZE+5} color={tintColor} />
        ),
    };

    constructor() {
        super()
        const position = new Animated.Value(0);
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => false,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderTerminationRequest: (evt, gestureState) => false,
            onPanResponderMove: (evt, gestureState) => {
                console.log(`${gestureState.dx}<->${gestureState.dy}`)
                if (gestureState.dx > GESTURE_DELAY || gestureState.dx < GESTURE_DELAY_NEGATE) {
                    let dxChange = Math.abs(gestureState.dx);
                    degreeChange = Math.asin(dxChange / (fullFilterHeight-50)) * 180 / Math.PI
                    console.log(`${degreeChange}`)
                    position.setValue(degreeChange);
                }
            },
            onPanResponderRelease: (evt, gestureState) => {
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
        this.state = { position }
    }

    render() {
        let itemleft = (fullWidth/2) - 50;
        let BigCircleDegree = Math.asin((fullWidth/2) / fullFilterHeight) * 180 / Math.PI
        let SmallCircleDegree = Math.asin((fullWidth/2) / (fullFilterHeight - 100)) * 180 / Math.PI
        this.state.position.addListener(({value}) => this._value = value);
        return <View style={sizes.contentFullHeightPad0}>
            {/* <UnderConstruction label='Under Construction' iconName={IconName.UNDER_CONSTRUCTION_ICON_NAME}/> */}
            <Text>{`degrees->${BigCircleDegree}`}</Text>
            <Text>{`smallCirdegrees->${SmallCircleDegree}`}</Text>
            <Text>{`degreeChange->${this.state.position}`}</Text>
            <Text>{this.state.position._value}</Text>
            <View {...this.panResponder.panHandlers} style={{position: 'absolute', height: fullFilterWidth, width: fullFilterWidth, borderRadius: fullFilterHeight, backgroundColor: 'green', bottom: fullFilterHeightNegate, left: halfFilterHeightNegate}}>
                
            </View>
            <View style={{transform: [{ rotate: '0deg'}], position: 'absolute', height: fullFilterWidth, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: fullFilterHeightNegate, left: itemleft, alignItems: 'center'}}>
                <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={'white'} />
            </View>
            <View style={{transform: [{ rotate: '20deg'}],position: 'absolute', height: fullFilterWidth, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: fullFilterHeightNegate, left: itemleft, alignItems: 'center'}}>
                <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={'white'} />
            </View>
            <View style={{transform: [{ rotate: '-20deg'}],position: 'absolute', height: fullFilterWidth, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: fullFilterHeightNegate, left: itemleft, alignItems: 'center'}}>
                <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={'white'} />
            </View>
        </View>        
    }
}


function mapStateToProps(state) {
    return {
        
    }
}


export default connect(mapStateToProps)(Profile);