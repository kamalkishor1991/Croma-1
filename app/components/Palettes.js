/* @flow */

import React from 'react-native';
import PaletteCard from './PaletteCard';
import ColorsList from './ColorsList';

const {
    ListView,
    StyleSheet
} = React;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 4
    }
});

type Props = {
    navigator: Object
}

type Palette = {
    name: string
}

export default class Palettes extends React.Component {
    constructor(props: Props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: ds.cloneWithRows(this.props.palettes)
        };
    }

    _handlePress = (palette: Palette) => {
        this.props.navigator.push({
            title: palette.name,
            component: ColorsList,
            rightButtonTitle: 'Add',
            passProps: { palette }
        });
    };

    _renderRow = (palette: Palette) => {
        return (
            <PaletteCard
                key={palette.name}
                palette={palette}
                onPress={() => this._handlePress(palette)}
            />
        );
    };

    render() {
        return (
            <ListView
                {...this.props}
                dataSource={this.state.dataSource}
                contentContainerStyle={styles.container}
                renderRow={this._renderRow}
            />
        );
    }
}
