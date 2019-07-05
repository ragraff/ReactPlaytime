export const MOVE_CHECKER = 'MOVE_CHECKER';

export const moveChecker = (fromSquare, toSquare) => {
    return { type: MOVE_CHECKER, fromSquare, toSquare };
}