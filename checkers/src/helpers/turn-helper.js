import CheckerTypes from "../enums/checker-types";

export function toggle(turn) {
    switch (turn) {
        case CheckerTypes.BLACK:
            return CheckerTypes.RED;
        case CheckerTypes.RED:
            return CheckerTypes.BLACK;
        default:
            return null;
    }
}