import React from 'react-native';
import MenuButton from './components/MenuButton';
import configureStore from './store/configureStore';
import RootContainer from './containers/RootContainer';
import renderScene from './navigation/renderScene';
import renderNavigationBar from './navigation/renderNavigationBar';
import Colors from './constants/Colors';
import palettes from './data.json';

const {
    Navigator,
    StyleSheet
} = React;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scene: {
        marginTop: 56, // offset for appbar height
        backgroundColor: Colors.lightGrey
    }
});

const store = configureStore({
    palettes
});

const App = () => (
    <Navigator
        initialRoute={{
            title: 'Palettes',
            leftComponent: MenuButton,
            component: RootContainer,
            passProps: {
                store
            },
            index: 0,
        }}
        renderScene={renderScene}
        navigationBar={renderNavigationBar()}
        configureScene={() => Navigator.SceneConfigs.FloatFromBottomAndroid}
        sceneStyle={styles.scene}
        style={styles.container}
    />
);

export default App;
