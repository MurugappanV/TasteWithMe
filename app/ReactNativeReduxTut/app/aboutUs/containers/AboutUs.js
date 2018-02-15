import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { View, Text, TouchableOpacity, StyleSheet, Linking, Platform, Share  } from "react-native";
import UnderConstruction from '../../components/UnderConstruction';
import CarouselView from '../../components/CarouselView';
import { aboutUsDataActions } from "../actions";
import { basicStyles, fullWidth, fullHeight, contentFullHeight } from "../../StyleSheets/styles";
import { hotelDetailByID } from "../graphql/quries";
import { CONTENT_BACKGROUND_COLOR } from "../../Constants/Colors";
import *  as GeneralConstants from '../../Constants/GeneralConstants';
import Icon from 'react-native-vector-icons/MaterialIcons';

class AboutUs extends PureComponent {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.hotelDetailById();
    }

    renderImages = () => {
        imageArray = this.props.hotelDetailsById.hotelImages.hotelImageUrls.map(element => {
            return element
        })
        return <CarouselView images={imageArray} />
    }

    renderHotelDetails = () => {
        hotelDetails = this.props.hotelDetailsById
        return <View style={[{ padding: 10 }]}>
            <View style={[{ flexDirection: 'row', width: fullWidth}]}>
                <TouchableOpacity style={[{flex:1, alignItems: 'center'}]} onPress={() => this.makePhoneCall(`${hotelDetails.hotelDetail.storePhoneNumber}`, true)}>
                    <View>
                        <Icon style={[]} name={'call'}></Icon>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[{flex:1, alignItems: 'center'}]} onPress={() => this.makePhoneCall(`${hotelDetails.hotelDetail.storePhoneNumber}`, true)}>
                    <View style={[]}>
                        <Icon style={[]} name={'near-me'}></Icon>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[{flex:1, alignItems: 'center'}]} onPress={() => Share.share(
                    {
                        message : 'Checkout TasteE app on playstore, Click on the following link..',
                        title : 'Share your TasteE'
                    }
                )}>
                    <View style={[]}>
                        <Icon style={[]} name={'share'}></Icon>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={[{ alignItems: 'flex-start' }]}>
                <Text style={[{ fontSize: 32 }]}>{hotelDetails.name}</Text>
                <Text>{hotelDetails.hotelDetail.description}</Text>
            </View>
            <View style={[{ alignItems: 'flex-start', width: fullWidth }]}>
                <TouchableOpacity style={[]} onPress={() => this.makePhoneCall(`${hotelDetails.hotelDetail.storePhoneNumber}`, true)}>
                    <View style={[{ flexDirection: 'row' }]}>
                        <Icon style={[]} name={'call'}></Icon>
                        <Text style={[]}>{hotelDetails.hotelDetail.storePhoneNumber}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    }

    makePhoneCall = (phoneNumber, prompt) => {
        let url;
        if (Platform.OS !== 'android') {
            url = prompt ? 'telprompt:' : 'tel:';
        }
        else {
            url = 'tel:';
        }
        url += phoneNumber;
        LaunchURL(url);
    }



    render() {
        let { hotelDetailsById } = this.props;
        if (this.props.fetchHotelDetailsStatus == GeneralConstants.LOADED) {
            return <View style={{ width: fullWidth, height: fullHeight, backgroundColor: CONTENT_BACKGROUND_COLOR }}>
                {this.renderImages()}
                {this.renderHotelDetails()}
            </View>
        } else if (this.props.fetchHotelDetailsStatus == GeneralConstants.LOADING) {
            return <View style={{ width: fullWidth, height: fullHeight, backgroundColor: CONTENT_BACKGROUND_COLOR }} />
        } else {
            return <View style={{ width: fullWidth, height: fullHeight, backgroundColor: CONTENT_BACKGROUND_COLOR }} />
        }
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

const LaunchURL = function (url) {
    Linking.canOpenURL(url).then(supported => {
        if (!supported) {
            console.log('Can\'t handle url: ' + url);
        } else {
            Linking.openURL(url)
                .catch(err => {
                    if (url.includes('telprompt')) {
                        // telprompt was cancelled and Linking openURL method sees this as an error
                        // it is not a true error so ignore it to prevent apps crashing
                        // see https://github.com/anarchicknight/react-native-communications/issues/39
                    } else {
                        console.warn('openURL error', err)
                    }
                });
        }
    }).catch(err => console.warn('An unexpected error happened', err));
};


export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);