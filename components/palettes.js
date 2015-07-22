let Constants = require("../constants.json"),
    React = require("react-native"),
    PaletteCard = require("./palette-card.js"),
    Colors = require("./colors.js"),
    store = require("../store/store.js");

let { StyleSheet, ListView } = React;

let styles = StyleSheet.create({
    page: {
        backgroundColor: Constants.colorLightGray,
        padding: Constants.spacing / 2
    }
});

let Home = React.createClass({
    onPress(palette) {
        this.props.navigator.push({
            title: palette.name,
            component: Colors,
            rightButtonTitle: "Add",
            passProps: { palette }
        });
    },

    getInitialState() {
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        return {
            dataSource: ds.cloneWithRows(store.getAll())
        };
    },

    render() {
        return (
            <ListView
                style={styles.page}
                dataSource={this.state.dataSource}
                renderRow={palette => <PaletteCard palette={palette} key={palette.name} onPress={() => this.onPress(palette)} />}
            />
        );
    }
});

module.exports = Home;