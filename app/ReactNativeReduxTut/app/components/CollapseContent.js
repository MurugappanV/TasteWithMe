import React, {PureComponent} from "react";
import {FlatList, View } from "react-native";
import { basicStyles , basicCompStyles, sizes } from '../StyleSheets/styles';
import DishCard from "./DishCard";
import DishList from "./DishList";

class CollapseContent extends PureComponent  {
    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem = () => {
        if(this.props.isCardView) {
            return <View style={basicStyles.subContentCardView}><FlatList 
                data={this.props.data.dish}
                extraData={this.props.isCardView}
                keyExtractor={(item, index) => item.name}
                renderItem={({item}) => DishCard(item, this.props.navigation)}
                numColumns={2}
                horizontal={false}
            /></View>
        } else {
            return <FlatList 
                data={this.props.data.dish}
                extraData={this.props.isCardView}
                keyExtractor={(item, index) => item.name}
                renderItem={({item}) => DishList(item, this.props.navigation)}
                // numColumns={2}
                horizontal={false}
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



    // <GridView
    //             itemDimension={130}
    //             items={this.props.data.dish}
    //             spacing={Sizes.DEFAULT_PADDING}
    //             style={basicStyles.subContent}
    //             renderItem={item => DishCard(item, this.props.navigation)}
    //         />