import React, {PureComponent} from "react";
import {FlatList, Image, View, Text} from "react-native";
import { basicStyles , basicCompStyles, sizes } from '../StyleSheets/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import GridView from 'react-native-super-grid';
import * as IconName from '../Constants/IconName';
import * as Colors from '../Constants/Colors';
import * as Sizes from '../Constants/Sizes';
import DishCard from "./DishCard";
import DishList from "./DishList";

class CollapseContent extends PureComponent  {
    renderItem = () => {
        if(this.props.isCardView) {
            return <GridView
                itemDimension={130}
                items={this.props.data.member}
                spacing={Sizes.DEFAULT_PADDING}
                style={basicStyles.subContent}
                renderItem={item => DishCard(item, this.props.navigation)}
            />
        } else {
            return <FlatList 
                data={this.props.data.member}
                extraData={this.props.isCardView}
                keyExtractor={(item, index) => item.title}
                renderItem={({item}) => DishList(item, this.props.navigation)}
                style={basicStyles.subContent}
            />
        }
    };

    render() {
        return this.renderItem();
    }
    
}

export default CollapseContent;

//= ({data, isCardView}) =>


// renderCardItem = (item) => {
//     return <View style={basicStyles.dishCardView}>
//         <View style={basicStyles.dishCardImageView}>
//             <Image style={basicStyles.dishCardImage} resizeMode='contain' source={{uri: item.imageUrl}} />
            
//         </View>
//         <View style={basicStyles.dishCardTextView}>
//             <View>
//                 <Text numberOfLines={1} ellipsizeMode="tail" style={basicStyles.darkTitleText}>{item.title}</Text>
//                 <Icon style={basicCompStyles.absoluteTop5Right0} name={IconName.VEG_INDICATE_ICON_NAME} size={Sizes.SMALL_ICON_SIZE} color={Colors.VEG_COLOR} />
//             </View>
//         </View>
//         <Text style={basicStyles.darkTitleText}>{item.price}</Text>
//     </View>
// }


    // renderListItem = ({item}) => {
    //     return <View style={basicStyles.dishListView}>
    //         <View style={basicStyles.dishListImageView}>
    //             <Image style={sizes.listImage} resizeMode='contain' source={{uri: item.imageUrl}} />
    //         </View>
    //         <View style={basicStyles.dishListTextView}>
    //             <View style={basicStyles.dishListTextIconView}>
    //                 <View >
    //                     <Text numberOfLines={1} ellipsizeMode="tail" style={basicStyles.darkTitleText} >{item.title}</Text>
    //                     <Icon style={basicCompStyles.absoluteTop5Right0} name={IconName.VEG_INDICATE_ICON_NAME} size={Sizes.SMALL_ICON_SIZE} color={Colors.VEG_COLOR} /> 
    //                 </View>
    //             </View>
    //             <View>
    //                 <Text style={basicStyles.darkTitleText}>{item.price}</Text>
    //             </View>
    //         </View>
            
    //     </View>
    // }