import CheckerTypes from "../enums/checker-types";

export function kingChecker(checkerType) {
    switch (checkerType) {
        case CheckerTypes.BLACK:
            return CheckerTypes.BLACK_KING;
        case CheckerTypes.RED:
            return CheckerTypes.RED_KING;
        default:
            return null;
    }
}

export default kingChecker;