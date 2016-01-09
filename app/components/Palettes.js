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

type Palette = {
    name: string;
}

type Props = {
    navigator: Object;
    palettes: Array<Palette>;
    add: Function;
    edit: Function;
    remove: Function;
}

export default class Palettes extends React.Component {
    constructor(props: Props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: ds.cloneWithRows(this.props.palettes)
        };
    }

    componentWillReceiveProps(nextProps: Props) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.palettes)
        });
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
                remove={() => this.props.remove(palette)}
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
