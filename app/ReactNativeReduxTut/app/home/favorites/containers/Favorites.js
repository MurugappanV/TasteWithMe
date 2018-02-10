import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Sizes from '../../../Constants/Sizes';
import * as IconName from '../../../Constants/IconName';
import * as Labels from '../../../Constants/Labels';
import UnderConstruction from '../../../components/UnderConstruction';

class Favorites extends PureComponent {
    static navigationOptions = {
        tabBarLabel: Labels.FAVORITE_TAB_LABEL,
        tabBarIcon: ({ tintColor }) => (
            <Icon name={IconName.FAVORITE_TAB_ICON_NAME} size={Sizes.DEFAULT_HEADER_ICON_SIZE} color={tintColor} />
        ),
    };

    render() {
        return <UnderConstruction label='Under Construction' iconName={IconName.UNDER_CONSTRUCTION_ICON_NAME}/>
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps)(Favorites);




{/* <View>
        <Text>Dummy line </Text>
        <Text>Favorites </Text>
        <Button
            onPress={() => this.props.navigation.navigate('DishDetails', { user: 'Lucy' })}
            title="Chat with Lucy"
        />
        </View> */}

        // <View style={basicStyles.fullContent}>
        //     <IonIcon name={IconName.UNDER_CONSTRUCTION_ICON_NAME} size={100} color={Colors.HEADER_BACKGROUND_COLOR} />
        //     <Text style={basicStyles.darkHeaderText}>Under Construction</Text>
            
        // </View>        