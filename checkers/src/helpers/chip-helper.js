import CheckerTypes from '../enums/checker-types';

export function setChips() {
    let chips = [];

    for (let i = 0; i <= 64; i++) {
        let rowNumber = Math.floor(i / 8);
        switch (rowNumber) {
            case 0:
                chips[i] = setChip(i, 0, CheckerTypes.BLACK);
                break;
            case 1:
                chips[i] = setChip(i, 1, CheckerTypes.BLACK);
                break;
            case 2:
                chips[i] = setChip(i, 0, CheckerTypes.BLACK);
                break;
            case 3:
            case 4:
                chips[i] = CheckerTypes.NONE;
                break;
            case 5:
                chips[i] = setChip(i, 1, CheckerTypes.RED);
                break;
            case 6:
                chips[i] = setChip(i, 0, CheckerTypes.RED);
                break;
            case 7:
                chips[i] = setChip(i, 1, CheckerTypes.RED);
                break;
            default:
                break;
        }
    }
    return chips;
}

function setChip(index, polarity, chipType) {

    if (index % 2 === polarity) {
        return chipType;
    }
    else {
        return CheckerTypes.NONE;
    }
}

export default setChips;