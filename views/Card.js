/* @flow */

import React from 'react-native';
import Constants from '../Constants';

const {
    StyleSheet,
    PixelRatio,
    View
} = React;

const styles = StyleSheet.create({
    outer: {
        marginVertical: Constants.spacing / 2,
        borderColor: 'rgba(0, 0, 0, .08)',
        borderTopWidth: 1 / PixelRatio.get(),
        borderBottomWidth: 1 / PixelRatio.get()
    },
    inner: {
        backgroundColor: Constants.colorWhite,
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

Card.propTypes = {
    children: React.PropTypes.any,
    style: View.propTypes.style
};

export default Card;
