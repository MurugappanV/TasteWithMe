import React, { Component } from "react";
//import { View, Text,TouchableHighlight} from "react-native";
import { connect } from "react-redux";
import { ActionCreators } from "../actions";
import { bindActionCreators } from "redux";
import Home from "./Home";
//import SplashScreen from 'react-native-splash-screen';
import SplashScreen from "./SplashScreen";

class AppContainer extends Component {

    componentDidMount() {
    	// do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        //SplashScreen.hide();
    }

    render() {
        return <SplashScreen  {...this.props}/>        
    }    
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => { return { } }, mapDispatchToProps)(AppContainer);





    // constructor(props) {
    //     super(props);
    // }

    // addRecipe() {
    //     this.props.addRecipe();
    // }



    // <View>
        //     <Text style={{marginTop: 20}}>
        //         This is your AppContainr displaying.
        //         Recipe Count : {this.props.recipeCount}
        //     </Text>
        //     <TouchableHighlight onPress={() => {this.addRecipe() }}>
        //         <Text>Add recipe</Text>
        //     </TouchableHighlight>
        // </View>
//export default AppContainer;