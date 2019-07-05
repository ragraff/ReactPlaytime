import { MOVE_CHECKER } from '../actions/move-checker';
import { JUMP_CHECKER } from '../actions/jump-checker';
import { KING } from '../actions/king';
import { CheckerTypes } from '../../enums/checker-types';
import { getIntermediateSquare } from '../../helpers/square-helper';
import { setChips } from '../../helpers/chip-helper';
import { kingChecker } from '../../helpers/checker-helper';

const initialState = {
    checkers: setChips()
}

export function checkersReducer(state = initialState, action) {
    let newCheckers = state.checkers.slice();
    const checkerType = newCheckers[action.fromSquare];

    switch (action.type) {
        case MOVE_CHECKER:
            newCheckers[action.fromSquare] = CheckerTypes.NONE;
            newCheckers[action.toSquare] = checkerType;
            return Object.assign({}, state, { checkers: newCheckers });
        case JUMP_CHECKER:
            newCheckers[action.fromSquare] = CheckerTypes.NONE;
            newCheckers[getIntermediateSquare(action.fromSquare, action.toSquare)] = CheckerTypes.NONE;
            newCheckers[action.toSquare] = checkerType;
            return Object.assign({}, state, { checkers: newCheckers });
        case KING:
            newCheckers[action.toSquare] = kingChecker(newCheckers[action.toSquare]);
            return Object.assign({}, state, { checkers: newCheckers });
        default:
            return state;
    }
}

export default checkersReducer;