/* @flow */

import './app/navigation/NavigationRFC/polyfill';
import React from 'react-native';
import App from './app/App';

const {
    AppRegistry
} = React;

export default class Croma extends React.Component {
    render() {
        return <App />;
    }
}

AppRegistry.registerComponent('Croma', () => Croma);
