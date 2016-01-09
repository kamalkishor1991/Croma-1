import React from 'react-native';
import configureStore from './store/configureStore';
import RootContainer from './containers/RootContainer';
import Icon from './components/Icon';
import Colors from './constants/Colors';
import data from './data.json';

const {
    Navigator,
    Text,
    TouchableOpacity,
    StyleSheet
} = React;

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: Colors.primary
    },
    title: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 14,
        paddingHorizontal: 4
    },
    icon: {
        fontSize: 24,
        margin: 16,
        color: Colors.white
    },
    scene: {
        flex: 1,
        marginTop: 56,
        backgroundColor: Colors.lightGray
    }
});

const NavigationBarRouteMapper = {
    LeftButton(route, navigator) {
        if (route.index === 0) {
            return null;
        }

        return (
            <TouchableOpacity onPress={() => navigator.pop()}>
                <Icon name='arrow-back' style={styles.icon} />
            </TouchableOpacity>
        );
    },

    RightButton(route) {
        if (route.rightButtonIcon) {
            return (
                <TouchableOpacity onPress={route.onRightButtonPress}>
                    <route.rightButtonIcon style={styles.icon} />
                </TouchableOpacity>
            );
        }
    },

    Title(route) {
        return (
            <Text style={styles.title}>
                {route.title}
            </Text>
        );
    }
};

const palettes = [];

for (const palette in data) {
    const colors = [];
    const p = data[palette];

    if (p && p.colors) {
        const c = p.colors;

        for (const color in c) {
            colors.push({ color, time: c && c[color] ? c.created : Date.now() });
        }

        palettes.push({ name: palette, time: p ? p.created : Date.now(), colors });
    }
}

const store = configureStore({
    palettes
});

const App = () => (
    <Navigator
        style={styles.nav}
        initialRoute={{
            title: 'Palettes',
            component: RootContainer,
            passProps: {
                store
            },
            index: 0,
        }}
        renderScene={(route, navigator) =>
            <route.component
                {...route.passProps}
                navigator={navigator}
                style={styles.scene}
            />
        }
        navigationBar={
            <Navigator.NavigationBar
                routeMapper={NavigationBarRouteMapper}
                style={styles.navbar}
            />
        }
    />
);

export default App;
