import React, {Component} from "react";
import {ScrollView, View, TextInput, Image, TouchableHighlight, StyleSheet, Text} from "react-native";
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import Accordion from 'react-native-collapsible/Accordion';

class Menu extends Component {
    static navigationOptions = {
        tabBarLabel: "mensu",
        tabBarIcon: ({ tintColor }) => (
            <Icon name="cake" style={{fontWeight: "regular"}} size={25} color={tintColor} />
        ),
    };

    MockData = [
        {
            header: 'sectionHeader1',
            member: [
                {
                    title: 'memberTitle1',
                    content: 'content',
                },
            ]
        },
        {
            header: 'sectionHeader2',
            member: [
                {
                    title: 'memberTitle2',
                    content: 'content',
                },
            ]
        },
        {
            header: 'sectionHeader3',
            member: [
                {
                    title: 'memberTitle3',
                    content: 'content',
                },
            ]
        },
    ]


    _renderContent = (section) => <Text>{section.member[0].title}</Text>;
    _renderHeader = (section)  => <Text>{section.header}</Text>;

    render() {
        return (
        // <ExpanableList style={{paddingLeft: 5, paddingTop: 5, paddingRight: 5, paddingBottom: 5, backgroundColor: 'white'}}
        //     dataSource={this.MockData}
        //     headerKey="header"
        //     memberKey="member"
        //     renderRow={this._renderRow}
        //     renderSectionHeaderX={this._renderSection}
        //     // openOptions={[1,2,]}
        // />
        <Accordion
        sections={this.MockData}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        initiallyActiveSection={1}
      />
        );
    }
}


function mapStateToProps(state) {
    return {
        
    }
}


export default connect(mapStateToProps)(Menu);