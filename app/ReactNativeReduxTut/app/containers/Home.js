import React, {Component} from "react";
import {ScrollView, View, TextInput, Image, TouchableHighlight, StyleSheet, Text} from "react-native";
import {connect} from 'react-redux';

class Home extends Component {
    searchRecipes() {
        this.props.fetchRecipes('banana');
    }

    render() {
        return <View>
            <View>
                <Text>Dummy line </Text>

                <Text>Dummy line </Text>
                <TouchableHighlight onPress={ () => this.searchRecipes() }>
                    <Text>Fetch Recipes</Text>
                </TouchableHighlight>
            </View>
            <ScrollView> 

            </ScrollView>
        </View>        
    }
}


function mapStateToProps(state) {
    return {
        searchedRecipes: state.searchedRecipes
    }
}


export default connect(mapStateToProps)(Home);