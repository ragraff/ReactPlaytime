import * as squareHelper from '../helpers/square-helper';
import * as boardHelper from '../helpers/board-helper';

export function handleEnd(monitor, props) {
    if (monitor && monitor.getDropResult() && monitor.didDrop()) {
        const startSquare = monitor.getDropResult().startSquare;
        const endSquare = monitor.getDropResult().endSquare;

        if (!squareHelper.completedJump(startSquare, endSquare)) {
            props.incrementMovesWithNoJump();
        }
        else {
            props.resetMovesWithNoJump();
        }

        let justKinged;

        if (squareHelper.shouldKing(props.checkers, endSquare, false)) {
            props.king(endSquare);
            justKinged = true;
        }
        toggleTurn(monitor, props, startSquare, endSquare, justKinged);

        if (boardHelper.isWinningCondition(props.checkers, props.movesWithNoJump)) {
            const winner = boardHelper.getWinner(props.checkers);
            props.declareWinner(winner);
        }
        else if (boardHelper.isDrawCondition(props.checkers, props.movesWithNoJump)) {
            props.declareWinner('No one');
        }
    }
}

const toggleTurn = (monitor, props, startSquare, endSquare, justKinged) => {
    if (!!monitor.didDrop() && (!squareHelper.completedJump(startSquare, endSquare) || !squareHelper.canCheckerJump(props.checkers, props.squares, endSquare, justKinged))) {
        props.toggleTurn();
    }
}

export default handleEnd;