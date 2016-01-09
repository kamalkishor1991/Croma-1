/* @flow */

import React from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Palettes from '../components/Palettes';
import * as PalettesActions from '../actions/PalettesActions';

type Props = {
    navigator: Object;
    palettes: Object;
    dispatch: Function;
}

const PalettesContainer = (props: Props) => {
    const {
        navigator,
        palettes,
        dispatch
    } = props;

    return (
        <Palettes
            navigator={navigator}
            palettes={palettes}
            {...bindActionCreators(PalettesActions, dispatch)}
        />
    );
};

function select(state) {
    return {
        palettes: state.palettes
    };
}

export default connect(select)(PalettesContainer);
