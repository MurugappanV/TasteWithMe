import React, {PureComponent} from "react";
import {FlatList, Image, View, Text, TouchableHighlight} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { basicStyles , basicCompStyles, sizes } from '../StyleSheets/styles';
import * as IconName from '../Constants/IconName';
import * as Colors from '../Constants/Colors';
import * as Sizes from '../Constants/Sizes';


DishList = (item, navigation) => {
    return <TouchableHighlight onPress={() => navigation.navigate('DishDetails')} underlayColor={Colors.DARK_HIGHLIGHT_COLOR}>
        <View style={basicStyles.dishListView}>
            <View style={basicStyles.dishListImageView}>
                <Image style={sizes.listImage} resizeMode='contain' source={{uri: item.imageUrl}} />
            </View>
            <View style={basicStyles.dishListTextView}>
                <View style={basicStyles.dishListTextIconView}>
                    <View >
                        <Text numberOfLines={1} ellipsizeMode="tail" style={basicStyles.darkTitleText} >{item.title}</Text>
                        <Icon style={basicCompStyles.absoluteTop5Right0} name={IconName.VEG_INDICATE_ICON_NAME} size={Sizes.SMALL_ICON_SIZE} color={Colors.VEG_COLOR} /> 
                    </View>
                </View>
                <View>
                    <Text style={basicStyles.darkTitleText}>{item.price}</Text>
                </View>
            </View>
        </View>
    </TouchableHighlight>
}

export default DishList;