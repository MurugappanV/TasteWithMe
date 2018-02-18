import React, { PureComponent } from "react";
import {TouchableOpacity} from "react-native";

const CustomTouchable = (props) => {
    return <TouchableOpacity style={props.style} onPress={props.onPress}>
        {props.children}
    </TouchableOpacity>
}

export default CustomTouchable;
