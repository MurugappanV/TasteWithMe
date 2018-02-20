import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { aboutUsDataActions } from "../actions";
import AboutUsUI from "../components/AboutUsUI";
import * as GeneralConstants from '../../Constants/GeneralConstants';

class AboutUs extends PureComponent {

    componentDidMount() {
        this.props.hotelDetailById(GeneralConstants.HOTEL_ID);
    }

    render() {
        return <AboutUsUI hotelDetailsById={this.props.hotelDetailsById} fetchHotelDetailsStatus={this.props.fetchHotelDetailsStatus}/>
    }
}

function mapStateToProps(state) {
    return {
        hotelDetailsById: state.fetchHotelDetails.hotel,
        fetchHotelDetailsStatus: state.fetchHotelDetailStatus
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(aboutUsDataActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);