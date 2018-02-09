import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import HomeHeaderUI from "../components/HomeHeaderUI";
import { searchDatatActions } from "../actions";

class HomeHeader extends PureComponent {
    constructor(props) {
        super(props);
        this.onSearchPressed = this.onSearchPressed.bind(this);
        this.onSearchTextChanged = this.onSearchTextChanged.bind(this);
        this.onSearchClearPressed = this.onSearchClearPressed.bind(this);
        this.onSearchClosed = this.onSearchClosed.bind(this);
    }

    onSearchPressed = () => {
        if(this.props.isMenu) {
            this.props.setMenuSearchActive();
        } else {
            this.props.setFavSearchActive();
        }        
    }

    onSearchTextChanged = (searchValue) => {
        if(this.props.isMenu) {
            this.props.setMenuSearchValue(searchValue);
        } else {
            this.props.setFavSearchValue(searchValue);
        }
    }

    onSearchClearPressed = () => {
        if(this.props.isMenu) {
            this.props.setMenuSearchValue("");
        } else {
            this.props.setFavSearchValue("");
        }
    }

    onSearchClosed = () => {
        if(this.props.isMenu) {
            this.props.setMenuSearchInActive();
            this.props.setMenuSearchValue("");
        } else {
            this.props.setFavSearchInActive();
            this.props.setFavSearchValue("");
        }
    }

    componentWillUnmount() {
        this.onSearchClosed();
    }

    render() {
        let {isMenu, isMenuSearchActive, isFavSearchActive, menuSearchValue, favSearchValue, backLogo, leftLogo, searchLogo, closeLogo, searchPlaceHoler, headerTitle, navigation, isNavigateBack} = this.props
        return <HomeHeaderUI 
            {...this.props} 
            onSearchPressed={this.onSearchPressed}
            onSearchTextChanged={this.onSearchTextChanged}
            onSearchClearPressed={this.onSearchClearPressed}
            onSearchClosed={this.onSearchClosed}
            isSearchActive={isMenu ? isMenuSearchActive : isFavSearchActive} 
            searchValue={isMenu ? menuSearchValue : favSearchValue}
        />  
    } 
}

function mapStateToProps(state) {
    return {
        isMenuSearchActive : state.isMenuSearchActive,
        menuSearchValue : state.menuSearchValue,
        isFavSearchActive : state.isFavSearchActive,
        favSearchValue : state.favSearchValue,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(searchDatatActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);