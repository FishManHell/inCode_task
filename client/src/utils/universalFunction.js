import {arrowDown, arrowUp} from "./FontAwesome/Solid";

export const changeColor = (first, second) => {
    if (first > second) {
        return '#50C878'
    } else if (first < second) {
        return '#EB4C42'
    } else {
        return '#F0EAD6'
    }
}

export const changeArrow = (first, second) => {
    if (first > second) {
        return arrowUp
    } else if (first < second) {
        return arrowDown
    } else {
        return ''
    }
}