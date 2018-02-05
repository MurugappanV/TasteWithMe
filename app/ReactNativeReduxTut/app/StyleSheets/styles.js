import Dimensions from 'Dimensions';
import { StyleSheet , Platform} from 'react-native';
import * as Colors from '../Constants/Colors';
import * as Sizes from '../Constants/Sizes';

export let fullHeight = Dimensions.get('window').height;
export let fullWidth = Dimensions.get('window').width;
let contentFullHeight = fullHeight - Sizes.HEADER_HEIGHT;
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
    },
    pageHeader: {
        width: fullWidth,
        height: Sizes.HEADER_HEIGHT,
    },
    contentFullHeight: {
        width: fullWidth,
        height: contentFullHeight,
    },
    mediumCircle: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
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
    headerText: {
        fontSize: 16, 
        fontWeight: 'bold', 
    },
    mediumText: {
        fontSize: 25, 
        color: 'white'
    },
    flexColumnCC: { 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    absoluteAndBlack: {
        backgroundColor: 'black', 
        position: 'absolute'
    },
    pageHeader: {
        backgroundColor: Colors.HEADER_BACKGROUND_COLOR,
        paddingTop: Sizes.DEFAULT_PADDING,
    },
    activeBackGround: {
        backgroundColor: Colors.ACTIVE_ICON_COLOR
    },
    blackBackGround: {
        backgroundColor: 'black'
    },
    flexRowSbC: {
        flexDirection: "row", 
        justifyContent:"space-between", 
        alignItems:"center"
    },
    subHeader: {  
        height: 30, 
        backgroundColor: 'white', 
        padding: 5
    },
    absoluteBottomRight: {
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    greenBackGround: { 
        backgroundColor: 'green'
    },
    dishListView: {
        height: 20, 
        backgroundColor: 'grey', 
        padding: 5
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
        basicCompStyles.flexColumnCC,
        basicCompStyles.blackBackGround
    ],
    fullSizeAbsolute: [
        sizes.fullViewSize, 
        basicCompStyles.absoluteAndBlack
    ],
    pageHeader: [
        sizes.pageHeader,
        basicCompStyles.pageHeader
    ],
    activeBackGround: [
        basicCompStyles.activeBackGround
    ],
    subHeader: [
        basicCompStyles.flexRowSbC,
        basicCompStyles.subHeader
    ],
    headerText: [
        basicCompStyles.headerText
    ],
    fullContent: [
        sizes.contentFullHeight
    ],
    absoluteBottomCircle: [
        sizes.mediumCircle,
        basicCompStyles.flexColumnCC,
        basicCompStyles.greenBackGround,
        basicCompStyles.absoluteBottomRight
    ],
    dishListView: [
        basicCompStyles.flexRowSbC,
        basicCompStyles.dishListView
    ]
}

export const animate = (isAnimate) => StyleSheet.create({
    rotation: {
        transform:[{
            rotate: isAnimate ? '0deg' : '180deg'
        }]
    }
})