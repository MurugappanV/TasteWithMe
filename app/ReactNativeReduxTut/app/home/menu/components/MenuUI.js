import React, { PureComponent } from "react";
import { TouchableHighlight, View} from "react-native";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Accordion from '../../../components/accordion';
import CollapseHeader from '../../components/CollapseHeader';
import CollapseContent from '../../components/CollapseContent';
import * as Sizes from '../../../Constants/Sizes';
import * as Colors from '../../../Constants/Colors';
import * as IconName from '../../../Constants/IconName';
import { basicStyles, basicCompStyles } from '../../../StyleSheets/styles';
import FilterUI from "../../filter";
import LoadingIndicator from "../../../components/LoadingIndicator";

class MenuUI extends PureComponent {

    constructor() {
        super()
        this.state = { isCardView: true, isFilterView: false }
    }

    onViewChangePress = () => {
        this.setState({ isCardView: !this.state.isCardView })
    }

    onViewFilterPress = () => {
        this.setState({ isFilterView: true })
    }

    onCloseFilter = () => {
        this.setState({ isFilterView: false })
    }

    renderFilter = ((isFileterNeeded) => { if(isFileterNeeded) { return <FilterUI closeFilter={this.onCloseFilter}/> } }).bind(this)

    renderHeader = (data, isCollapsed) => <View><CollapseHeader headerText={data.name} isCollapsed={isCollapsed} /></View>

    renderContent = (data, isCollapsed) => <CollapseContent navigation={this.props.navigation} data={data} isCollapsed={isCollapsed} isCardView={this.state.isCardView} />

    render() {
        return <LoadingIndicator containerStyle={basicStyles.fullContentPad0} spinnerColor={Colors.MEDIUM_INDICATOR_COLOR} loadingStatus={this.props.loadingStatus}>
            <View style={basicStyles.fullContentPadLR}>
                <Accordion style={basicStyles.fullContent} data={this.props.dishListData} extraData={this.state.isCardView} itemHeader={this.renderHeader.bind(this)} itemContent={this.renderContent.bind(this)} />
                <TouchableHighlight style={basicStyles.absoluteBottomCircle} onPress={this.onViewChangePress}>
                    <MaterialIcon name={this.state.isCardView ? IconName.CARD_VIEW_ICON_NAME : IconName.LIST_VIEW_ICON_NAME} size={Sizes.DEFAULT_HEADER_ICON_SIZE} color={Colors.ACTIVE_ICON_COLOR} />
                </TouchableHighlight>
                <TouchableHighlight style={basicStyles.absoluteBottomMiddleCircle} onPress={this.onViewFilterPress}>
                    <MaterialIcon name={IconName.FILTER_ICON_NAME} size={Sizes.DEFAULT_HEADER_ICON_SIZE} color={Colors.ACTIVE_ICON_COLOR} />
                </TouchableHighlight>
                {this.renderFilter(this.state.isFilterView)}
            </View>
        </LoadingIndicator>
    }
}

export default MenuUI;

//navigation, dishListData