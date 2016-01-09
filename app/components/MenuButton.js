import React from 'react-native';
import Icon from './Icon';
import TouchFeedback from './TouchFeedback';
import Colors from '../constants/Colors';

const {
    StyleSheet,
    View
} = React;

const styles = StyleSheet.create({
    icon: {
        fontSize: 24,
        color: Colors.white
    },

    button: {
        height: 56,
        width: 56,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const MenuButton = () => (
    <TouchFeedback borderless pressColor='rgba(0, 0, 0, .16)'>
        <View style={styles.button}>
            <Icon style={styles.icon} name='menu' />
        </View>
    </TouchFeedback>
);

export default MenuButton;
