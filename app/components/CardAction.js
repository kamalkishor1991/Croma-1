/* @flow */

import React from 'react-native';
import Icon from './Icon';
import TouchFeedback from './TouchFeedback';

const {
    StyleSheet,
    View,
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
    <TouchFeedback
        {...props}
        pressColor='rgba(0, 0, 0, .16)'
        borderless
    >
        <View>
            <Icon name={props.name} style={styles.icon} />
        </View>
    </TouchFeedback>
);

export default CardAction;
