import React, { PureComponent } from "react";
import * as Colors from '../../Constants/Colors';
import * as IconName from '../../Constants/IconName';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View , Animated, PanResponder, Text} from "react-native";
//import {  fullWidth, fullFilterWidth, basicCompStyles, sizes , fullFilterHeightNegate, halfFilterHeightNegate} from "../../StyleSheets/styles";

const GESTURE_DELAY = 10;
const GESTURE_DELAY_NEGATE = -10;
class CurvedList extends PureComponent {

    constructor(props) {
        super(props)
        const position = new Animated.Value(0);
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => false,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderTerminationRequest: (evt, gestureState) => false,
            onPanResponderMove: (evt, gestureState) => {
                if (gestureState.dx > GESTURE_DELAY || gestureState.dx < GESTURE_DELAY_NEGATE) {
                    let degreeChange = getDegree(gestureState.dx, (this.props.radius-this.halfItemHeight))// half height
                    position.setValue(limitNumberBetweenRange((this.state.rotatedDegree + degreeChange), 0, this.totalRotateDegrees))
                }
            },
            onPanResponderRelease: (evt, gestureState) => {
                this.setState({ rotatedDegree: (this.state.animatedValue) })
            },
        });
        this.panResponder = panResponder;
        this.state = { position , animatedValue : 0, rotatedDegree : 0, displayArray : [], firstItemIndex: 0, lastItemIndex : 0, firstContentIndex: 0, lastContentIndex : 0, lastDegreeSettle : 0, toggler: 0}
        
        this.deviceWidth = this.props.deviceWidth;
        this.halfDeviceWidth = this.deviceWidth / 2;
        this.itemWidth = this.props.itemWidth;
        this.halfItemWidth = this.itemWidth / 2;
        this.itemHeight = this.props.itemHeight;
        this.halfItemHeight = this.itemHeight / 2;
        this.bigDiameter = this.props.radius * 2;
        this.radiusNegate = this.props.radius * -1;
        this.haldRadiusNegate = this.halfDeviceWidth - this.props.radius;
        this.innerItemleft = this.props.radius - this.halfItemWidth;
        this.smallCircleRadius = this.props.radius - this.itemHeight; //todo - height
        this.BigCircleDegree = limitNumberBetweenRange(getDegree(this.halfDeviceWidth, this.props.radius), 90, 0)
        this.SmallCircleDegree = limitNumberBetweenRange(getDegree(this.halfDeviceWidth, this.smallCircleRadius), 90, 0)
        this.perimeter = perimeter(this.smallCircleRadius)// 100 for width of item
        this.angleForEachItem = getAngle(this.itemWidth, this.perimeter)//360 * (100 / this.perimeter)
        this.noOfItemsCouldBeDisplayed = Math.ceil((this.SmallCircleDegree * 2) / this.angleForEachItem)
        this.noOfItems = this.props.data.length;
        this.noOfItemsToCreate = (this.noOfItems > (this.noOfItemsCouldBeDisplayed+1)) ? this.noOfItemsCouldBeDisplayed+1 : this.noOfItems;
        this.lastItemDegree = (this.BigCircleDegree + (this.angleForEachItem / 2)) * -1 
        this.totalRotateDegrees = ((this.noOfItems * this.angleForEachItem) - (this.SmallCircleDegree * 2) + this.angleForEachItem) * -1;
        this.degArr = this.props.data.map((item, index, array) => {
            this.lastItemDegree += this.angleForEachItem; 
            return this.lastItemDegree+'deg'
        })
    }

    componentWillMount() {
        for(i = 0; i < this.noOfItemsToCreate; i++) {
            let displayItem = {
                degree : this.degArr[i],
                itemData : this.props.data[i],
                index : i
            }
            this.state.displayArray.push(displayItem)
        }
        this.setState({firstItemIndex: 0, lastItemIndex : this.noOfItemsToCreate-1,firstContentIndex: 0, lastContentIndex : this.noOfItemsToCreate-1})
        this.state.position.addListener(({value}) => this.setState({animatedValue: value}));
    }

    componentWillUpdate() {
        if((this.state.lastDegreeSettle - this.state.animatedValue) > (this.angleForEachItem*2) || ((this.state.lastDegreeSettle - this.state.animatedValue) > 0 && (this.state.toggler == 2))) {
            let nextContentIndex = (this.state.lastContentIndex+1 ) % this.noOfItems
            this.state.displayArray[this.state.firstItemIndex] = {
                degree: this.degArr[nextContentIndex],
                itemData: this.props.data[nextContentIndex],
                index: nextContentIndex
            }
            let nextLastDegreeSettle = this.state.lastDegreeSettle
            if(this.state.toggler != 2) {
                nextLastDegreeSettle = this.state.lastDegreeSettle - this.angleForEachItem
            }
            this.setState({
                toggler: 1,
                lastItemIndex: this.state.firstItemIndex,
                firstItemIndex: (this.state.firstItemIndex + 1) % this.noOfItemsToCreate,
                firstContentIndex: (this.state.firstContentIndex + 1) % this.noOfItems,
                lastContentIndex: (this.state.lastContentIndex + 1) % this.noOfItems,
                lastDegreeSettle: nextLastDegreeSettle
            })
        } else if(((this.state.lastDegreeSettle - this.state.animatedValue) < (this.angleForEachItem * -1)) || ((this.state.lastDegreeSettle - this.state.animatedValue) < 0 && (this.state.toggler == 1))) {
            let prevContentIndex = (this.state.firstContentIndex-1 ) < 0 ? this.noOfItems - 1 : this.state.firstContentIndex-1
            this.state.displayArray[this.state.lastItemIndex] = {
                degree: this.degArr[prevContentIndex],
                itemData: this.props.data[prevContentIndex],
                index: prevContentIndex
            }
            let nextLastDegreeSettle = this.state.lastDegreeSettle
            if(this.state.toggler != 1) {
                nextLastDegreeSettle = this.state.lastDegreeSettle + this.angleForEachItem
            }
            this.setState({
                toggler: 2,
                firstItemIndex: this.state.lastItemIndex,
                lastItemIndex: (this.state.lastItemIndex - 1) < 0 ? this.noOfItemsToCreate-1: this.state.lastItemIndex - 1,
                firstContentIndex: (this.state.firstContentIndex - 1) < 0 ? this.noOfItems-1: this.state.firstContentIndex - 1,
                lastContentIndex: (this.state.lastContentIndex - 1) < 0 ? this.noOfItems-1: this.state.lastContentIndex - 1,
                lastDegreeSettle: nextLastDegreeSettle
            })
        }
    }

    render() {
        return <View style={{position: 'absolute', height: this.bigDiameter, width: this.bigDiameter, borderRadius: this.props.radius, backgroundColor:  Colors.DARK_HIGHLIGHT_COLOR, bottom: this.radiusNegate, left: this.haldRadiusNegate}}>
            <Animated.View {...this.panResponder.panHandlers} style={{position: 'absolute', height: this.bigDiameter-4, width: this.bigDiameter-4, borderRadius: this.props.radius-2, backgroundColor: Colors.CONTENT_BACKGROUND_COLOR, bottom: 2, left: 2, transform: [{rotate : `${this.state.animatedValue}deg`}, {perspective: 1000},]}}>
                { this.state.displayArray.map(item => this.props.renderItem(item.degree, item.itemData, item.index)) }
            </Animated.View>
        </View>
    }
}

