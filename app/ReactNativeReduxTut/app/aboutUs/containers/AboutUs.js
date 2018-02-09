import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import { View , Text } from "react-native";
import UnderConstruction from '../../components/UnderConstruction';
import CarouselView from '../../components/CarouselView';
import { aboutUsDataActions } from "../actions";

class AboutUs extends PureComponent {

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
    return bindActionCreators(aboutUsDataActions, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(AboutUs);