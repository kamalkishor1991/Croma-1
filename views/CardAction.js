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

export default class CardAction extends React.Component {
    render() {
        return (
            <TouchableHighlight {...this.props} underlayColor={'rgba(0, 0, 0, .1)'}>
                <Icon name={this.props.name} style={styles.icon} />
            </TouchableHighlight>
        );
    }
}

CardAction.propTypes = {
    palette: React.PropTypes.object
};
