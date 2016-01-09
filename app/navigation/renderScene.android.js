/* @flow */

import { BackAndroid } from 'react-native';
import renderSceneBase from './renderSceneBase';

let _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_navigator && _navigator.getCurrentRoutes().length > 1) {
        _navigator.pop();

        return true;
    }

    return false;
});

export default (route, navigator, ...rest) => {
    _navigator = navigator;

    return renderSceneBase(route, navigator, ...rest);
};
