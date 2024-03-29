import React, { PureComponent } from "react";
import { StatusBar } from "react-native";
import SplashScreen from "../splashScreen";
import BaseNavigator from "./BaseNavigator";
import * as GeneralConstants from '../Constants/GeneralConstants';

class AppContainer extends PureComponent {

    componentDidMount() {
        StatusBar.setHidden(GeneralConstants.IS_STATUS_BAR_HIDDEN);
    }

    render() {
        return <SplashScreen NextPageReactElement={BaseNavigator}/>        
    }    
}

export default AppContainer;





    // constructor(props) {
    //     super(props);
    // }

    // addRecipe() {
    //     this.props.addRecipe();
    // }

        	// do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        //SplashScreen.hide();

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(ActionCreators, dispatch);
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

//import SplashScreen from 'react-native-splash-screen';