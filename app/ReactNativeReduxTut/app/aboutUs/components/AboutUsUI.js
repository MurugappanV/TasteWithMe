import React, { PureComponent } from "react";
import { basicStyles } from "../../StyleSheets/styles";
import * as Colors from '../../Constants/Colors';
import AboutUsDetail from "./AboutUsDetail";
import LoadingIndicator from "../../components/LoadingIndicator";

const AboutUsUI = (props) => {
    return <LoadingIndicator containerStyle={basicStyles.fullPageContentPad0} spinnerColor={Colors.MEDIUM_INDICATOR_COLOR} loadingStatus={props.fetchHotelDetailsStatus}>
        <AboutUsDetail hotelDetailsById={props.hotelDetailsById}/>
    </LoadingIndicator>
}

export default AboutUsUI;