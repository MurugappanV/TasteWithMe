import React, { PureComponent } from "react";
import * as Colors from '../../../Constants/Colors';
import * as IconName from '../../../Constants/IconName';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View , Animated, PanResponder, Text} from "react-native";
import { fullFilterHeight, fullWidth, fullFilterWidth, basicCompStyles, sizes , fullFilterHeightNegate, halfFilterHeightNegate} from "../../../StyleSheets/styles";
import CurvedList from "../../components/CurvedList";


// const GESTURE_DELAY = 10;
// const GESTURE_DELAY_NEGATE = -10;
const arr = ['red', 'pink', 'yellow', 'white', 'orange', 'blue','black', 'purple', 'grey', 'brown', 'orange', 'blue','pink']
class FilterUI extends PureComponent {

    // constructor() {
    //     super()
    //     const position = new Animated.Value(0);
    //     const panResponder = PanResponder.create({
    //         onStartShouldSetPanResponder: (evt, gestureState) => false,
    //         onMoveShouldSetPanResponder: (evt, gestureState) => true,
    //         onPanResponderTerminationRequest: (evt, gestureState) => false,
    //         onPanResponderMove: (evt, gestureState) => {
    //             if (gestureState.dx > GESTURE_DELAY || gestureState.dx < GESTURE_DELAY_NEGATE) {
    //                 let dxChange = Math.abs(gestureState.dx);
    //                 let noOf90Deg = (dxChange / (fullFilterHeight-50)) 
    //                 let noOf90DegWholeNum = noOf90Deg - (noOf90Deg % 1)
    //                 dxChange -= (noOf90DegWholeNum * (fullFilterHeight-50))
    //                 degreeChange = Math.asin(dxChange / (fullFilterHeight-50)) * 180 / Math.PI
    //                 degreeChange += (noOf90DegWholeNum * 90)
    //                 if(gestureState.dx < 0) {
    //                     degreeChange = degreeChange * -1;
    //                 }
    //                 // console.log(`position-${degreeChange}`)
    //                 if((this.state.rotatedDegree + degreeChange) > 0) {
    //                     position.setValue(0);
    //                 } else if((this.state.rotatedDegree + degreeChange) < this.totalRotateDegrees) {
    //                     position.setValue(this.totalRotateDegrees);
    //                 } else {
    //                     position.setValue(this.state.rotatedDegree + degreeChange);
    //                 }
    //             }
    //         },
    //         onPanResponderRelease: (evt, gestureState) => {
    //             // if (gestureState.dx > GESTURE_DELAY || gestureState.dx < GESTURE_DELAY_NEGATE) {
    //             //     let dxChange = Math.abs(gestureState.dx);
    //             //     let noOf90Deg = (dxChange / (fullFilterHeight-50)) 
    //             //     let noOf90DegWholeNum = noOf90Deg - (noOf90Deg % 1)
    //             //     dxChange -= (noOf90DegWholeNum * (fullFilterHeight-50))
    //             //     degreeChange = Math.asin(dxChange / (fullFilterHeight-50)) * 180 / Math.PI
    //             //     degreeChange += (noOf90DegWholeNum * 90)
    //             //     if(gestureState.dx < 0) {
    //             //         degreeChange = degreeChange * -1;
    //             //     }
    //                 this.setState({ rotatedDegree: ((this.state.animatedValue)) })
    //                 //position.setValue(this.state.rotatedDegree);
    //             // }
                
    //         },
    //     });
    //     this.panResponder = panResponder;
    //     this.state = { position , animatedValue : 0, rotatedDegree : 0, displayArray : [], firstItemIndex: 0, lastItemIndex : 0, firstContentIndex: 0, lastContentIndex : 0, lastDegreeSettle : 0, toggler: false, reverseToggler: false}
        
    // }

