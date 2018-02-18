import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { aboutUsDataActions } from "../actions";
import AboutUsUI from "../components/AboutUsUI";

class AboutUs extends PureComponent {

    componentDidMount() {
        this.props.hotelDetailById();
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