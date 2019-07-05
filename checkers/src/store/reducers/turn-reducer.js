import CheckerTypes from "../../enums/checker-types";
import { TOGGLE_TURN } from "../actions/toggle-turn";
import { toggle } from '../../helpers/turn-helper';

export function turnReducer(state = { turn: CheckerTypes.RED }, action) {
    switch (action.type) {
        case TOGGLE_TURN:
            return Object.assign({}, state, { turn: toggle(state.turn) });
        default:
            return state;
    }
}