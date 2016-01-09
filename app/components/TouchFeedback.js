/* @flow */

import React from 'react-native';

const {
    TouchableNativeFeedback,
    TouchableHighlight,
    Platform
} = React;

type Props = {
    borderless: boolean;
    pressColor: string;
    children: ReactElement;
}

const TouchFeedback = (props: Props) => {
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        return (
            <TouchableNativeFeedback {...props} background={TouchableNativeFeedback.Ripple(props.pressColor, props.borderless)}>
                {props.children}
            </TouchableNativeFeedback>
        );
    } else {
        return (
            <TouchableHighlight {...props} underlayColor={props.pressColor || 'rgba(0, 0, 0, .12)'}>
                {props.children}
            </TouchableHighlight>
        );
    }
};

export default TouchFeedback;
