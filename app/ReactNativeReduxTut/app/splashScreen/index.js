import React, {PureComponent} from "react";
import SplashScreen from "./conatiners/SplashScreen";
import * as initialReducer from './reducers/initialDataReducer';

export default class SplashScreenIndex extends PureComponent {
    render() {
        return <SplashScreen NextPage={this.props.NextPageReactElement} />
    }
}

export const initialDataReducer = Object.assign({},
    initialReducer,
);