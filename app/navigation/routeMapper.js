import PalettesContainer from '../containers/PalettesContainer';
import ColorsList from '../components/ColorsList';
import ColorSheet from '../components/ColorSheet';

export default function(route) {
    switch (route.name) {
    case 'palettes':
        return {
            component: PalettesContainer,
            title: 'Palettes'
        };
    case 'colors':
        return {
            component: ColorsList,
            title: route.props.palette.name,
            passProps: route.props
        };
    case 'details':
        return {
            component: ColorSheet,
            title: route.props.color.color.toUpperCase(),
            passProps: route.props
        };
    }
}
