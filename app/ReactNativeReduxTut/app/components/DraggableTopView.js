import React, { PureComponent } from "react";
import { FlatList, PanResponder, Animated, View } from "react-native";
import { basicStyles, sizes, fullWidth, contentFullHeight, basicCompStyles } from '../StyleSheets/styles';

const GESTURE_DELAY = 10;
const GESTURE_DELAY_NEGATE = -10;
const MIN_GESTURE_DISTANCE = 50;
const MIN_GESTURE_DISTANCE_NEGATE = -50;
class DraggableTopView extends PureComponent {

    constructor() {
        super()
        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => false,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderTerminationRequest: (evt, gestureState) => false,
            onPanResponderMove: (evt, gestureState) => {
                if (gestureState.dy > GESTURE_DELAY) {
                    let newY = gestureState.dy - GESTURE_DELAY;
                    newY = newY % this.state.dragViewHideHeight
                    if(!this.state.isFilterOpen) {
                        position.setValue({ x: 0, y: newY });
                    }
                }
                if (gestureState.dy < GESTURE_DELAY_NEGATE) {
                    let newY = this.state.dragViewHideHeight + gestureState.dy + GESTURE_DELAY;
                    if(newY < 0) {newY = 0}
                    if(this.state.isFilterOpen) {
                        position.setValue({ x: 0, y: newY });
                    }
                }
            },
            onPanResponderRelease: (evt, gestureState) => {
                if ((gestureState.dy > 0 && gestureState.dy < MIN_GESTURE_DISTANCE) || (gestureState.dy > 0 && this.state.isFilterOpen) ||
                        (gestureState.dy < 0 && gestureState.dy > MIN_GESTURE_DISTANCE_NEGATE) || (gestureState.dy < 0 && !this.state.isFilterOpen) ) {
                    Animated.timing(this.state.position, {
                        toValue: { x: 0, y: this.state.isFilterOpen ? this.state.dragViewHideHeight : 0  },
                        duration: 150,
                    }).start(() => {
                    });
                } else {
                    Animated.timing(this.state.position, {
                        toValue: { x: 0, y: this.state.isFilterOpen ? 0 :  this.state.dragViewHideHeight },
                        duration: 300,
                    }).start(() => {
                        this.setState({ isFilterOpen: !this.state.isFilterOpen })
                    });
                }
            },
        });
        this.panResponder = panResponder;
        this.state = { position , isFilterOpen: false}
    }

    componentDidMount() {
        const dragHeight = this.props.dragViewHeight
        const dragViewInitialVisibleSize = this.props.dragViewInitialVisibleSize
        const dragViewHideHeight = dragHeight - dragViewInitialVisibleSize
        const dragViewHideHeightNagate = dragViewHideHeight * -1;
        this.setState({dragHeight, dragViewInitialVisibleSize, dragViewHideHeight, dragViewHideHeightNagate})
    }

    render() {
        return <View style={[{ marginTop: this.state.dragViewHideHeightNagate }, sizes.contentFullHeightPad0]}>
            <Animated.View style={[this.state.position.getLayout()]}  >
                <View style={[{marginTop: this.state.dragHeight, width: fullWidth, height: contentFullHeight-this.state.dragViewInitialVisibleSize}]}>
                    {this.props.mainView}
                </View>
                <View {...this.panResponder.panHandlers} style={[{ width: fullWidth, height: this.state.dragHeight  }, basicCompStyles.absoluteTopLeftRight0]}>
                    {this.props.dragView}
                </View>
            </Animated.View>
        </View>
    }
}

export default DraggableTopView;

// dragViewHeight, dragViewInitialVisibleSize