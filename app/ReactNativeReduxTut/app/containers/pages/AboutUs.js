import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import * as IconName from '../../Constants/IconName';
import HomeHeader from './HomeHeader';
import UnderConstruction from '../../components/UnderConstruction';
import CarouselView from '../../components/CarouselView';

import { hotelDetailById } from "../../actions/aboutUsActions";
import { AboutUsActions } from "../../actions";
import { bindActionCreators } from "redux";

class AboutUs extends PureComponent {
    static navigationOptions = {
        header: ({navigation}) =>  <HomeHeader headerTitle='About Us' backLogo={IconName.BACK_ICON_NAME} navigation={navigation} isNavigateBack={true}/>
    };

    componentDidMount() {
        this.props.hotelDetailById();
    }

    render() {
        let {hotelDetailsById} = this.props;
        return <View>
            <Text>{"test-data"}</Text>
            <Text>{hotelDetailsById && hotelDetailsById.name}</Text>
        </View>     
    }
}


function mapStateToProps(state) {
    return {
        hotelDetailsById : state.fetchHotelDetails.hotel,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(AboutUsActions, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(AboutUs);