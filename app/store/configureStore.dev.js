/* @flow */
/* global module, require */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import rootReducer from '../reducers';

const middlewares = [ applyMiddleware(thunk) ];

if (typeof global.self === 'undefined') {
    middlewares.push(devTools());
}

const finalCreateStore = compose(
    ...middlewares
)(createStore);

export default function configureStore(initialState: ?any): Object {
    const store = finalCreateStore(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers').default)
        );
    }

    return store;
}
