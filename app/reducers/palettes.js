/* @flow */

type Color = {
    color: string,
    name: string
}

type Palette = {
    colors: Array<Color>,
    name: string
}

export default function(state: Array<Palette> = []): Array<Palette> {
    return state;
}
