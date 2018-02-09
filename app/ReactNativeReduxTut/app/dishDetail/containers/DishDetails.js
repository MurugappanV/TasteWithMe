import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import * as IconName from '../../Constants/IconName';
import UnderConstruction from '../../components/UnderConstruction';

class DishDetails extends PureComponent {

    render() {
        return <UnderConstruction label='Under Construction' iconName={IconName.UNDER_CONSTRUCTION_ICON_NAME}/>     
    }
}


function mapStateToProps(state) {
    return {
        
    }
}


export default connect(mapStateToProps)(DishDetails);


//console.log(`+++++++++++++++++++++++++++++++++++++++-${props}`)
//console.log(props)