/* @flow */

import React from 'react-native';
import Colors from '../constants/Colors';

const {
    StyleSheet,
    PixelRatio,
    View
} = React;

const styles = StyleSheet.create({
    outer: {
        marginVertical: 4,
        borderColor: 'rgba(0, 0, 0, .08)',
        borderTopWidth: 1 / PixelRatio.get(),
        borderBottomWidth: 1 / PixelRatio.get()
    },
    inner: {
        backgroundColor: Colors.white,
        overflow: 'hidden'
    }
});

type Props = {
    children: ReactElement,
    style?: any
}

const Card = (props: Props) => (
    <View style={styles.outer}>
        <View {...props} style={[ styles.inner, props.style ]}>
            {props.children}
        </View>
    </View>
);

export default Card;
