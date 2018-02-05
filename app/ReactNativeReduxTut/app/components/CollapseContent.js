import React, {PureComponent} from "react";
import {FlatList, Image, View, Text} from "react-native";
import { basicStyles } from '../StyleSheets/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import GridView from 'react-native-super-grid';
import * as IconName from '../Constants/IconName';
import * as Colors from '../Constants/Colors';
import * as Sizes from '../Constants/Sizes';

class CollapseContent extends PureComponent  {
    renderListItem = ({item}) => {
        return <View style={basicStyles.dishListView}>
            <View style={basicStyles.dishListImageView}>
                <Image style={{width: 40, height: 40}} resizeMode='contain' source={{uri: item.imageUrl}} />
            </View>
            <View style={basicStyles.dishListTextView}>
                <View style={{flex: 7,padding: 5, flexDirection: 'column', alignItems: 'flex-start'}}>
                    <View >
                        <Text numberOfLines={1} ellipsizeMode="tail" style={basicStyles.darkTitleText} >{item.title}</Text>
                        <Icon style={[ {position: 'absolute', top: 5, right: 0}]} name={IconName.VEG_INDICATE_ICON_NAME} size={10} color={Colors.VEG_COLOR} /> 
                    </View>
                </View>
                <View>
                    <Text style={basicStyles.darkTitleText}>{item.price}</Text>
                </View>
            </View>
            
        </View>
    }

    renderCardItem = (item) => {
        return <View style={basicStyles.dishCardView}>
            <View style={basicStyles.dishCardImageView}>
                <Image style={basicStyles.dishCardImage} resizeMode='contain' source={{uri: item.imageUrl}} />
                
            </View>
            <View style={basicStyles.dishCardTextView}>
                <View>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={basicStyles.darkTitleText}>{item.title}</Text>
                    <Icon style={[ {position: 'absolute', top: 5, right: 0}]} name={IconName.VEG_INDICATE_ICON_NAME} size={10} color={Colors.VEG_COLOR} />
                </View>
            </View>
            <Text style={basicStyles.darkTitleText}>{item.price}</Text>
        </View>
    }

    renderItem = () => {
        if(this.props.isCardView) {
            return <GridView
                itemDimension={130}
                items={this.props.data.member}
                spacing={Sizes.DEFAULT_PADDING}
                style={basicStyles.subContent}
                renderItem={item => this.renderCardItem(item)}
            />
        } else {
            return <FlatList 
                data={this.props.data.member}
                extraData={this.props.isCardView}
                keyExtractor={(item, index) => item.title}
                renderItem={this.renderListItem}
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