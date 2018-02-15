import Dimensions from 'Dimensions';
import { StyleSheet , Platform} from 'react-native';
import * as Colors from '../Constants/Colors';
import * as Sizes from '../Constants/Sizes';

export let fullHeight = Dimensions.get('window').height;
export let fullWidth = Dimensions.get('window').width;
export let contentFullHeight = fullHeight - (Sizes.HEADER_HEIGHT * 2);
export let fullFilterHeight = fullHeight * 0.6;
export let fullFilterHeightNegate = fullFilterHeight * -1;
export let halfFilterHeightNegate = fullFilterHeightNegate / 2;
export let fullFilterWidth = fullFilterHeight * 2;
let contentFullWidth = fullWidth - (Sizes.DEFAULT_PADDING * 2);
let cardViewWidth = (contentFullWidth - (Sizes.DEFAULT_PADDING * 3) - (Sizes.DEFAULT_BORDER_WIDTH *2)) / 2;
let cardImageViewWidth = cardViewWidth - (Sizes.DEFAULT_PADDING * 2) - (Sizes.DEFAULT_BORDER_WIDTH *2);
let cardImageWidth = cardImageViewWidth - (Sizes.DEFAULT_PADDING * 2);
let cardImageHeight = cardImageWidth * 2 / 3;
let halfHeight = fullHeight/2;
let halfWidth = fullWidth/2;

export const sizes = StyleSheet.create({
    fullViewSize: {
      width: fullWidth,
      height: fullHeight,
    },
    halfViewSize: {
      width: fullWidth,
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
    contentFullHeightPad0: {
        width: fullWidth,
        height: contentFullHeight,
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
    listImage: {
        width: 40, 
        height: 40
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
    flexColumnCC: { 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    flexColumnNFs: {
        flexDirection: 'column', 
        alignItems: 'flex-start'
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


    absoluteAndBlack: {
        backgroundColor: 'black', 
        position: 'absolute'
    },
    absoluteBottomRight20: {
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    absoluteBottomMiddle: {
        position: 'absolute',
        bottom: 20,
        left: halfWidth-20
    },
    absoluteBottomLeft0: {
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    absoluteTop5Right0: {
        position: 'absolute', 
        top: 5, 
        right: 0
    },
    absoluteTopLeftRight0: {
        position: 'absolute', 
        top: 0, 
        right: 0, 
        left: 0
    },


    
    defaultBorder: {
        borderWidth: Sizes.DEFAULT_BORDER_WIDTH,
        borderColor: Colors.LIGHT_BACKGROUND_COLOR,
    },
    defaultPadding: {
        padding: Sizes.DEFAULT_PADDING,
    },
    halfPadding: {
        padding: Sizes.HALF_DEF_PADDING,
    },
    paddingLR10: {
        paddingLeft: 10, 
        paddingRight: 10
    },
    fullSize: {
        flex: 1
    },

    activeBackGround: {
        backgroundColor: Colors.ACTIVE_ICON_COLOR
    },
    blackBackGround: {
        backgroundColor: 'black'
    },
    greenBackGround: { 
        backgroundColor: 'green'
    },
    contentBackGround: {
        backgroundColor: Colors.CONTENT_BACKGROUND_COLOR,
    },
    darkBackGround: {
        backgroundColor: Colors.MEDIUM_TEXT_COLOR,
    },
    lightBackGround: {
        backgroundColor: Colors.LIGHT_BACKGROUND_COLOR,
    },
    transparentBackGround: {
        backgroundColor: Colors.TRANSPARENT
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


    pageHeader: {
        borderBottomWidth: Sizes.DEFAULT_BORDER_WIDTH,
        borderColor: Colors.IN_ACTIVE_ICON_COLOR, 
        backgroundColor: Colors.HEADER_BACKGROUND_COLOR,
        padding: Sizes.DEFAULT_PADDING,
    },
    subHeader: {  
        backgroundColor: Colors.LIGHT_BACKGROUND_COLOR, 
        padding: Sizes.DEFAULT_PADDING,
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
    headerText: [
        fonts.default , 
        basicCompStyles.headerText,
        basicCompStyles.lightTextColor
    ],
    paddedHeaderText: [
        fonts.default , 
        basicCompStyles.headerText,
        basicCompStyles.lightTextColor,
        basicCompStyles.paddingLR10
    ],
    darkHeaderText: [
        fonts.default , 
        basicCompStyles.headerText,
        basicCompStyles.darkTextColor
    ],
    darkTitleText: [
        fonts.default , 
        basicCompStyles.titleText,
        basicCompStyles.darkerTextColor
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
    fullContentSizeAbsolute: [
        sizes.contentFullHeightPad0, 
        basicCompStyles.absoluteBottomLeft0
    ],


    pageHeader: [
        sizes.pageHeader,
        basicCompStyles.pageHeader
    ],
    subHeader: [
        sizes.subHeader,
        basicCompStyles.flexRowSbC,
        basicCompStyles.subHeader
    ],


    activeBackGround: [
        basicCompStyles.activeBackGround
    ],
    fullContent: [
        sizes.contentFullHeight,
        basicCompStyles.contentBackGround,
        basicCompStyles.flexColumnCC,
        basicCompStyles.fullSize
    ],
    halfContent: [
        sizes.halfViewSize,
        basicCompStyles.contentBackGround,
        basicCompStyles.flexColumnCC,
    ],
    absoluteBottomCircle: [
        sizes.mediumCircle,
        basicCompStyles.flexColumnCC,
        basicCompStyles.darkBackGround,
        basicCompStyles.absoluteBottomRight20
    ],
    absoluteBottomMiddleCircle: [
        sizes.mediumCircle,
        basicCompStyles.flexColumnCC,
        basicCompStyles.darkBackGround,
        basicCompStyles.absoluteBottomMiddle
    ],
    vegImageView: [
        basicCompStyles.absoluteBottomLeft0,
        
    ],
    subContent: [
        sizes.subContent,
        basicCompStyles.subContent,
        basicCompStyles.defaultBorder
    ],
    subContentCardView: [
        sizes.subContent,
        basicCompStyles.subContent,
        basicCompStyles.defaultBorder,
        basicCompStyles.halfPadding
    ],



    dishListView: [
        basicCompStyles.flexRowNC,
        basicCompStyles.dishListView,
        basicCompStyles.defaultBorder
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
    dishListTextIconView: [
        basicCompStyles.flexColumnNFs,
        basicCompStyles.defaultPadding,
        basicCompStyles.fullSize
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
}

export const animate = (isAnimate) => StyleSheet.create({
    rotation: {
        transform:[{
            rotate: isAnimate ? '0deg' : '180deg'
        }]
    }
})