import React, {PureComponent} from "react";
import { FlatList, TouchableHighlight, ScrollView, View, TextInput, Image, StyleSheet, Text} from "react-native";
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Accordion from '../../components/Accordion';
import CollapseHeader from '../../components/CollapseHeader';
import CollapseContent from '../../components/CollapseContent';
import * as Sizes from '../../Constants/Sizes';
import * as Colors from '../../Constants/Colors';
import * as IconName from '../../Constants/IconName';
import * as Labels from '../../Constants/Labels';
import { basicStyles } from '../../StyleSheets/styles';

class Menu extends PureComponent {
    static navigationOptions = {
        tabBarLabel: Labels.MENU_TAB_LABEL,
        tabBarIcon: ({ tintColor }) => (
            <Icon name={IconName.MENU_TAB_ICON_NAME} size={Sizes.DEFAULT_HEADER_ICON_SIZE} color={tintColor} />
        ),
    };

    constructor () {
        super()
        this.state = { isCardView: true, }
    }

    MockData = [ {
            headerText: 'Soup',
            member: [ {
                    title: 'memberTitle1',
                    content: 'content',
                },
            ]
        }, {
            headerText: 'Starter',
            member: [ {
                    title: 'memberTitle2',
                    content: 'content',
                },
            ]
        }, {
            headerText: 'Dessert',
            member: [ {
                    title: 'memberTitle3',
                    content: 'content',
                },
            ]
        },
    ]

    onViewChangePress = () => {
        this.setState({ isCardView: !this.state.isCardView })
    }

    renderHeader = (data, isCollapsed)  => <View><CollapseHeader data={data} isCollapsed={isCollapsed}/></View>

    renderContent = (data, isCollapsed) => <CollapseContent data={data} isCollapsed={isCollapsed} isCardView={this.state.isCardView}/>

    render() {
        return <View style={basicStyles.fullContent}>
            <Accordion data={this.MockData} extraData={this.state.isCardView} itemHeader={this.renderHeader.bind(this)} itemContent={this.renderContent.bind(this)}/>
            <TouchableHighlight style={basicStyles.absoluteBottomCircle} onPress={this.onViewChangePress}>
                <MaterialIcon name={this.state.isCardView ? IconName.CARD_VIEW_ICON_NAME : IconName.LIST_VIEW_ICON_NAME} size={Sizes.DEFAULT_HEADER_ICON_SIZE} color={Colors.ICON_WHITE} />
            </TouchableHighlight>
        </View>
    }
}


function mapStateToProps(state) {
    return {
        
    }
}


export default connect(mapStateToProps)(Menu);


        // <ExpanableList style={{paddingLeft: 5, paddingTop: 5, paddingRight: 5, paddingBottom: 5, backgroundColor: 'white'}}
        //     dataSource={this.MockData}
        //     headerKey="header"
        //     memberKey="member"
        //     renderRow={this._renderRow}
        //     renderSectionHeaderX={this._renderSection}
        //     // openOptions={[1,2,]}
        // />
        // <View style={{paddingLeft: 5, paddingTop: 5, paddingRight: 5, paddingBottom: 5, backgroundColor: 'white'}}>
        //     <Accordion 
        //         sections={this.MockData}
        //         renderHeader={this._renderHeader}
        //         renderContent={this._renderContent}
        //         initiallyActiveSection={1}
        //     />
            
        // </View>
        // <FlatList style={{paddingLeft: 5, paddingTop: 5, paddingRight: 5, paddingBottom: 5, backgroundColor: 'white'}}
        //     data={this.MockData}
        //     // extraData={this.state}
        //     keyExtractor={(item, index) => item.header}
        //     renderItem={this._renderHeader}
        // />



            //     if(this.state.isCardView) {
    //         return <View><Text>hot and sour</Text>
    //             <Text>manchow</Text>
    //             <Text>sweetcorn</Text>
    //         </View>
    //     } else {
    //         return <View><Text>Fries</Text>
    //             <Text>pop corn</Text>
    //             <Text>chicken 65</Text>
    //         </View>
    //     }
    // }


        // constructor () {
    //     super()
    //     this.state = { isCollapsed: false, }
    // }

    // MockData = [ {
    //         header: 'sectionHeader1',
    //         member: [ {
    //                 title: 'memberTitle1',
    //                 content: 'content',
    //             },
    //         ]
    //     }, {
    //         header: 'sectionHeader2',
    //         member: [ {
    //                 title: 'memberTitle2',
    //                 content: 'content',
    //             },
    //         ]
    //     }, {
    //         header: 'sectionHeader3',
    //         member: [ {
    //                 title: 'memberTitle3',
    //                 content: 'content',
    //             },
    //         ]
    //     },
    // ]

    // _onPress = () => {
    //     this.setState({ isCollapsed: !this.state.isCollapsed })
    // }

    // _renderContent = (section) => {
    //     return <View style={{height: 40}}>
    //         <Text>{section.member[0].title}</Text>
    //     </View>
    // };
    // _renderHeader = ({item})  => {return <View style={{height: 40}}>
    //         <Text>{item.header}</Text>
    //         <Collapsible collapsed={isCollapsed}>
    //             <Text>{item.member[0].title}</Text>
    //         </Collapsible>;
    //     </View>
    // };


    // <Text>{`value${this.state.isCardView}`}</Text>