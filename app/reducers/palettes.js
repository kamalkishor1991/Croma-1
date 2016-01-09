/* @flow */

import { ADD_PALETTE, EDIT_PALETTE, REMOVE_PALETTE } from '../constants/ActionTypes';

type Color = {
    color: string,
    name: string
}

type Palette = {
    colors: Array<Color>,
    name: string
}

type Action = {
    type: string,
    palette: Object
}

const edit = (state: Array<Palette>, action: Action) => {
    const newState = [];

    for (let i = 0, l = state.length; i < l; i++) {
        if (state[i].id !== action.palette.id) {
            newState.push(state[i]);
        } else {
            newState.push({
                ...state[i],
                ...action.palette
            });
        }
    }

    return newState;
};

const remove = (state: Array<Palette>, action: Action) => {
    const newState = [];

    for (let i = 0, l = state.length; i < l; i++) {
        if (state[i].id !== action.palette.id) {
            newState.push(state[i]);
        }
    }

    return newState;
};

export default function(state: Array<Palette> = [], action: Action): Array<Palette> {
    switch (action.type) {
    case ADD_PALETTE:
        return [ ...state, action.palette ];
    case EDIT_PALETTE:
        return edit(state, action);
    case REMOVE_PALETTE:
        return remove(state, action);
    default:
        return state;
    }
}
