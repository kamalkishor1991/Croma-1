import React from 'react-native';
import Constants from '../Constants.json';

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

export default class Card extends React.Component {
    render() {
        return (
            <View style={styles.outer}>
                <View {...this.props} style={[ styles.inner, this.props.style ]}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}

Card.propTypes = {
    children: React.PropTypes.any
};
