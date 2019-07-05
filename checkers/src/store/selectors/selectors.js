export const getCheckers = (store) => store.checkersReducer.checkers;
export const getMovesWithNoJump = (store) => store.gameStatusReducer.movesWithNoJump;
export const getTurn = (store) => store.gameStatusReducer.turn;
export const getWinner = (store) => store.gameStatusReducer.winner;