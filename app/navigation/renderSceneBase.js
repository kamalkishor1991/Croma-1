/* @flow */

import React from 'react-native';

const {
    StyleSheet
} = React;

const styles = StyleSheet.create({
    scene: {
        flex: 1
    }
});

export default (route: Object, navigator: Object) => {
    return (
        <route.component
            {...route.passProps}
            navigator={navigator}
            style={styles.scene}
        />
    );
};
