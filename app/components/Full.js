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
    ToastAndroid
} = React;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 36,
        textAlign: 'center',
        margin: 8,
        opacity: 0.7
    },
    infoContainer: {
        borderRadius: 2
    },
    info: {
        flexDirection: 'row',
        borderRadius: 2,
        margin: 8
    },
    key: {
        fontSize: 16,
        opacity: 0.5
    },
    value: {
        fontSize: 16
    },
    hint: {
        fontSize: 12,
        marginTop: 16
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

    ToastAndroid.show(`Copied to Clipboard: ${text}`, ToastAndroid.SHORT);
};


type ColorType = {
    color: string,
    name: string
}

type Props = {
    color: ColorType
}

const Full = (props: Props) => {
    const c = new Color(props.color.color);
    const hex = c.tohex();
    const color = c.darkness() > 0.4 ? Colors.white : Colors.black;

    return (
        <View style={[ styles.container, { backgroundColor: hex } ]}>
            <Text style={[ styles.header, { color } ]}>{hex.toUpperCase()}</Text>

            {_getItems(c).map(item =>
                <TouchableHighlight
                    key={item.value}
                    style={styles.infoContainer}
                    underlayColor={'rgba(0, 0, 0, .1)'}
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

export default Full;
