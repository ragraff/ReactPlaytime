import CheckerType from "../enums/checker-types";
import BoardColors from "../enums/board-colors";

function getSquareNumber(row, column) {
    return (row * 8) + column;
}

function isDiagonalSquare(fromSquare, toSquare) {
    const squareDiff = fromSquare - toSquare;
    return Math.abs(squareDiff) === 7 || Math.abs(squareDiff) === 9;
}

function isDiagonalJumpSquare(fromSquare, toSquare) {
    const squareDiff = fromSquare - toSquare;
    return Math.abs(squareDiff) === 14 || Math.abs(squareDiff) === 18;
}

function isForward(chipColor, fromSquare, toSquare) {
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

function isIntermediateSquareOccupiedByOpponent(checkers, chipColor, fromSquare, toSquare) {
    const intermediateSquare = getIntermediateSquare(fromSquare, toSquare);
    return checkers[intermediateSquare] !== chipColor &&
        checkers[intermediateSquare] !== CheckerType.NONE;
}

function isNewSquareOccupied(checkers, toSquare) {
    return checkers[toSquare] !== CheckerType.NONE;
}

function getIntermediateSquare(fromSquare, toSquare) {
    return (fromSquare + toSquare) / 2;
}

function completedJump(startSquare, endSquare) {
    const diff = Math.abs(startSquare - endSquare);
    return diff === 14 || diff === 18;
}

function canCheckerJump(squares, checkers, square) {
    const checkerType = checkers[square];

    switch (checkerType) {
        case CheckerType.BLACK:
            return checkBlack(squares, checkers, square);
        case CheckerType.RED:
            return checkRed(squares, checkers, square);
        default:
            return false;
    }
}

function checkBlack(squares, checkers, square) {
    const sw1 = checkers[square + 7];
    const sw2 = checkers[square + 14];
    const swBoard1 = squares[square + 7];
    const swBoard2 = squares[square + 14];
    if ((sw1 === CheckerType.RED ||
        sw1 === CheckerType.RED_KING) &&
        swBoard1 === BoardColors.BLUE &&
        sw2 === CheckerType.NONE &&
        swBoard2 === BoardColors.BLUE) {
        return true;
    }

    const se1 = checkers[square + 9];
    const se2 = checkers[square + 18];
    const seBoard1 = squares[square + 9];
    const seBoard2 = squares[square + 18];
    if ((se1 === CheckerType.RED ||
        se1 === CheckerType.RED_KING) &&
        seBoard1 === BoardColors.BLUE &&
        se2 === CheckerType.NONE &&
        seBoard2 === BoardColors.BLUE) {
        return true;
    }

    return false;
}

function checkRed(squares, checkers, square) {
    const nw1 = checkers[square - 9];
    const nw2 = checkers[square - 18];
    const nwBoard1 = squares[square - 9];
    const nwBoard2 = squares[square - 18];
    if ((nw1 === CheckerType.BLACK ||
        nw1 === CheckerType.BLACK_KING) &&
        nwBoard1 === BoardColors.BLUE &&
        nw2 === CheckerType.NONE &&
        nwBoard2 === BoardColors.BLUE) {
        return true;
    }

    const ne1 = checkers[square - 7];
    const ne2 = checkers[square - 14];
    const neBoard1 = squares[square - 7];
    const neBoard2 = squares[square - 14];
    if ((ne1 === CheckerType.BLACK ||
        ne1 === CheckerType.BLACK_KING) &&
        neBoard1 === BoardColors.BLUE &&
        ne2 === CheckerType.NONE &&
        neBoard2 === BoardColors.BLUE) {
        return true;
    }

    return false;
}

function shouldKing(checkers, endSquare, isKinged) {
    switch (checkers[endSquare]) {
        case CheckerType.BLACK:
            return endSquare >= 56 && !isKinged;
        case CheckerType.RED:
            return endSquare <= 7 && !isKinged;
        default:
            return false;
    }
}

export {
    getSquareNumber,
    isDiagonalSquare,
    isDiagonalJumpSquare,
    isForward,
    isIntermediateSquareOccupiedByOpponent,
    isNewSquareOccupied,
    getIntermediateSquare,
    completedJump,
    canCheckerJump,
    shouldKing
}