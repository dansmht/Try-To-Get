import { CHANGE_THEME, CHANGE_COLOR } from '../actions/themeActions'

const colorsArr = [
    ['#FAE3E3', '#FA85A0', '#CFA5B4', '#C98BB9', '#846B8A'],
    ['#343330', '#45462A', '#7E5920', '#DC851F', '#FFA737'],
    ['#1C7C54', '#CACFD6', '#1B512D', '#7EE081', '#D6E5E3'],
    ['#5A438D', '#EDCB96', '#F7C4A5', '#D3AB9E', '#EAC9C1'],
    ['#0D0221', '#0F084B', '#26408B', '#A6CFD5', '#C2E7D9'],
    ['#072AC8', '#1E96FC', '#A2D6F9', '#FCF300', '#FFC600'],
]

const getRndThemeColors = () => Math.floor(Math.random() * colorsArr.length)

const initialIndex = getRndThemeColors()

const initialState = {
    bgColors: colorsArr[initialIndex],
    color: colorsArr[initialIndex][0],
}

export const themeReducer = (state = initialState, {type, color}) => {
    switch (type) {
        case CHANGE_THEME: {
            const bgColors = colorsArr[getRndThemeColors()]
            const color = bgColors[0]

            return {
                ...state,
                bgColors,
                color,
            }
        }
        case CHANGE_COLOR:
            return {
                ...state,
                color: color,
            }
        default:
            return state
    }
}
