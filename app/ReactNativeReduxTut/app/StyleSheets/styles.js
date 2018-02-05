import Dimensions from 'Dimensions';
import { StyleSheet , Platform} from 'react-native';
import * as Colors from '../Constants/Colors';
import * as Sizes from '../Constants/Sizes';
import { DEFAULT_PADDING } from '../Constants/Sizes';

export let fullHeight = Dimensions.get('window').height;
export let fullWidth = Dimensions.get('window').width;
let contentFullHeight = fullHeight - Sizes.HEADER_HEIGHT;
let contentFullWidth = fullWidth - (Sizes.DEFAULT_PADDING * 2);
let cardViewWidth = (contentFullWidth - (Sizes.DEFAULT_PADDING * 3) - (Sizes.DEFAULT_BORDER_WIDTH *2)) / 2;
let cardImageViewWidth = cardViewWidth - (Sizes.DEFAULT_PADDING * 2) - (Sizes.DEFAULT_BORDER_WIDTH *2);
let cardImageWidth = cardImageViewWidth - (Sizes.DEFAULT_PADDING * 2);
let cardImageHeight = cardImageWidth * 2 / 3;
console.log(`${cardImageWidth}<->${cardImageViewWidth}<->${cardViewWidth}<->${contentFullWidth}<->${fullWidth}`);
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
        padding: Sizes.DEFAULT_PADDING
    },
    mediumCircle: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    subHeader: {
        width: contentFullWidth,
        height: 40, 
    },
    subContent: {
        width: contentFullWidth,
    },
    cardView: {
        width: cardViewWidth
    },
    cardImageView: {
        width: cardImageViewWidth
    },
    cardImage: {
        width: cardImageWidth,
        height: cardImageHeight,
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
    titleText: {
        fontSize: 16, 
        paddingRight: 10
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
    flexRowNC: {
        flexDirection: "row", 
        alignItems:"center"
    },
    subHeader: {  
        backgroundColor: Colors.LIGHT_BACKGROUND_COLOR, 
        padding: Sizes.DEFAULT_PADDING,
    },
    absoluteBottomRight20: {
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    absoluteBottomLeft0: {
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    greenBackGround: { 
        backgroundColor: 'green'
    },
    contentBackGround: {
        backgroundColor: Colors.CONTENT_BACKGROUND_COLOR,
    },
    dishListView: {
        backgroundColor: Colors.ACTIVE_ICON_COLOR, 
        padding: Sizes.DEFAULT_PADDING
    },
    dishCardView: {
        backgroundColor: Colors.ACTIVE_ICON_COLOR, 
        padding: Sizes.DEFAULT_PADDING, 
    },
    subContent: { 
        backgroundColor: Colors.ACTIVE_ICON_COLOR,
    },
    defaultBorder: {
        borderWidth: Sizes.DEFAULT_BORDER_WIDTH,
        borderColor: Colors.LIGHT_BACKGROUND_COLOR,
    },
    defaultPadding: {
        padding: DEFAULT_PADDING,
    },
    fullSize: {
        flex: 1
    },
    darkTextColor: {
        color: Colors.MEDIUM_TEXT_COLOR
    },
    darkerTextColor: {
        color: Colors.DARK_TEXT_COLOR
    },
    lightTextColor: {
        color: Colors.LIGHT_TEXT_COLOR
    },
    darkBackGround: {
        backgroundColor: Colors.MEDIUM_TEXT_COLOR
    },
    transparentBackGround: {
        backgroundColor: Colors.TRANSPARENT
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
        sizes.subHeader,
        basicCompStyles.flexRowSbC,
        basicCompStyles.subHeader
    ],
    headerText: [
        basicCompStyles.headerText,
        basicCompStyles.lightTextColor
    ],
    darkHeaderText: [
        basicCompStyles.headerText,
        basicCompStyles.darkTextColor
    ],
    darkTitleText: [
        basicCompStyles.titleText,
        basicCompStyles.darkerTextColor
    ],
    fullContent: [
        sizes.contentFullHeight,
        basicCompStyles.contentBackGround,
        basicCompStyles.flexColumnCC,
        basicCompStyles.fullSize
    ],
    absoluteBottomCircle: [
        sizes.mediumCircle,
        basicCompStyles.flexColumnCC,
        basicCompStyles.darkBackGround,
        basicCompStyles.absoluteBottomRight20
    ],
    dishListView: [
        basicCompStyles.flexRowNC,
        basicCompStyles.dishListView,
        basicCompStyles.defaultBorder
    ],
    dishCardView: [
        sizes.cardView,
        basicCompStyles.flexColumnCC,
        basicCompStyles.dishCardView,
        basicCompStyles.defaultBorder
    ],
    dishCardImageView: [
        sizes.cardImageView,
        basicCompStyles.flexColumnCC,
        basicCompStyles.transparentBackGround,
        basicCompStyles.defaultPadding,
    ],
    dishCardImage: [
        sizes.cardImage,
    ],
    dishCardTextView: [
        sizes.cardImageView,
        basicCompStyles.flexColumnCC,
        basicCompStyles.transparentBackGround,
        basicCompStyles.defaultPadding,
    ],
    dishListImageView: [
        basicCompStyles.flexColumnCC,
        basicCompStyles.transparentBackGround,
        basicCompStyles.defaultPadding,
    ],
    dishListTextView: [
        basicCompStyles.flexRowSbC,
        basicCompStyles.transparentBackGround,
        basicCompStyles.defaultPadding,
        basicCompStyles.fullSize
    ],
    vegImageView: [
        basicCompStyles.absoluteBottomLeft0,
        
    ],
    subContent: [
        sizes.subContent,
        basicCompStyles.subContent,
        basicCompStyles.defaultBorder
    ],
}

export const animate = (isAnimate) => StyleSheet.create({
    rotation: {
        transform:[{
            rotate: isAnimate ? '0deg' : '180deg'
        }]
    }
})