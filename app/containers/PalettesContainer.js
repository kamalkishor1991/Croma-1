/* @flow */

import React from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Palettes from '../components/Palettes';
import * as PalettesActions from '../actions/PalettesActions';

type Props = {
    palettes: Object;
    dispatch: Function;
}

const PalettesContainer = (props: Props) => {
    const { palettes, dispatch } = props;

    return <Palettes palettes={palettes} {...bindActionCreators(PalettesActions, dispatch)} />;
};

function select(state) {
    return {
        palettes: state.palettes
    };
}

export default connect(select)(PalettesContainer);
