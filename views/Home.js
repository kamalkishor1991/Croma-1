/* @flow */

import React from 'react-native';
import PaletteCard from './PaletteCard';
import Colors from './Colors';
import store from '../store/store';
import Constants from '../Constants';

const {
    ListView,
    StyleSheet
} = React;

const styles = StyleSheet.create({
    container: {
        marginVertical: Constants.spacing / 2
    }
});

type Props = {
    navigator: Object
}

type Palette = {
    name: string
}

export default class Home extends React.Component {
    constructor(props: Props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: ds.cloneWithRows(store.getAll())
        };
    }

    _handlePress = (palette: Palette) => {
        this.props.navigator.push({
            title: palette.name,
            component: Colors,
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
