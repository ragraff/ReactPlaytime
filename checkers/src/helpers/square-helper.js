import CheckerType from "../enums/checker-types";
import CheckerDirections from '../enums/checker-directions';
import BoardColors from '../enums/board-colors';
import { kingChecker } from "./checker-helper";


export const isNewSquareOccupied = (checkers, toSquare) => {
    return checkers[toSquare] !== CheckerType.NONE;
}

export const isIntermediateSquareOccupiedByOpponent = (checkers, chipColor, fromSquare, toSquare) => {
    const intermediateSquare = getIntermediateSquare(fromSquare, toSquare);
    return checkers[intermediateSquare] !== chipColor && checkers[intermediateSquare] !== CheckerType.NONE;
}

export const canCheckerJump = (checkers, squares, square, justKinged) => {
    const checkerType = justKinged ?
        kingChecker(checkers[square]) :
        checkers[square];

    switch (checkerType) {
        case CheckerType.BLACK:
            return canBlackJump(squares, checkers, square);
        case CheckerType.RED:
            return canRedJump(squares, checkers, square);
        case CheckerType.BLACK_KING:
            return canBlackKingJump(squares, checkers, square);
        case CheckerType.RED_KING:
            return canRedKingJump(squares, checkers, square);
        default:
            return false;
    }
}

const canBlackJump = (squares, checkers, square) =>
    canJumpTheDirection(squares, checkers, square, 7, CheckerType.RED, CheckerType.RED_KING) ||
    canJumpTheDirection(squares, checkers, square, 9, CheckerType.RED, CheckerType.RED_KING);

const canRedJump = (squares, checkers, square) =>
    canJumpTheDirection(squares, checkers, square, -7, CheckerType.BLACK, CheckerType.BLACK_KING) ||
    canJumpTheDirection(squares, checkers, square, -9, CheckerType.BLACK, CheckerType.BLACK_KING);



const canBlackKingJump = (squares, checkers, square) =>
    canJumpTheDirection(squares, checkers, square, CheckerDirections.Southwest, CheckerType.RED, CheckerType.RED_KING) ||
    canJumpTheDirection(squares, checkers, square, CheckerDirections.Southeast, CheckerType.RED, CheckerType.RED_KING) ||
    canJumpTheDirection(squares, checkers, square, CheckerDirections.Northeast, CheckerType.RED, CheckerType.RED_KING) ||
    canJumpTheDirection(squares, checkers, square, CheckerDirections.Northwest, CheckerType.RED, CheckerType.RED_KING);


const canRedKingJump = (squares, checkers, square) =>
    canJumpTheDirection(squares, checkers, square, CheckerDirections.Southwest, CheckerType.BLACK, CheckerType.BLACK_KING) ||
    canJumpTheDirection(squares, checkers, square, CheckerDirections.Southeast, CheckerType.BLACK, CheckerType.BLACK_KING) ||
    canJumpTheDirection(squares, checkers, square, CheckerDirections.Northeast, CheckerType.BLACK, CheckerType.BLACK_KING) ||
    canJumpTheDirection(squares, checkers, square, CheckerDirections.Northwest, CheckerType.BLACK, CheckerType.BLACK_KING);


const canJumpTheDirection = (squares, checkers, square, factor, opponent, opponentKing) => {
    const square1 = checkers[square + factor];
    const square2 = checkers[square + factor * 2];
    const boardSquare1 = squares[square + factor];
    const boardSquare2 = squares[square + factor * 2];
    return ((square1 === opponent) ||
        (square1 === opponentKing)) &&
        boardSquare1 === BoardColors.BLUE &&
        square2 === CheckerType.NONE &&
        boardSquare2 === BoardColors.BLUE;
}

export const getSquareNumber = (row, column) => (row * 8) + column;

export const isDiagonalSquare = (fromSquare, toSquare) => {
    const diff = Math.abs(fromSquare - toSquare);
    return diff === 7 || diff === 9;
}

export const isDiagonalJumpSquare = (fromSquare, toSquare) => {
    const diff = Math.abs(fromSquare - toSquare);
    return diff === 14 || diff === 18;
}

export const isForward = (chipColor, fromSquare, toSquare) => {
    if (toSquare < 0 || toSquare > 63) {
        return false;
    }

    const squareDiff = fromSquare - toSquare;
    switch (chipColor) {
        case CheckerType.RED:
            return squareDiff > 0;
        case CheckerType.BLACK:
            return squareDiff < 0;
        case CheckerType.RED_KING:
            return true;
        case CheckerType.BLACK_KING:
            return true;
        default:
            return false;
    }
}

export const completedJump = (startSquare, endSquare) => {
    const diff = Math.abs(startSquare - endSquare);
    return diff === 14 || diff === 18;
}

export const getIntermediateSquare = (fromSquare, toSquare) => (fromSquare + toSquare) / 2;


export const shouldKing = (checkers, endSquare, isKinged) => {
    switch (checkers[endSquare]) {
        case CheckerType.BLACK:
            return endSquare >= 56 && !isKinged;
        case CheckerType.RED:
            return endSquare <= 7 && !isKinged;
        default:
            return false;
    }
}