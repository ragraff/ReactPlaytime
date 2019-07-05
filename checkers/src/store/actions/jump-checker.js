export const JUMP_CHECKER = 'JUMP_CHECKER';

export const jumpChecker = (fromSquare, toSquare) => {
    return { type: JUMP_CHECKER, fromSquare, toSquare };
}