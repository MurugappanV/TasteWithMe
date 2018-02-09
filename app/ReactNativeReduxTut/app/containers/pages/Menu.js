import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { dishList } from "../../actions/dishDisDataActions";
import { DishDataActions } from "../../actions";
import { bindActionCreators } from "redux";
import MenuUI from "../../components/MenuUI";
import FilterUI from "../../components/FilterUI";
import DraggableTopView from "../../components/DraggableTopView";
import Icon from 'react-native-vector-icons/Entypo';
import * as Sizes from '../../Constants/Sizes';
import * as IconName from '../../Constants/IconName';
import * as Labels from '../../Constants/Labels';


class Menu extends PureComponent {
    static navigationOptions = {
        tabBarLabel: Labels.MENU_TAB_LABEL,
        tabBarIcon: ({ tintColor }) => (
            <Icon name={IconName.MENU_TAB_ICON_NAME} size={Sizes.DEFAULT_HEADER_ICON_SIZE} color={tintColor} />
        ),
    };

    render() {
        return <DraggableTopView 
            mainView={<MenuUI navigation={this.props.navigation} dishListData={this.props.dishListData} dishList={this.props.dishList}/>} 
            dragView={<FilterUI/>}
            dragViewHeight={500}
            dragViewInitialVisibleSize={25}
        />        
    }
}


function mapStateToProps(state) {
    return {
        dishListData: state.generalDishList.presentDishList.dishList,
        dishListFetchingStatus: state.isDIshListLoading,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(DishDataActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);


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


//     MockData = [ {
//         headerText: 'Soup',
//         member: [ {
//                 title: 'Fries',
//                 content: 'tasty',
//                 price: '$7',
//                 imageUrl: 'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/fries.png?alt=media&token=f4f150b5-ad32-4aab-873a-8a9ce05d967a',
//                 dishType: ''
//             },{
//                 title: 'Pop corn',
//                 content: 'time pass',
//                 price: '$5',
//                 imageUrl: 'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/popcorn.png?alt=media&token=44d559d8-f270-41cb-af10-2c2221faaeaa',
//             },{
//                 title: 'chicken pallipalayamgdfgdfhhfghfhghg',
//                 content: 'hungry',
//                 price: '$12',
//                 imageUrl: 'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/chicken65.png?alt=media&token=62fb9ae1-38fc-461c-96e4-1f3383165c07',
//             },
//         ]
//     }, {
//         headerText: 'Starter',
//         member: [ {
//                 title: 'Fries',
//                 content: 'tasty',
//                 price: '$7',
//                 imageUrl: 'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/fries.png?alt=media&token=f4f150b5-ad32-4aab-873a-8a9ce05d967a',
//             },{
//                 title: 'Pop corn',
//                 content: 'time pass',
//                 price: '$5',
//                 imageUrl: 'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/popcorn.png?alt=media&token=44d559d8-f270-41cb-af10-2c2221faaeaa',
//             },{
//                 title: 'chicken 65',
//                 content: 'hungry',
//                 price: '$12',
//                 imageUrl: 'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/chicken65.png?alt=media&token=62fb9ae1-38fc-461c-96e4-1f3383165c07',
//             },
//         ]
//     }, {
//         headerText: 'Dessert',
//         member: [ {
//                 title: 'Fries',
//                 content: 'tasty',
//                 price: '$7',
//                 imageUrl: 'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/fries.png?alt=media&token=f4f150b5-ad32-4aab-873a-8a9ce05d967a',
//             },{
//                 title: 'Pop corn',
//                 content: 'time pass',
//                 price: '$5',
//                 imageUrl: 'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/popcorn.png?alt=media&token=44d559d8-f270-41cb-af10-2c2221faaeaa',
//             },{
//                 title: 'chicken 65',
//                 content: 'hungry',
//                 price: '$12',
//                 imageUrl: 'https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/chicken65.png?alt=media&token=62fb9ae1-38fc-461c-96e4-1f3383165c07',
//             },
//         ]
//     },
// ]