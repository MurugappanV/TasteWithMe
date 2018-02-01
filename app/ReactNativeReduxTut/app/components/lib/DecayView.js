import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native'
import {fullHeight, fullWidth} from '../../StyleSheets/sizes';


const arr = []
for (var i = 0; i < 1000; i++) {
  arr.push(i)
}

export default class DecayView extends Component {

  constructor () {
    super()
    this.animatedValue = []
    arr.forEach((value) => {
      this.animatedValue[value] = new Animated.Value(1)
    })
  }

  componentDidMount () {
    this.animate()
  }

  animate () {
    const animations = arr.map((item) => {
      return Animated.timing(
        this.animatedValue[item],
        {
          toValue: 0,
          duration: 4000
        }
      )
    })
    Animated.stagger(4, animations).start()
  }

  render () {
    const boxWidth = parseInt(fullWidth/10, 10);
    const boxHeight = parseInt(fullHeight/100, 10);
    const animations = arr.map((a, i) => {
      return <Animated.View key={i} style={{opacity: this.animatedValue[a], height: boxHeight, width: boxWidth, backgroundColor: 'black'}} />
    })
    return (
      <View style={styles.container}>
        {animations}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'black'
  }
})