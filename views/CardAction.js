/* @flow */

import React from 'react-native';
import Icon from './Icon';

const {
    StyleSheet,
    TouchableHighlight
} = React;

const styles = StyleSheet.create({
    icon: {
        flex: 0,
        fontSize: 24,
        margin: 16,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5,
        color: '#000'
    }
});

type Props = {
    name: string
}

const CardAction = (props: Props) => (
    <TouchableHighlight {...props} underlayColor={'rgba(0, 0, 0, .1)'}>
        <Icon name={props.name} style={styles.icon} />
    </TouchableHighlight>
);

export default CardAction;
