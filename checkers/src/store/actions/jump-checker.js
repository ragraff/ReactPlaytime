export const JUMP_CHECKER = 'JUMP_CHECKER';

export function jumpChecker(fromSquare, toSquare) {
    return {
        type: JUMP_CHECKER,
        fromSquare,
        toSquare
    }
}

export default jumpChecker;