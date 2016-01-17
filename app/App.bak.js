import React from 'react-native';
import configureStore from './store/configureStore';
import PersistentNavigator from './navigation/PersistentNavigator';
import palettes from './data.json';

const {
    NavigationState
} = React;

const store = configureStore({
    palettes
});

const PERSISTANCE_KEY = 'FLAT_PERSISTENCE_0';

const App = () => (
    <PersistentNavigator
        initialState={new NavigationState([ { name: 'palettes' } ], 0)}
        persistenceKey={PERSISTANCE_KEY}
        store={store}
    />
);

export default App;
