import React, {PureComponent} from "react";
import {TouchableOpacity, ScrollView, Text, View, TextInput} from "react-native";
import { basicStyles, basicCompStyles } from '../StyleSheets/styles';
import Icon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import * as Sizes from '../Constants/Sizes';
import * as Colors from '../Constants/Colors';

const backButton = (backLogo, navigation, onSearchClose, isSearchActive, isNavigateBack) => {
    let color = '';
    let onPress = null;

    if(isSearchActive) {
        color = Colors.MEDIUM_TEXT_COLOR
        onPress = onSearchClose
    } else if(isNavigateBack) {
        color = Colors.LIGHT_TEXT_COLOR
        onPress = () => navigation.goBack()
    }

    if(backLogo && (isSearchActive || isNavigateBack)) {//isSearchActive && 
        return <TouchableOpacity onPress={onPress}>
            <IonIcon style={basicCompStyles.paddingLR10} name={backLogo} size={Sizes.DEFAULT_HEADER_ICON_SIZE} color={color} />
        </TouchableOpacity>
    }
}

const logo = (logo, navigation, isSearchActive) => {
    if(!isSearchActive && logo) {
        return <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
            <Icon style={basicCompStyles.paddingLR10} name={logo} size={Sizes.DEFAULT_HEADER_ICON_SIZE} color={Colors.ACTIVE_ICON_COLOR} />
        </TouchableOpacity>
    }
}

const title = (title, searchPlaceHoler, onFinish, onSearchTextChange, searchValue, isSearchActive) => {
    if(!isSearchActive && title) {
        return <Text style={[basicStyles.paddedHeaderText, basicCompStyles.fullSize]}>{title}</Text>
    } else if (isSearchActive) {
        return <ScrollView scrollEnabled={false}>
            <TextInput 
                underlineColorAndroid={Colors.TRANSPARENT} 
                placeholderTextColor={Colors.MEDIUM_TEXT_COLOR} 
                placeholder={searchPlaceHoler} 
                autoFocus={true}
                selectionColor={Colors.DARK_TEXT_COLOR}
                onSubmitEditing={this.handleEditComplete} 
                onChangeText={(text) => onSearchTextChange(text)}
                value={searchValue}
                style={[basicStyles.paddedHeaderText, basicCompStyles.fullSize, {color: Colors.DARK_TEXT_COLOR}]}
            />
        </ScrollView>
    }
}

const search = (searchLogo, closeLogo, onSearchPress, onSearchClear, isSearchActive, searchValue) => {
    let logoName = '';
    let color = '';
    let onPress = '';

    if(isSearchActive) {
        if(searchValue.length > 0) {
            logoName = closeLogo
            color = Colors.MEDIUM_TEXT_COLOR
            onPress = onSearchClear
        } else {
            logoName = closeLogo
            color = Colors.MEDIUM_TEXT_COLOR
            onPress = onSearchClear
        }
    } else {
        logoName = searchLogo
        color = Colors.LIGHT_TEXT_COLOR
        onPress = onSearchPress
    }

    if(logoName) {
        return <TouchableOpacity onPress={onPress}>
            <IonIcon style={basicCompStyles.paddingLR10} name={logoName} size={Sizes.DEFAULT_HEADER_ICON_SIZE+3} color={color} />
        </TouchableOpacity>
    }
}

class HomeHeader extends PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = { isSearchActive: false, searchValue: '' };
    }

    onSearchPressed = () => {
        this.setState({ isSearchActive: true });
    }

    onSearchTextChanged = (searchValue) => {
        this.setState({ searchValue });
    }

    onSearchClearPressed = () => {
        this.onSearchTextChanged('');
    }

    onSearchClosed = () => {
        this.setState({ isSearchActive: false, searchValue: '' });
    }

    render() {
        let {backLogo, leftLogo, searchLogo, closeLogo, searchPlaceHoler, headerTitle, navigation, isNavigateBack} = this.props
        let {isSearchActive, searchValue} = this.state
        return <View style={[basicStyles.pageHeader, basicCompStyles.defaultPadding, basicCompStyles.flexRowNC, isSearchActive && {backgroundColor: Colors.LIGHT_BACKGROUND_COLOR }]}>
            {backButton(backLogo, navigation, this.onSearchClosed, isSearchActive, isNavigateBack)}
            {logo(leftLogo, navigation, isSearchActive)}
            {title(headerTitle, searchPlaceHoler, this.onSearchClosed, this.onSearchTextChanged, searchValue, isSearchActive)}
            {search(searchLogo,closeLogo,this.onSearchPressed, this.onSearchClearPressed, isSearchActive, searchValue)}
        </View>  
    } 
}

export default HomeHeader;
