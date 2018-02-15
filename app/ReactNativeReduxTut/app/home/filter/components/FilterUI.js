import React, { PureComponent } from "react";
import * as Colors from '../../../Constants/Colors';
import * as IconName from '../../../Constants/IconName';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View , Animated, PanResponder, Text, TouchableOpacity, TouchableHighlight, Image} from "react-native";
import { fullFilterHeight, fullWidth, fullFilterWidth, basicCompStyles, sizes , fullFilterHeightNegate, halfFilterHeightNegate, basicStyles} from "../../../StyleSheets/styles";
import CurvedList from "../../components/CurvedList";

const typeArr = ['https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/time%2F002-sunny-landscape.png?alt=media&token=a8053857-aa2d-4387-9c85-a8b1c0b76f6c',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/time%2F001-mountain.png?alt=media&token=b1f80353-e18f-4677-8750-aab89e6a356d',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/time%2F003-mountain-view-with-sun.png?alt=media&token=7cff15d0-3e58-4ce9-bad4-9c0e852badd1']
const courseArr = ['https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/course%20icons%2F006-soup.png?alt=media&token=99498c14-22da-4ef8-94d9-b4d9d20d4db3',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/course%20icons%2F007-canape.png?alt=media&token=1c703e95-bcc3-4e26-9618-58c63d914a55',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/course%20icons%2F003-pasta-serving.png?alt=media&token=3a062d99-bade-4d61-b4e8-216412ae0c45',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/course%20icons%2F002-hamburger.png?alt=media&token=27a6d426-5850-4aec-98f4-d98b238de6f4',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/course%20icons%2F005-noodles.png?alt=media&token=57bbd762-7d62-4601-b787-469f3a67042a',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/course%20icons%2F004-bologneze.png?alt=media&token=fff2dc9f-de93-4c1e-8ed3-760c209868a3',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/course%20icons%2F001-long-glass-cocktail.png?alt=media&token=5f6cbbae-526b-4258-8462-19c59bb448ee',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/course%20icons%2F008-ice-cream.png?alt=media&token=0b95bbfa-1c60-4b18-8699-b2e7c013216f']
const cuisineArr = ['https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/cuisine%20icons%2F001-worldwide.png?alt=media&token=6b5dae1d-ac9c-4d68-b581-bdc87ad5a6bc',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/cuisine%20icons%2F008-taj-mahal.png?alt=media&token=f4d9f3aa-8176-425c-a7bf-061d9de28f59',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/cuisine%20icons%2F004-temple.png?alt=media&token=5056b45d-e993-4d43-9f44-8addd9b1908a',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/cuisine%20icons%2F005-chinese-temple.png?alt=media&token=636b1bce-7feb-49ea-89a7-85c9792415de',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/cuisine%20icons%2F003-leaning-tower-of-pisa.png?alt=media&token=e72f88c7-073e-40de-910a-4df956f6211c',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/cuisine%20icons%2F006-eiffel-tower.png?alt=media&token=e3bda551-a84c-4f50-9bf6-cfafeb043535',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/cuisine%20icons%2F007-statue-of-liberty.png?alt=media&token=87a99002-056b-4b2d-b5b6-7af5663f9f72',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/cuisine%20icons%2F002-cathedral-of-saint-basil.png?alt=media&token=bde8b091-e541-4577-a511-09c76f6ddf69']
const ingredientArr = [ 'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/ingredient%20icons%2F005-wheat.png?alt=media&token=fe0e3275-64a2-4d7f-9bf8-50b23faaf157',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/ingredient%20icons%2F006-broccoli.png?alt=media&token=09c2d612-9c31-44f9-b658-d540a618dc84',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/ingredient%20icons%2F001-corn-cob-hand-drawn-vegetable.png?alt=media&token=fe3ad8ae-ff2f-4723-8aa4-bb0001997817',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/ingredient%20icons%2F013-chicken.png?alt=media&token=ec5dfcc6-a8c4-445d-a351-5316d6b9e320',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/ingredient%20icons%2F014-sheep.png?alt=media&token=31f232e9-1170-4d9c-b191-3ecdf1479c43',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/ingredient%20icons%2F012-fish-hand-drawn-animal.png?alt=media&token=d5bdf94e-b501-4e08-b8d9-305066d6e703',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/ingredient%20icons%2F011-prawn.png?alt=media&token=5990aeb4-78ae-4555-93a1-af7a1d08ac11',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/ingredient%20icons%2F010-crab.png?alt=media&token=045cf674-dc59-4cd2-8472-71bd851d928d',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/ingredient%20icons%2F008-egg.png?alt=media&token=7fc2ad35-b381-458f-81fe-e708097eaf7d',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/ingredient%20icons%2F009-champignon.png?alt=media&token=681da0ee-8064-47fc-9957-f7356e8f8495',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/ingredient%20icons%2F002-potatoes.png?alt=media&token=0a88d3e1-9187-4fa8-8e96-311803957929',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/ingredient%20icons%2F007-pea.png?alt=media&token=5ccac7bb-8573-4eb8-befc-1ba961e188d2',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/ingredient%20icons%2F004-garlic.png?alt=media&token=309235f8-1608-4d4b-98e5-631fcd184d45',
                    'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/ingredient%20icons%2F003-pepper.png?alt=media&token=d9066a0f-78f4-499b-903e-391dc09a3300']
                    // const GESTURE_DELAY = 10;
// const GESTURE_DELAY_NEGATE = -10;
const arr = ['red', 'pink', 'yellow', 'white', 'orange', 'blue','black', 'purple', 'grey', 'brown', 'orange', 'blue','pink']
class FilterUI extends PureComponent {

    constructor() {
        super()
        const scale = new Animated.Value(0.3);
        this.state = {scale}
    }
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
        Animated.timing(this.state.scale, {
            toValue: 1 ,
            duration: 600,
        }).start(() => {
            
        })
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
        return <View key={index} style={{transform: [{ rotate: degree}],position: 'absolute', height: fullFilterWidth, width: 100, paddingTop: 30,  backgroundColor: 'transparent', bottom: 0, left: fullFilterHeight-50, alignItems: 'center'}}>
            <TouchableOpacity>
            <Image style={{width: 35, height: 35, tintColor: Colors.DARK_TEXT_COLOR}} resizeMode='contain' source={{uri: item, cache: 'force-cache',}} />
            </TouchableOpacity>
        </View>
    }

    renderItems1 = (degree, item, index) => {
        return <View key={index} style={{transform: [{ rotate: degree}],position: 'absolute', height: fullFilterWidth - 200, width: 100, paddingTop: 30,  backgroundColor: 'transparent', bottom: 0, left: fullFilterHeight-150, alignItems: 'center'}}>
            <TouchableOpacity>
            <Image style={{width: 40, height: 40, tintColor: Colors.DARK_TEXT_COLOR}} resizeMode='contain' source={{uri: item, cache: 'force-cache',}} />
            </TouchableOpacity>
        </View>
    }

    renderItems2 = (degree, item, index) => {
        return <View key={index} style={{transform: [{ rotate: degree}],position: 'absolute', height: fullFilterWidth - 400, width: 100, paddingTop: 30,  backgroundColor: 'transparent', bottom: 0, left: fullFilterHeight-250, alignItems: 'center'}}>
            <TouchableOpacity>
            <Image style={{width: 40, height: 40, tintColor: Colors.DARK_TEXT_COLOR}} resizeMode='contain' source={{uri: item, cache: 'force-cache',}} />
            </TouchableOpacity>
        </View>
    }

    renderItems3 = (degree, item, index) => {
        return <View key={index} style={{transform: [{ rotate: degree}],position: 'absolute', height: fullFilterWidth - 600, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: fullFilterHeight-350, alignItems: 'center'}}>
            <TouchableOpacity>
                <Image style={{width: 40, height: 40, tintColor: Colors.DARK_TEXT_COLOR}} resizeMode='contain' source={{uri: item, cache: 'force-cache',}} />
            </TouchableOpacity>
        </View>
    }

    isColse = () => {
        Animated.timing(this.state.scale, {
            toValue: 0.3 ,
            duration: 300,
            useNativeDriver: true
        }).start(() => {
            this.props.closeFilter()
        })
    }

    render() {
        //console.log(`s-----------------------------${this,state.scale}`);
        return <View style={[basicStyles.fullContentSizeAbsolute]}>   
            <CurvedList data={ingredientArr} radius={fullFilterHeight} renderItem={this.renderItems} deviceWidth={fullWidth}      itemWidth={70} itemHeight={100} scale={this.state.scale}/>
            <CurvedList data={courseArr} radius={fullFilterHeight-100} renderItem={this.renderItems1} deviceWidth={fullWidth} itemWidth={70} itemHeight={100} scale={this.state.scale}/>
            <CurvedList data={cuisineArr} radius={fullFilterHeight-200} renderItem={this.renderItems2} deviceWidth={fullWidth} itemWidth={70} itemHeight={100} scale={this.state.scale}/>
            <CurvedList data={typeArr} radius={fullFilterHeight-300} renderItem={this.renderItems3} deviceWidth={fullWidth} itemWidth={60} itemHeight={100} scale={this.state.scale}/>
            <TouchableOpacity onPress={this.isColse} style={{height:80, width:80, borderRadius: 40, position: 'absolute', bottom: -40, left: fullWidth/2-40, backgroundColor: Colors.HEADER_BACKGROUND_COLOR, alignItems: 'center', padding: 10, transform: [{scale : this.state.scale}]}}>
                <Text style={{color: 'white'}}>OK</Text>
            </TouchableOpacity>
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