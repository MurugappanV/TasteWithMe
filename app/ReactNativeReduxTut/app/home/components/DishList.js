import React, {PureComponent} from "react";
import { Image, View, Text, TouchableHighlight} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { basicStyles , basicCompStyles, sizes } from '../../StyleSheets/styles';
import * as IconName from '../../Constants/IconName';
import * as Colors from '../../Constants/Colors';
import * as Sizes from '../../Constants/Sizes';
import CustomTouchable from "../../components/CustomTouchable";


DishList = (item, navigation) => {
    return <View style={basicStyles.dishListView}>
            <View style={basicStyles.dishListImageView}>
                <Image style={sizes.listImage} resizeMode='contain' source={{uri: item.photoUrl, cache: 'force-cache',}} />
            </View>
            <View style={basicStyles.dishListTextView}>
                <View style={basicStyles.dishListTextIconView}>
                    <View >
                        <Text numberOfLines={1} ellipsizeMode="tail" style={basicStyles.darkTitleText} >{item.name}</Text>
                        
                        <Icon style={basicCompStyles.absoluteTop5Right0} name={IconName.VEG_INDICATE_ICON_NAME} size={Sizes.SMALL_ICON_SIZE} color={item.type == "VEG" ? Colors.VEG_COLOR : Colors.NON_VEG_COLOR} /> 
                    </View>
                </View>
                <View>
                    <Text style={basicStyles.darkTitleText}>{item.rate}</Text>
                </View>
                <CustomTouchable onPress={() => navigation.navigate('DishDetails')} >
                    <IonIcon style={[basicStyles.darkMediumIcon, basicCompStyles.paddingLR10]} name={IconName.FORWARD_ICON_NAME}/>
                </CustomTouchable>
            </View>
        </View>
}

export default DishList;