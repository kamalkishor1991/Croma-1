/* @flow */

import React from 'react-native';
import Color from 'pigment/full';
import Colors from '../constants/Colors';

const {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Clipboard,
    ToastAndroid,
    Alert,
    Platform
} = React;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer: {
        borderRadius: 30
    },
    header: {
        fontSize: 36,
        textAlign: 'center',
        marginVertical: 8,
        marginHorizontal: 24
    },
    infoContainer: {
        borderRadius: 18
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 16
    },
    key: {
        fontSize: 14,
        opacity: 0.5
    },
    value: {
        fontSize: 16
    },
    hint: {
        fontSize: 12,
        marginTop: 24,
        opacity: 0.5
    }
});

const _getItems = (c) => {
    return [
        { key: 'RGB', value: c.torgb() },
        { key: 'HSL', value: c.tohsl() },
        { key: 'HSV', value: c.tohsv() },
        { key: 'HWB', value: c.tohwb() },
        { key: 'CMYK', value: c.tocmyk() },
        { key: 'LAB', value: `lab(${c.lab[0].toFixed(2)}, ${c.lab[1].toFixed(2)}, ${c.lab[2].toFixed(2)})` },
        { key: 'Luminance', value: (c.luminance() * 100).toFixed(2) + '%' },
        { key: 'Darkness', value: (c.darkness() * 100).toFixed(2) + '%' }
    ];
};

const _copyToClipboard = (text) => {
    Clipboard.setString(text);

    const successText = `Copied to Clipboard: ${text}`;

    if (Platform.OS === 'android') {
        ToastAndroid.show(successText, ToastAndroid.SHORT);
    } else {
        Alert.alert(successText);
    }
};


type ColorType = {
    color: string,
    name: string
}

type Props = {
    color: ColorType
}

const ColorSheet = (props: Props) => {
    const c = new Color(props.color.color);
    const hex = c.tohex();
    const color = c.darkness() > 0.4 ? Colors.white : Colors.black;

    return (
        <View style={[ styles.container, { backgroundColor: hex } ]}>
            <TouchableHighlight
                style={styles.headerContainer}
                underlayColor='rgba(0, 0, 0, .16)'
                onPress={() => _copyToClipboard(hex)}
            >
                <Text style={[ styles.header, { color } ]}>
                    {hex.toUpperCase()}
                </Text>
            </TouchableHighlight>

            {_getItems(c).map(item =>
                <TouchableHighlight
                    key={item.value}
                    style={styles.infoContainer}
                    underlayColor='rgba(0, 0, 0, .16)'
                    onPress={() => _copyToClipboard(item.value)}
                >
                    <View style={styles.info}>
                        <Text style={[ styles.key, { color } ]}>{item.key} </Text>
                        <Text style={[ styles.value, { color } ]}>{item.value}</Text>
                    </View>
                </TouchableHighlight>
            )}

            <Text style={[ styles.hint, { color } ]}>
                Tap an item to copy
            </Text>
        </View>
    );
};

export default ColorSheet;