const getDegree = (opposite, hypotenious) => {
    let opp = Math.abs(opposite);
    let noOf90Deg =  Math.floor(opp / hypotenious) 
    opp -= (noOf90Deg * hypotenious)
    let degree = Math.asin(opp / hypotenious) * 180 / Math.PI
    degree += (noOf90Deg * 90)
    if(opposite < 0) {
        degree = degree * -1;
    }
    return degree;
}

const limitNumberBetweenRange = (inNumber, upperLimit, lowerLimit) => {
    if(inNumber > upperLimit) {
        inNumber = upperLimit
    } else if (inNumber < lowerLimit) {
        inNumber = lowerLimit
    }
    return inNumber
}

const perimeter = (radius) => {
    return 2 * Math.PI * radius 
}

const getAngle = (distance, perimeter) => {
    return 360 * (distance / perimeter)
}

export default CurvedList;



// update commetn
        //console.log(`${this.state.lastDegreeSettle}<->${this.state.animatedValue}<com>${this.angleForEachItem}`)
            //console.log(`${this.state.lastDegreeSettle - this.state.animatedValue}<diff>${this.angleForEachItem}`)

            //console.log(this.state.displayArray[nextLastItem])
            //console.log(`if->${this.state.firstItemIndex }<->${ this.state.lastItemIndex}<degSettle>${this.state.lastDegreeSettle}`)
        
            // console.log(this.state.displayArray[nextFirstItem])
            // console.log(`elseif->${this.state.firstItemIndex }<->${ this.state.lastItemIndex}<degSettle>${this.state.lastDegreeSettle}`)

        //     console.log(`${this.state.lastDegreeSettle}<->${this.state.animatedValue}<com>${this.angleForEachItem}`)
        // console.log(`${this.state.lastDegreeSettle - this.state.animatedValue}<diff>${this.angleForEachItem}`)


        // let nextFirstItem = this.state.lastItemIndex;
        // let nextLastItem = (this.state.lastItemIndex - 1) < 0 ? this.noOfItemsToCreate-1: this.state.lastItemIndex - 1;
        
        // let nextFirstContent = (this.state.firstContentIndex - 1) < 0 ? this.noOfItems-1: this.state.firstContentIndex - 1;
        // let nextLastContent = (this.state.lastContentIndex - 1) < 0 ? this.noOfItems-1: this.state.lastContentIndex - 1;
        
//mount commets
        // console.log('display array---')
        // console.log(this.state.displayArray)



