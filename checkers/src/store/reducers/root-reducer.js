import { checkersReducer } from './checkers-reducer';
import { gameStatusReducer } from './game-status-reducer';

export function checkersApp(state = {}, action) {
    return {
        checkersReducer: checkersReducer(state.checkersReducer, action),
        gameStatusReducer: gameStatusReducer(state.gameStatusReducer, action)
    }
}

export default checkersApp;