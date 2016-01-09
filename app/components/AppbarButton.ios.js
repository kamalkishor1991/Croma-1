import React from 'react-native';
import Icon from './Icon';
import Colors from '../constants/Colors';

const {
    StyleSheet,
    TouchableOpacity,
    View
} = React;

const styles = StyleSheet.create({
    icon: {
        fontSize: 24,
        color: Colors.white
    },

    button: {
        height: 44,
        width: 44,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

type Props = {
    name: string
}

const MenuButton = (props: Props) => (
    <TouchableOpacity {...props}>
        <View style={styles.button}>
            <Icon style={styles.icon} name={props.name} />
        </View>
    </TouchableOpacity>
);

export default MenuButton;
