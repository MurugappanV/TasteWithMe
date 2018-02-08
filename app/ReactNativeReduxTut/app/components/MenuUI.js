import React, { PureComponent } from "react";
import { FlatList, PanResponder, TouchableHighlight, Animated, ScrollView, View, TextInput, Image, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Accordion from '../components/Accordion';
import CollapseHeader from '../components/CollapseHeader';
import CollapseContent from '../components/CollapseContent';
import * as Sizes from '../Constants/Sizes';
import * as Colors from '../Constants/Colors';
import * as IconName from '../Constants/IconName';
import * as Labels from '../Constants/Labels';
import { basicStyles, fullWidth , contentFullHeight } from '../StyleSheets/styles';

class MenuUI extends PureComponent {

    constructor() {
        super()
        this.state = { isCardView: false }
    }

    componentDidMount() {
        this.props.dishList();
    }

    onViewChangePress = () => {
        this.setState({ isCardView: !this.state.isCardView })
    }

    renderHeader = (data, isCollapsed) => <View><CollapseHeader headerText={data.name} isCollapsed={isCollapsed} /></View>

    renderContent = (data, isCollapsed) => <CollapseContent navigation={this.props.navigation} data={data} isCollapsed={isCollapsed} isCardView={this.state.isCardView} />

    render() {
        return <View style={[{flex: 1, alignItems: 'center', backgroundColor: Colors.CONTENT_BACKGROUND_COLOR}]}>
            <Accordion style={basicStyles.fullContent} data={this.props.dishListData} extraData={this.state.isCardView} itemHeader={this.renderHeader.bind(this)} itemContent={this.renderContent.bind(this)} />
            <TouchableHighlight style={basicStyles.absoluteBottomCircle} onPress={this.onViewChangePress}>
                <MaterialIcon name={this.state.isCardView ? IconName.CARD_VIEW_ICON_NAME : IconName.LIST_VIEW_ICON_NAME} size={Sizes.DEFAULT_HEADER_ICON_SIZE} color={Colors.ACTIVE_ICON_COLOR} />
            </TouchableHighlight>
        </View>
    }
}

export default MenuUI;

//navigation, dishListData