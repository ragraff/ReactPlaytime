import React from 'react';

import { ReactComponent as RedCheckerSvg } from '../assets/red-checker.svg';
import { ReactComponent as BlackCheckerSvg } from '../assets/black-checker.svg';
import { ReactComponent as RedKingSvg } from '../assets/red-king.svg';
import { ReactComponent as BlackKingSvg } from '../assets/black-king.svg';
import CheckerTypes from '../enums/checker-types';
import { useDrag } from 'react-dnd';
import { connect } from 'react-redux'
import ItemTypes from '../helpers/constants';
import { toggleTurn } from '../store/actions/toggle-turn';
import { king } from '../store/actions/king';
import { canCheckerJump, completedJump, shouldKing } from '../helpers/square-helper';

export function Checker(props) {
    const [{ isDragging }, drag] = useDrag({
        item: {
            id: props.squareNumber,
            type: ItemTypes.CHECKER
        },
        end: ({ }, monitor) => {
            if (monitor && monitor.getDropResult() && monitor.didDrop()) {
                const startSquare = monitor.getDropResult().startSquare;
                const endSquare = monitor.getDropResult().endSquare;

                if (shouldKing(props.checkers, endSquare, false)) {
                    props.king(endSquare)
                }

                const _completedJump = completedJump(startSquare, endSquare);
                const _canCheckerJump = canCheckerJump(props.squares, props.checkers, endSquare);
                if (!!monitor.didDrop() &&
                    (!_completedJump || !_canCheckerJump))
                    props.toggleTurn()
            }
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    });

    const squareNumber = props.squareNumber;
    if (props.checkers) {
        switch (props.checkers[squareNumber]) {
            case CheckerTypes.RED:
                return (<div ref={drag}
                    className={isDragging ? "checker dragging" : "checker"}>
                    <RedCheckerSvg />
                </div>);
            case CheckerTypes.BLACK:
                return (<div ref={drag}
                    className={isDragging ? "checker dragging" : "checker"}>
                    <BlackCheckerSvg />
                </div>);
            case CheckerTypes.RED_KING:
                return (<div ref={drag}
                    className={isDragging ? "checker dragging" : "checker"}>
                    <RedKingSvg />
                </div>);
            case CheckerTypes.BLACK_KING:
                return (<div ref={drag}
                    className={isDragging ? "checker dragging" : "checker"}>
                    <BlackKingSvg />
                </div>);
            default:
                return null;
        }
    }
    return null;
}

export default connect(
    null,
    { toggleTurn, king }
)(Checker);