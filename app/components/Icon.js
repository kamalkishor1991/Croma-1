/* @flow */

import React from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Icon extends React.Component {
    _root: Object;

    setNativeProps(nativeProps: any) {
        this._root.setNativeProps(nativeProps);
    }

    render() {
        return (
            <MaterialIcons
                ref={c => this._root = c}
                allowFontScaling={false}
                {...this.props}
            />
        );
    }
}
