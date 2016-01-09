import React from 'react-native';
import PaletteCard from './PaletteCard';
import Colors from './Colors';
import store from '../store/store';
import Constants from '../Constants.json';

const {
    ListView,
    StyleSheet
} = React;

const styles = StyleSheet.create({
    container: {
        marginVertical: Constants.spacing / 2
    }
});

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: ds.cloneWithRows(store.getAll())
        };
    }

    onPress(palette) {
        this.props.navigator.push({
            title: palette.name,
            component: Colors,
            rightButtonTitle: 'Add',
            passProps: { palette }
        });
    }

    render() {
        return (
            <ListView
                {...this.props}
                dataSource={this.state.dataSource}
                contentContainerStyle={styles.container}
                renderRow={palette => (
                    <PaletteCard
                        key={palette.name}
                        palette={palette}
                        onPress={() => this.onPress(palette)}
                    />
                )}
            />
        );
    }
}
