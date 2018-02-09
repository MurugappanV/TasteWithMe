import React, {PureComponent} from "react";
import SplashScreen from "./conatiners/SplashScreen";

export default class SplashScreenIndex extends PureComponent {
    render() {
        return <SplashScreen NextPage={this.props.NextPageReactElement} />
    }
}