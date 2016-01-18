/* @flow */
/* eslint-disable react/no-multi-comp, react/jsx-no-bind */

import React from 'react-native';
import AppbarButton from '../components/AppbarButton';
import Colors from '../constants/Colors';
import routeMapper from './routeMapper';

const {
    StyleSheet,
    Platform,
    NavigationHeader,
    NavigationHeaderTitle,
    NavigationReducer
} = React;

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.primary
    },

    title: {
        color: Colors.white
    },

    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const _renderTitleComponent = (route, index, onNavigation) => {
    const routeDesc = routeMapper(route);
    const TitleComponent = routeDesc.titleComponent;

    if (TitleComponent) {
        return <TitleComponent {...route.props} onNavigation={onNavigation} />;
    }

    if (routeDesc.title) {
        return <NavigationHeaderTitle textStyle={styles.title}>{routeDesc.title}</NavigationHeaderTitle>;
    }

    return null;
};

const _renderLeftComponent = (route, index, onNavigation) => {
    const routeDesc = routeMapper(route);
    const LeftComponent = routeDesc.leftComponent;

    if (LeftComponent) {
        return <LeftComponent {...route.props} onNavigation={onNavigation} />;
    }

    if (index !== 0) {
        return <AppbarButton name='arrow-back' onPress={() => onNavigation(new NavigationReducer.Actions.Pop())} />;
    }
};

const _renderRightComponent = (route, index, onNavigation) => {
    const routeDesc = routeMapper(route);
    const RightComponent = routeDesc.rightComponent;

    if (RightComponent) {
        return <RightComponent {...route.props} onNavigation={onNavigation} />;
    }
};

const renderOverlay = function(navState: Object, onNavigation: Function): Function {
    return props => {
        return (
            <NavigationHeader
                {...props}
                style={styles.header}
                renderTitleComponent={(route, index) => _renderTitleComponent(route, index, onNavigation)}
                renderLeftComponent={(route, index) => _renderLeftComponent(route, index, onNavigation)}
                renderRightComponent={(route, index) => _renderRightComponent(route, index, onNavigation)}
            />
        );
    };
};

export default renderOverlay;
