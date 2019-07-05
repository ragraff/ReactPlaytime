import CheckerTypes from "../enums/checker-types";
import { isNewSquareOccupied, isForward } from "./square-helper";
import CheckerDirections from "../enums/checker-directions";


export const kingChecker = (checkerType) => {
    switch (checkerType) {
        case CheckerTypes.BLACK:
            return CheckerTypes.BLACK_KING;
        case CheckerTypes.RED:
            return CheckerTypes.RED_KING;
        default:
            return null;
    }
}

export const hasLegalMove = (checkers, square) =>
    isLegalMove(checkers, square, square + CheckerDirections.Northwest) ||
    isLegalMove(checkers, square, square + CheckerDirections.Northeast) ||
    isLegalMove(checkers, square, square + CheckerDirections.Southwest) ||
    isLegalMove(checkers, square, square + CheckerDirections.Southeast);


const isLegalMove = (checkers, fromSquare, toSquare) => !isNewSquareOccupied(checkers, toSquare) && isForward(checkers[fromSquare], fromSquare, toSquare);
