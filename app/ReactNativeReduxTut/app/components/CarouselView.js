import React, { PureComponent } from "react";
import { Animated, View, StyleSheet, Image, Dimensions, ScrollView, FlatList } from 'react-native'
import { basicStyles } from "../StyleSheets/styles";

export default class CarouselView extends PureComponent {
    
    constructor(props) {
        super(props)
        this.animVal = new Animated.Value(0)
        this.barArray = []
        this.renderImage = this.renderImage.bind(this)
    }

    componentWillMount() {
        const width = this.props.contentWidth
        const barWidth = width * 0.7
        const barSpace = width * 0.12
        let numItems = this.props.images.length
        let itemWidth = (barWidth / numItems) - ((barSpace / numItems))
        this.barArray = this.props.images.map((image, i) => {
            const scrollBarVal = this.animVal.interpolate({
                inputRange: [width * (i - 1), width * (i + 1)],
                outputRange: [-itemWidth, itemWidth],
                extrapolate: 'clamp',
            })
            return <View key={`bar${i}`} style={[ basicStyles.barTrack, { width: itemWidth, marginLeft: i === 0 ? 0 : barSpace / numItems, }, ]} >
                <Animated.View style={[ basicStyles.bar, { width: itemWidth, transform: [ { translateX: scrollBarVal }, ], }, ]} />
            </View>
        })
    }

    renderImage = ({item}) => {
        return <Image source={{ uri: item }} style={{ width: this.props.contentWidth }} resizeMode={'cover'} />
    }

    render() {
        return (
            <View style={basicStyles.container30pc}>
                <FlatList
                    data={this.props.images}
                    renderItem={this.renderImage}
                    keyExtractor={(item, index) => index}
                    style={{flex: 1, backgroundColor: 'black'}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={10}
                    pagingEnabled
                    onScroll={Animated.event( [{ nativeEvent: { contentOffset: { x: this.animVal } } }] )}
                />
                <View style={basicStyles.barContainer}  >
                    {this.barArray}
                </View>
            </View>
        )
    }
}
















// const images = [
//     'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png',
//     'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg',
//     'https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg',
//     'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png',
//     'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg',
//     'https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg',
// ]