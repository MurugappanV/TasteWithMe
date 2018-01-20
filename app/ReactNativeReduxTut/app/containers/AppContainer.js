import React, { Component } from "react";
//import { View, Text,TouchableHighlight} from "react-native";
import { connect } from "react-redux";
import { ActionCreators } from "../actions";
import { bindActionCreators } from "redux";
import Home from "./Home";

class AppContainer extends Component {
    // constructor(props) {
    //     super(props);
    // }

    // addRecipe() {
    //     this.props.addRecipe();
    // }

    render() {
        return <Home  {...this.props}/>
        // <View>
        //     <Text style={{marginTop: 20}}>
        //         This is your AppContainr displaying.
        //         Recipe Count : {this.props.recipeCount}
        //     </Text>
        //     <TouchableHighlight onPress={() => {this.addRecipe() }}>
        //         <Text>Add recipe</Text>
        //     </TouchableHighlight>
        // </View>
    }
    
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => { return { } }, mapDispatchToProps)(AppContainer);

//export default AppContainer;