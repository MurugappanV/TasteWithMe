import Dimensions from 'Dimensions';
import { StyleSheet , Platform} from 'react-native';

export let fullHeight = Dimensions.get('window').height;
export let fullWidth = Dimensions.get('window').width;
let halfHeight = fullHeight/2;
let halfWidth = fullWidth/2;

export const sizes = StyleSheet.create({
    fullViewSize: {
      width: fullWidth,
      height: fullHeight,
    },
    halfViewSize: {
      width: halfWidth,
      height: halfHeight,
    }
});

export const fonts = StyleSheet.create({
    default: {
        ...Platform.select({
            ios: { 
                fontFamily: 'Arial', 
            }, 
            android: { 
                fontFamily: 'Roboto' 
            }
        })
    },
});

export const basicCompStyles = StyleSheet.create({
    bigHeaderText: {
        fontSize: 40, 
        fontWeight: 'bold', 
        color: 'white'
    },
    mediumText: {
        fontSize: 25, 
        color: 'white'
    },
    flexColumnCC: { 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#00000088' 
    },
    absoluteAndBlack: {
        backgroundColor: 'black', 
        position: 'absolute'
    }

});

export const basicStyles = {
    bigHeaderText: [
        fonts.default , 
        basicCompStyles.bigHeaderText
    ],
    mediumText: [
        fonts.default , 
        basicCompStyles.mediumText
    ],
    fullSizeColumnCC: [
        sizes.fullViewSize,
        basicCompStyles.flexColumnCC
    ],
    fullSizeAbsolute: [
        sizes.fullViewSize, 
        basicCompStyles.absoluteAndBlack
    ]
}