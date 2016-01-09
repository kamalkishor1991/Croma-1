import React from 'react-native';
import ColorCard from './ColorCard';
import Details from './Full';
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

export default class Colors extends React.Component {
    constructor(props) {
        super(props);

        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: ds.cloneWithRows(this.props.palette.colors)
        };
    }

    onPress(color) {
        this.props.navigator.push({
            title: color.color,
            component: Details,
            passProps: { color }
        });
    }

    renderRow(color) {
        return (
            <ColorCard
                color={color}
                key={color.name}
                onPress={() => this.onPress(color)}
            />
        );
    }

    render() {
        return (
            <ListView
                {...this.props}
                dataSource={this.state.dataSource}
                contentContainerStyle={styles.container}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}

Colors.propTypes = {
    palette: React.PropTypes.object
};