//pan responder
            // let dxChange = Math.abs(gestureState.dx);
                    // let noOf90Deg = (dxChange / (this.props.radius-50)) 
                    // let noOf90DegWholeNum = noOf90Deg - (noOf90Deg % 1)
                    // dxChange -= (noOf90DegWholeNum * (this.props.radius-50))
                    // degreeChange = Math.asin(dxChange / (this.props.radius-50)) * 180 / Math.PI
                    // degreeChange += (noOf90DegWholeNum * 90)
                    // if(gestureState.dx < 0) {
                    //     degreeChange = degreeChange * -1;
                    // }
                    // console.log(`position-${degreeChange}`)

                // if (gestureState.dx > GESTURE_DELAY || gestureState.dx < GESTURE_DELAY_NEGATE) {
                //     let dxChange = Math.abs(gestureState.dx);
                //     let noOf90Deg = (dxChange / (fullFilterHeight-50)) 
                //     let noOf90DegWholeNum = noOf90Deg - (noOf90Deg % 1)
                //     dxChange -= (noOf90DegWholeNum * (fullFilterHeight-50))
                //     degreeChange = Math.asin(dxChange / (fullFilterHeight-50)) * 180 / Math.PI
                //     degreeChange += (noOf90DegWholeNum * 90)
                //     if(gestureState.dx < 0) {
                //         degreeChange = degreeChange * -1;
                //     }

                    //position.setValue(this.state.rotatedDegree);
                // }

                // if((this.state.rotatedDegree + degreeChange) > 0) {
                    //     position.setValue(0);
                    // } else if((this.state.rotatedDegree + degreeChange) < this.totalRotateDegrees) {
                    //     position.setValue(this.totalRotateDegrees);
                    // } else {
                    //     position.setValue(this.state.rotatedDegree + degreeChange);
                    // }



// degree
                            // let deg = 0
            // if (index % 2 == 1) {
            //     deg = (Math.floor(index / 2) + 1) * this.angleForEachItem;
            // } else {
            //     deg = (index / 2) * this.angleForEachItem * -1;
            // }


// render item 

                // renderItems = (degree, item, index) => {
                //     return <View key={index} style={{transform: [{ rotate: degree}],position: 'absolute', height: fullFilterWidth, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: this.innerItemleft, alignItems: 'center'}}>
                //         <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={item} />
                //     </View>
                // }




        // this.itemleft = itemleft
        // this.innerItemleft = innerItemleft
        // this.innerItemleft2 = innerItemleft2
        // this.innerItemleft3 = innerItemleft3
        // this.BigCircleDegree =BigCircleDegree
        // this.SmallCircleDegree = SmallCircleDegree
        // this.perimeter = perimeter
        // this.angleForEachItem = angleForEachItem
        // this.noOfItemsCouldBeDisplayed = noOfItemsCouldBeDisplayed
        // this.noOfItems = noOfItems
        // this.noOfItemsToCreate = noOfItemsToCreate
        // this.itemDegree = itemDegree
        // this.totalRotateDegrees = totalRotateDegrees
        // this.degArr = degArr

// console.log(`vel-----${gestureState.vx}<->${gestureState.vy}`)

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

// console.log(`deg chang----${degreeChange}`)
                    // console.log(`distance----${distance}`)
                    // Animated.timing(this.state.position, {
                    //     toValue: degreeChange,
                    //     duration: 500,
                    //     // velocity: gestureState.vx / 4,
                    //     // deceleration: 0.995,
                    //      useNativeDriver: true,
                    // }).start(() => {

                    // });

                    // let distance = (gestureState.vx * gestureState.vx) / (2 * 0.01)
                    // let noOf90Degd = (distance / (fullFilterHeight-50)) 
                    // let noOf90DegWholeNumd = noOf90Degd - (noOf90Degd % 1)
                    // distance -= (noOf90DegWholeNumd * (fullFilterHeight-50))
                    // degreeChanged = Math.asin(distance / (fullFilterHeight-50)) * 180 / Math.PI
                    // degreeChanged += (noOf90DegWholeNumd * 90)
                    // degreeChange += degreeChanged

// return <View  style={[basicCompStyles.fullSize, basicCompStyles.contentBackGround]}>
//             <Text >FILTER</Text>
//         </View>


{/* <View style={{transform: [{ rotate: '0deg'}],position: 'absolute', height: fullFilterWidth, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: this.innerItemleft, alignItems: 'center'}}>
                    <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={'red'} />
                </View> */}
                {/* <View style={{transform: [{ rotate: '0deg'}], position: 'absolute', height: fullFilterWidth, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: innerItemleft, alignItems: 'center'}}>
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
                </View> */}

                {/* <View style={{transform: [{ rotate: '0deg'}],position: 'absolute', height: fullFilterWidth, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: this.innerItemleft, alignItems: 'center'}}>
                    <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={'red'} />
                </View> */}
                {/* (() => {
                    arr.forEach((item, index, array) => {
                        return <Icon key='index' name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={'red'} />
                    })
                })() */}