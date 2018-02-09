import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import * as IconName from '../../Constants/IconName';
import HomeHeader from './HomeHeader';
import UnderConstruction from '../../components/UnderConstruction';

class DishDetails extends PureComponent {
    static navigationOptions = {
        header: ({navigation}) =>  <HomeHeader headerTitle='Dish Details' leftLogo={IconName.HOTEL_LOGO} backLogo={IconName.BACK_ICON_NAME} navigation={navigation} isNavigateBack={true}/>
    };

    render() {
        return <UnderConstruction label='Under Construction' iconName={IconName.UNDER_CONSTRUCTION_ICON_NAME}/>     
    }
}


function mapStateToProps(state) {
    return {
        
    }
}


export default connect(mapStateToProps)(DishDetails);


//console.log(`+++++++++++++++++++++++++++++++++++++++-${props}`)
//console.log(props)