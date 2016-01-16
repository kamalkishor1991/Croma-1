import React from 'react-native';
import renderOverlay from './renderOverlay';
import renderScene from './renderScene';

const {
    NavigationAnimatedView,
    StyleSheet,
} = React;

const styles = StyleSheet.create({
    animatedView: {
        flex: 1,
    },
});

const renderNavigator = ({ store }) => {
    return (navState, onNavigation) => {
        if (!navState) {
            return null;
        }

        return (
            <NavigationAnimatedView
                navigationState={navState}
                style={styles.animatedView}
                renderOverlay={renderOverlay(navState, onNavigation, store)}
                renderScene={renderScene(navState, onNavigation, store)}
            />
        );
    };
};

export default renderNavigator;
