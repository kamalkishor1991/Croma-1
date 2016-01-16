/* @flow */

import React from 'react-native';
import routeMapper from './routeMapper';
import Colors from '../constants/Colors';
import { Provider } from 'react-redux';

const {
    NavigationCard,
    Platform,
    StyleSheet,
    View
} = React;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.lightGrey,
        marginTop: Platform.OS === 'ios' ? 64 : 56
    }
});

const renderScene = function(navState: Object, onNavigation: Function, store: Object): Function {
    return props => {
        const route = props.sceneRecord.get('route'); // eslint-disable-line react/prop-types

        const {
            component: RouteComponent,
            passProps
        } = routeMapper(route);

        return (
            <NavigationCard {...props}>
                <Provider store={store}>
                    <RouteComponent
                        {...passProps}
                        style={styles.container}
                        onNavigation={onNavigation}
                    />
                </Provider>
            </NavigationCard>
        );
    };
};

export default renderScene;
