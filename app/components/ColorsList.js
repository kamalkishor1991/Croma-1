/* @flow */

import React from 'react-native';
import ColorCard from './ColorCard';
import Details from './Full';

const {
    ListView,
    StyleSheet
} = React;

const styles = StyleSheet.create({
    container: {
        marginVertical: 4
    }
});

type Color = {
    color: string,
    name: string
}

type Palette = {
    colors: Array<Color>
}

type Props = {
    palette: Palette
}

export default class ColorsList extends React.Component {
    constructor(props: Props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: ds.cloneWithRows(this.props.palette.colors)
        };
    }

    _handlePress = (color: Color) => {
        this.props.navigator.push({
            title: color.color,
            component: Details,
            passProps: { color }
        });
    };

    _renderRow = (color: Color) => {
        return (
            <ColorCard
                color={color}
                key={color.name}
                onPress={() => this._handlePress(color)}
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
