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
import { declareWinner } from '../store/actions/declare-winner';
import { incrementMovesWithNoJump } from '../store/actions/increment-moves-with-no-jump';
import { resetMovesWithNoJump } from '../store/actions/reset-moves-with-no-jump';
import { getCheckers, getMovesWithNoJump } from '../store/selectors/selectors';
import { handleEnd } from '../helpers/drag-n-drop-helper'


export function Checker(props) {
    const [{ isDragging }, drag] = useDrag({
        item: {
            id: props.squareNumber,
            type: ItemTypes.CHECKER
        },
        end: ({ }, monitor) => handleEnd(monitor, props),
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
    state => ({
        checkers: getCheckers(state),
        movesWithNoJump: getMovesWithNoJump(state)
    }),
    { toggleTurn, king, declareWinner, incrementMovesWithNoJump, resetMovesWithNoJump }
)(Checker);