    // itemleft = (fullWidth/2) - 50;
    // innerItemleft = fullFilterHeight - 50;
    // innerItemleft2 = fullFilterHeight - 150;
    // innerItemleft3 = fullFilterHeight - 250;
    // BigCircleDegree = Math.asin((fullWidth/2) / fullFilterHeight) * 180 / Math.PI
    // SmallCircleDegree = Math.asin((fullWidth/2) / (fullFilterHeight - 100)) * 180 / Math.PI
    // perimeter = Math.PI * (fullFilterHeight - 100) * (2) // 100 for width of item
    // angleForEachItem = 360 * (100 / this.perimeter)
    // noOfItemsCouldBeDisplayed = Math.ceil((this.SmallCircleDegree * 2) / this.angleForEachItem)
    // noOfItems = arr.length;
    // noOfItemsToCreate = (this.noOfItems > (this.noOfItemsCouldBeDisplayed+1)) ? this.noOfItemsCouldBeDisplayed+1 : this.noOfItems;
    // itemDegree = (this.BigCircleDegree + (this.angleForEachItem / 2)) * -1 
    // totalRotateDegrees = ((this.noOfItems * this.angleForEachItem) - (this.SmallCircleDegree * 2) + this.angleForEachItem) * -1;
    // degArr = arr.map((item, index, array) => {
    //     // let deg = 0
    //     // if (index % 2 == 1) {
    //     //     deg = (Math.floor(index / 2) + 1) * this.angleForEachItem;
    //     // } else {
    //     //     deg = (index / 2) * this.angleForEachItem * -1;
    //     // }
    //     this.itemDegree += this.angleForEachItem; 
    //     return this.itemDegree+'deg'
    // })
    // displayDeg = this.degArr.slice(0, this.noOfItemsToCreate);

    // renderItems = (degree, color, index) => {
    //     return <View key={index} style={{transform: [{ rotate: degree}],position: 'absolute', height: fullFilterWidth, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: this.innerItemleft, alignItems: 'center'}}>
    //         <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={color} />
    //     </View>
    // }

    componentWillMount() {
        // for(i = 0; i < this.noOfItemsToCreate; i++) {
        //     let displayItem = {
        //         degree : this.degArr[i],
        //         color : arr[i],
        //         index : i
        //     }
        //     this.state.displayArray.push(displayItem)
        // }
        // this.setState({firstItemIndex: 0, lastItemIndex : this.noOfItemsToCreate-1,firstContentIndex: 0, lastContentIndex : this.noOfItemsToCreate-1})
        // console.log('display array---')
        // console.log(this.state.displayArray)
        // this.state.position.addListener(({value}) => this.setState({animatedValue: value}));
    }

    componentWillUpdate() {
        // if((this.state.lastDegreeSettle - this.state.animatedValue) > (this.angleForEachItem*2) || ((this.state.lastDegreeSettle - this.state.animatedValue) > 0 && this.state.reverseToggler)) {
        //     console.log(`${this.state.lastDegreeSettle}<->${this.state.animatedValue}<com>${this.angleForEachItem}`)
        // console.log(`${this.state.lastDegreeSettle - this.state.animatedValue}<diff>${this.angleForEachItem}`)
        //     let nextContentIndex = (this.state.lastContentIndex+1 ) % this.noOfItems
        //     this.state.displayArray[this.state.firstItemIndex] = {
        //         degree: this.degArr[nextContentIndex],
        //         color: arr[nextContentIndex],
        //         index: nextContentIndex
        //     }
        //     let nextLastItem = this.state.firstItemIndex;
        //     let nextFirstItem = (this.state.firstItemIndex + 1) % this.noOfItemsToCreate;
        //     let nextFirstContent = (this.state.firstContentIndex + 1) % this.noOfItems;
        //     let nextLastContent = (this.state.lastContentIndex + 1) % this.noOfItems;
        //     let nextLastDegreeSettle = this.state.lastDegreeSettle
        //     if(!this.state.reverseToggler) {
        //         nextLastDegreeSettle = this.state.lastDegreeSettle - this.angleForEachItem
        //     }
        //     this.setState({
        //         toggler: true,
        //         reverseToggler: false,
        //         firstItemIndex: nextFirstItem,
        //         lastItemIndex: nextLastItem,
        //         firstContentIndex: nextFirstContent,
        //         lastContentIndex: nextLastContent,
        //         lastDegreeSettle: nextLastDegreeSettle
        //     })
        //     console.log(this.state.displayArray[nextLastItem])
        //     console.log(`if->${this.state.firstItemIndex }<->${ this.state.lastItemIndex}<degSettle>${this.state.lastDegreeSettle}`)
        
        // } else if(((this.state.lastDegreeSettle - this.state.animatedValue) < (this.angleForEachItem * -1)) || ((this.state.lastDegreeSettle - this.state.animatedValue) < 0 && this.state.toggler)) {
        //     console.log(`${this.state.lastDegreeSettle}<->${this.state.animatedValue}<com>${this.angleForEachItem}`)
        // console.log(`${this.state.lastDegreeSettle - this.state.animatedValue}<diff>${this.angleForEachItem}`)
        //     let prevContentIndex = (this.state.firstContentIndex-1 ) < 0 ? this.noOfItems - 1 : this.state.firstContentIndex-1
        //     this.state.displayArray[this.state.lastItemIndex] = {
        //         degree: this.degArr[prevContentIndex],
        //         color: arr[prevContentIndex],
        //         index: prevContentIndex
        //     }
        //     let nextFirstItem = this.state.lastItemIndex;
        //     let nextLastItem = (this.state.lastItemIndex - 1) < 0 ? this.noOfItemsToCreate-1: this.state.lastItemIndex - 1;
            
        //     let nextFirstContent = (this.state.firstContentIndex - 1) < 0 ? this.noOfItems-1: this.state.firstContentIndex - 1;
        //     let nextLastContent = (this.state.lastContentIndex - 1) < 0 ? this.noOfItems-1: this.state.lastContentIndex - 1;
        //     let nextLastDegreeSettle = this.state.lastDegreeSettle
        //     if(!this.state.toggler) {
        //         nextLastDegreeSettle = this.state.lastDegreeSettle + this.angleForEachItem
        //     }
        //     this.setState({
        //         toggler: false,
        //         reverseToggler: true,
        //         firstItemIndex: nextFirstItem,
        //         lastItemIndex: nextLastItem,
        //         firstContentIndex: nextFirstContent,
        //         lastContentIndex: nextLastContent,
        //         lastDegreeSettle: nextLastDegreeSettle
        //     })
        //     console.log(this.state.displayArray[nextFirstItem])
        //     console.log(`elseif->${this.state.firstItemIndex }<->${ this.state.lastItemIndex}<degSettle>${this.state.lastDegreeSettle}`)
        // }
    }

