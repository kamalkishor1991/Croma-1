/* @flow */

import React from 'react-native';
import Card from './Card';
import CardAction from './CardAction';
import Colors from '../constants/Colors';

const {
    StyleSheet,
    TouchableHighlight,
    View,
    Text
} = React;

const styles = StyleSheet.create({
    color: { height: 100 },
    bottom: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        flex: 1,
        marginHorizontal: 16
    }
});

type Color = {
    color: string
}

type Props = {
    color: Color
}

const ColorCard = (props: Props) => (
    <Card>
        <TouchableHighlight {...props} underlayColor={Colors.white}>
            <View style={[ styles.color, { backgroundColor: props.color.color } ]} />
        </TouchableHighlight>
        <View style={styles.bottom}>
            <Text style={styles.label}>{props.color.color.toUpperCase()}</Text>
            <CardAction name='delete' />
        </View>
    </Card>
);

export default ColorCard;
