export const MOVE_CHECKER = 'MOVE_CHECKER';

export function moveChecker(fromSquare, toSquare) {
    return {
        type: MOVE_CHECKER,
        fromSquare,
        toSquare
    }
}

export default moveChecker;