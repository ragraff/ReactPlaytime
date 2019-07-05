import CheckerTypes from '../enums/checker-types';
import { hasLegalMove, kingChecker } from '../helpers/checker-helper';

export const isWinningCondition = (checkers, movesWithNoJump) => {
    const someBlacks = checkers.some(x => getColor(x, CheckerTypes.BLACK));
    const someReds = checkers.some(x => getColor(x, CheckerTypes.RED));

    //if no more opponent checkers remain
    if (!someBlacks || !someReds) {
        return true;
    }

    //if all opponent checkers are out of moves and there are fewer checkers left
    let _isDrawCondition = isDrawCondition(checkers, movesWithNoJump);

    if (_isDrawCondition && getRed(checkers).length !== getBlack(checkers).length) {
        return true;
    }
}

const getRed = (checkers) => checkers.filter(checker => getColor(checker, CheckerTypes.RED));
const getBlack = (checkers) => checkers.filter(checker => getColor(checker, CheckerTypes.BLACK));


export const getWinner = (checkers) => {
    const redCheckers = checkers.filter(checker => getColor(checker, CheckerTypes.RED));
    const blackCheckers = checkers.filter(checker => getColor(checker, CheckerTypes.BLACK));
    return redCheckers.length > blackCheckers.length ? CheckerTypes.RED : CheckerTypes.BLACK;
}

const getColor = (actualCheckerType, desiredCheckerType) => actualCheckerType === desiredCheckerType || actualCheckerType === kingChecker(desiredCheckerType);

export const isDrawCondition = (checkers, movesWithNoJump) => {
    //if no jump has occured in 25 moves
    if (movesWithNoJump > 25) {
        return true;
    }

    //if no legal moves remain
    for (let i = 0; i < checkers.length; i++) {
        if (hasLegalMove(checkers, i)) {
            return false;
        }
    }

    return true;
}