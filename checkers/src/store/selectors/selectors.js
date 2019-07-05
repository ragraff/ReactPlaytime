function getCheckers(store) {
    return store.checkersReducer.checkers;
}

function getTurn(store) {
    return store.turnReducer.turn
}

export { getCheckers, getTurn }