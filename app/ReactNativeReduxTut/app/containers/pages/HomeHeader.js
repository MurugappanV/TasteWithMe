import React, {PureComponent} from "react";
import HomeHeaderUI from "../../components/HomeHeaderUI";
import { 
    setFavSearchActive,
    setFavSearchInActive,
    setFavSearchValue,
    setMenuSearchActive,
    setMenuSearchInActive,
    setMenuSearchValue
} from "../../actions/searchActions";
import {connect} from 'react-redux';
import { SearchActions } from "../../actions";
import { bindActionCreators } from "redux";

class HomeHeader extends PureComponent {
    constructor(props, context) {
        super(props, context);
        //this.state = { isSearchActive: false, searchValue: '' };
    }

    onSearchPressed = () => {
        if(this.props.isMenu) {
            this.props.setMenuSearchActive();
        } else {
            this.props.setFavSearchActive();
        }        
        //this.setState({ isSearchActive: true });
    }

    onSearchTextChanged = (searchValue) => {
        if(this.props.isMenu) {
            this.props.setMenuSearchValue(searchValue);
        } else {
            this.props.setFavSearchValue(searchValue);
        }
        
        //this.setState({ searchValue });
    }

    onSearchClearPressed = () => {
        if(this.props.isMenu) {
            this.props.setMenuSearchValue("");
        } else {
            this.props.setFavSearchValue("");
        }
        //this.onSearchTextChanged('');
    }

    onSearchClosed = () => {
        if(this.props.isMenu) {
            this.props.setMenuSearchInActive();
            this.props.setMenuSearchValue("");
        } else {
            this.props.setFavSearchInActive();
            this.props.setFavSearchValue("");
        }
        
        //this.setState({ isSearchActive: false, searchValue: '' });
    }

    componentWillUnmount() {
        this.onSearchClosed();
    }

    render() {
        let {isMenu, isMenuSearchActive, isFavSearchActive, menuSearchValue, favSearchValue, backLogo, leftLogo, searchLogo, closeLogo, searchPlaceHoler, headerTitle, navigation, isNavigateBack} = this.props
        //let {isSearchActive, searchValue} = this.state
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
    return bindActionCreators(SearchActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);