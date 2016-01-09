/* @flow */

import { connect } from 'react-redux';
import Palettes from '../components/Palettes';
import { add, edit, remove } from '../actions/PalettesActions';

function mapStateToProps(state) {
    return {
        palettes: state.palettes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        add: palette => dispatch(add(palette)),
        edit: palette => dispatch(edit(palette)),
        remove: palette => dispatch(remove(palette))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Palettes);
