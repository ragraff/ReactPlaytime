import CheckerTypes from '../../enums/checker-types';
import { TOGGLE_TURN } from '../actions/toggle-turn';
import { toggle } from '../../helpers/turn-helper';
import { DECLARE_WINNER } from '../actions/declare-winner';
import { INCREMENT_MOVES_WITH_NO_JUMP } from '../actions/increment-moves-with-no-jump';
import { RESET_MOVES_WITH_NO_JUMP } from '../actions/reset-moves-with-no-jump';

export function gameStatusReducer(state = {
    turn: CheckerTypes.RED,
    winner: null,
    movesWithNoJump: 0
}, action) {
    switch (action.type) {
        case TOGGLE_TURN:
            return Object.assign({}, state, { turn: toggle(state.turn) });
        case DECLARE_WINNER:
            return Object.assign({}, state, { winner: action.winner });
        case INCREMENT_MOVES_WITH_NO_JUMP:
            return Object.assign({}, state, { movesWithNoJump: state.movesWithNoJump + 1 });
        case RESET_MOVES_WITH_NO_JUMP:
            return Object.assign({}, state, { movesWithNoJump: 0 });
        default:
            return state;
    }
}