import { checkersReducer } from './checkers-reducer';
import { turnReducer } from './turn-reducer';

export function checkersApp(state = {}, action) {
    return {
        checkersReducer: checkersReducer(state.checkersReducer, action),
        turnReducer: turnReducer(state.turnReducer, action)
    }
}

export default checkersApp;