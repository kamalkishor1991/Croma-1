/* @flow */

import React from 'react-native';
import Colors from '../constants/Colors';
import NavigationBarRouteMapper from './NavigationBarRouteMapper';

const {
    StyleSheet,
    Navigator
} = React;

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: Colors.primary,
        elevation: 4
    }
});

export default (): ReactElement => (
    <Navigator.NavigationBar
        routeMapper={NavigationBarRouteMapper}
        style={styles.navbar}
    />
);