    renderItems = (degree, item, index) => {
        return <View key={index} style={{transform: [{ rotate: degree}],position: 'absolute', height: fullFilterWidth, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: fullFilterHeight-50, alignItems: 'center'}}>
            <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={item} />
        </View>
    }

    renderItems1 = (degree, item, index) => {
        return <View key={index} style={{transform: [{ rotate: degree}],position: 'absolute', height: fullFilterWidth - 140, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: fullFilterHeight-120, alignItems: 'center'}}>
            <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={item} />
        </View>
    }

    renderItems2 = (degree, item, index) => {
        return <View key={index} style={{transform: [{ rotate: degree}],position: 'absolute', height: fullFilterWidth - 280, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: fullFilterHeight-190, alignItems: 'center'}}>
            <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={item} />
        </View>
    }

    renderItems3 = (degree, item, index) => {
        return <View key={index} style={{transform: [{ rotate: degree}],position: 'absolute', height: fullFilterWidth - 420, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: fullFilterHeight-260, alignItems: 'center'}}>
            <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={item} />
        </View>
    }

    render() {
        return <View style={sizes.contentFullHeightPad0}>   
            <CurvedList data={arr} radius={fullFilterHeight} renderItem={this.renderItems} deviceWidth={fullWidth}      itemWidth={50} itemHeight={70} />
            <CurvedList data={arr} radius={fullFilterHeight-70} renderItem={this.renderItems1} deviceWidth={fullWidth} itemWidth={50} itemHeight={70}/>
            <CurvedList data={arr} radius={fullFilterHeight-140} renderItem={this.renderItems2} deviceWidth={fullWidth} itemWidth={50} itemHeight={70}/>
            <CurvedList data={arr} radius={fullFilterHeight-210} renderItem={this.renderItems3} deviceWidth={fullWidth} itemWidth={50} itemHeight={70}/>
        </View>   
    }
}


export default FilterUI;



        // return <CurvedList/>
         
        // let animatedValueDeg = ;

{/* <Text>{`degrees->${this.BigCircleDegree}`}</Text>
            <Text>{`smallCirdegrees->${this.SmallCircleDegree}`}</Text>
            <Text>{`${this.state.animatedValue}deg`}</Text>
            <Animated.View {...this.panResponder.panHandlers} style={{position: 'absolute', height: fullFilterWidth, width: fullFilterWidth, borderRadius: fullFilterHeight, backgroundColor: 'green', bottom: fullFilterHeightNegate, left: halfFilterHeightNegate, transform: [{rotate : `${this.state.animatedValue}deg`}, {perspective: 1000},]}}>
                {
                    // for(i = 0; i < this.noOfItemsToCreate; i++) {

                    // }
                    this.state.displayArray.map(( item, index ) =>
                    (
                        this.renderItems(item.degree, item.color, item.index)
                    ))
                }
            </Animated.View> */}

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