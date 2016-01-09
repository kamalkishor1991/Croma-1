/* @flow */

import React from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ICON_MAP = {
    'arrow-back': 'ios-arrow-left',
    menu: 'navicon',
    create: 'android-create',
    delete: 'trash-a',
    share: 'android-share'
};

export default class Icon extends React.Component {
    _root: Object;

    setNativeProps(nativeProps: any) {
        this._root.setNativeProps(nativeProps);
    }

    render() {
        return (
            <Ionicons
                ref={c => this._root = c}
                allowFontScaling={false}
                {...this.props}
                name={ICON_MAP[this.props.name]}
            />
        );
    }
}
