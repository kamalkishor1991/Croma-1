/* @flow */

import React from 'react-native';
import Colors from '../constants/Colors';
import NavigationBarRouteMapper from './NavigationBarRouteMapper';

const {
    StyleSheet,
    Navigator,
    Platform,
    PixelRatio
} = React;

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: Colors.primary,
        borderBottomWidth: Platform.OS === 'ios' ? 1 / PixelRatio.get() : 0,
        borderBottomColor: 'rgba(0, 0, 0, .16)',
        elevation: 4
    }
});

export default (): ReactElement => (
    <Navigator.NavigationBar
        routeMapper={NavigationBarRouteMapper}
        style={styles.navbar}
    />
);
