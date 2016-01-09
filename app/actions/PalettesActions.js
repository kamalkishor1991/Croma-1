/* @flow */

import { ADD_PALETTE, REMOVE_PALETTE } from '../constants/ActionTypes';

type Action = {
    type: string
}

export function add(palette: Object): Action {
    return {
        type: ADD_PALETTE,
        palette
    };
}

export function remove(palette: Object): Action {
    return {
        type: REMOVE_PALETTE,
        palette
    };
}
