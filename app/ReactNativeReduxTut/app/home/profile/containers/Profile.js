import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Sizes from '../../../Constants/Sizes';
import * as IconName from '../../../Constants/IconName';
import * as Labels from '../../../Constants/Labels';
import UnderConstruction from '../../../components/UnderConstruction';
import { View , Animated, PanResponder, Text} from "react-native";
import { fullFilterHeight, fullWidth, fullFilterWidth, basicCompStyles, sizes , fullFilterHeightNegate, halfFilterHeightNegate} from "../../../StyleSheets/styles";
import FilterUI from "../../filter";

class Profile extends PureComponent {
    static navigationOptions = {
        tabBarLabel: Labels.PROFILE_TAB_LABEL,
        tabBarIcon: ({ tintColor }) => (
            <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={Sizes.DEFAULT_HEADER_ICON_SIZE+5} color={tintColor} />
        ),
    };

    

    render() {
        return <FilterUI/>
        // return <UnderConstruction label='Under Construction' iconName={IconName.UNDER_CONSTRUCTION_ICON_NAME}/>        
    }
}


function mapStateToProps(state) {
    return {
        
    }
}


export default connect(mapStateToProps)(Profile);





{/* <View  style={{position: 'absolute', height: fullFilterWidth-200, width: fullFilterWidth-200, borderRadius: fullFilterHeight-100, backgroundColor: 'pink', bottom: fullFilterHeightNegate+100, left: halfFilterHeightNegate+100}}>
                
                <View style={{transform: [{ rotate: '-20deg'}],position: 'absolute', height: fullFilterWidth-200, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: innerItemleft2, alignItems: 'center'}}>
                    <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={'white'} />
                </View>
                <View style={{transform: [{ rotate: '0deg'}], position: 'absolute', height: fullFilterWidth-200, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: innerItemleft2, alignItems: 'center'}}>
                    <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={'white'} />
                </View>
                <View style={{transform: [{ rotate: '20deg'}],position: 'absolute', height: fullFilterWidth-200, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: innerItemleft2, alignItems: 'center'}}>
                    <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={'white'} />
                </View>
            </View>
            <View  style={{position: 'absolute', height: fullFilterWidth-400, width: fullFilterWidth-400, borderRadius: fullFilterHeight-200, backgroundColor: 'purple', bottom: fullFilterHeightNegate+200, left: halfFilterHeightNegate+200}}>
                
                <View style={{transform: [{ rotate: '-40deg'}],position: 'absolute', height: fullFilterWidth-400, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: innerItemleft3, alignItems: 'center'}}>
                    <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={'white'} />
                </View>
                <View style={{transform: [{ rotate: '0deg'}], position: 'absolute', height: fullFilterWidth-400, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: innerItemleft3, alignItems: 'center'}}>
                    <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={'white'} />
                </View>
                <View style={{transform: [{ rotate: '40deg'}],position: 'absolute', height: fullFilterWidth-400, width: 100, paddingTop: 20,  backgroundColor: 'transparent', bottom: 0, left: innerItemleft3, alignItems: 'center'}}>
                    <Icon name={IconName.PROFILE_TAB_ICON_NAME} size={50} color={'white'} />
                </View>
            </View> */}