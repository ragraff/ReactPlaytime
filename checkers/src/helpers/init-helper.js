import BoardColors from '../enums/board-colors';
import { getSquareNumber } from '../helpers/square-helper';
import CheckerTypes from "../enums/checker-types";

export const setSquares = () => {
    let squares = [];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let squareNumber = getSquareNumber(i, j);
            if (i % 2 === 1 ^ j % 2 === 0) {
                squares[squareNumber] = BoardColors.BLUE;
            }
            else {
                squares[squareNumber] = BoardColors.WHITE;
            }
        }
    }
    return squares;
}

export const setCheckers = () => {
    let checkers = [];

    for (let i = 0; i <= 64; i++) {
        let rowNumber = Math.floor(i / 8);
        switch (rowNumber) {
            case 0:
                checkers[i] = setChecker(i, 0, CheckerTypes.BLACK);
                break;
            case 1:
                checkers[i] = setChecker(i, 1, CheckerTypes.BLACK);
                break;
            case 2:
                checkers[i] = setChecker(i, 0, CheckerTypes.BLACK);
                break;
            case 3:
            case 4:
                checkers[i] = CheckerTypes.NONE;
                break;
            case 5:
                checkers[i] = setChecker(i, 1, CheckerTypes.RED);
                break;
            case 6:
                checkers[i] = setChecker(i, 0, CheckerTypes.RED);
                break;
            case 7:
                checkers[i] = setChecker(i, 1, CheckerTypes.RED);
                break;
            default:
                break;
        }
    }
    return checkers;
}

const setChecker = (index, polarity, checkerType) => {

    if (index % 2 === polarity) {
        return checkerType;
    }
    else {
        return CheckerTypes.NONE;
    }
}
export const testJustKingedCanJumpSetup = () => {
    let checkers = Array(64).fill(CheckerTypes.NONE);

    checkers[9] = CheckerTypes.BLACK;
    checkers[11] = CheckerTypes.BLACK_KING;
    checkers[20] = CheckerTypes.RED;
    checkers[25] = CheckerTypes.BLACK;
    checkers[27] = CheckerTypes.BLACK;

    return checkers;
}

export const oneMoveToWin = () => {
    let checkers = Array(64).fill(CheckerTypes.NONE);

    checkers[11] = CheckerTypes.BLACK_KING;
    checkers[20] = CheckerTypes.RED;

    return checkers;
}

export const hasOneLegalMove = () => {
    let checkers = Array(64).fill(CheckerTypes.NONE);

    checkers[0] = CheckerTypes.RED_KING;
    checkers[2] = CheckerTypes.RED_KING;
    checkers[4] = CheckerTypes.RED_KING;
    checkers[9] = CheckerTypes.RED;
    checkers[11] = CheckerTypes.RED;
    checkers[13] = CheckerTypes.RED;
    checkers[20] = CheckerTypes.RED;
    checkers[22] = CheckerTypes.RED;
    checkers[57] = CheckerTypes.RED;
    checkers[59] = CheckerTypes.RED;
    checkers[61] = CheckerTypes.RED;
    checkers[63] = CheckerTypes.RED;

    checkers[6] = CheckerTypes.BLACK;
    checkers[41] = CheckerTypes.BLACK;
    checkers[43] = CheckerTypes.BLACK;
    checkers[45] = CheckerTypes.BLACK;
    checkers[47] = CheckerTypes.BLACK;
    checkers[48] = CheckerTypes.BLACK;
    checkers[50] = CheckerTypes.BLACK;
    checkers[52] = CheckerTypes.BLACK;
    checkers[54] = CheckerTypes.BLACK;

    return checkers;
}