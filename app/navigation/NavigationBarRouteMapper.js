/* @flow */
/* eslint-disable react/no-multi-comp */

import React from 'react-native';
import Colors from '../constants/Colors';
import AppbarButton from '../components/AppbarButton';

const {
    StyleSheet,
    View,
    Text
} = React;

const styles = StyleSheet.create({
    title: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    titleText: {
        lineHeight: 27,
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.white
    },

    button: {
        height: 56,
        width: 56,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const NavigationBarRouteMapper = {
    LeftButton(route: Object, navigator: Object) {
        const goBack = () => {
            if (navigator.getCurrentRoutes().length > 1) {
                navigator.pop();
            }
        };

        if (route.leftComponent) {
            return <route.leftComponent {...route.passProps} navigator={navigator} />;
        }

        if (route.index !== 0) {
            return <AppbarButton onPress={goBack} name='arrow-back' />;
        }
    },

    RightButton(route: Object, navigator: Object) {
        if (route.rightComponent) {
            return <route.rightComponent {...route.passProps} navigator={navigator} />;
        }

        return <View style={styles.button} />;
    },

    Title(route: Object, navigator: Object) {
        if (route.titleComponent) {
            return <route.titleComponent {...route.passProps} navigator={navigator} />;
        }

        return (
            <View style={styles.title}>
                <Text style={styles.titleText}>{route.title}</Text>
            </View>
        );
    }
};

export default NavigationBarRouteMapper;
