import React from 'react';
import BoardColors from '../enums/board-colors';
import Checker from './checker';
import { useDrop } from 'react-dnd';
import ItemTypes from '../helpers/constants';
import { connect } from 'react-redux'
import { moveChecker } from '../store/actions/move-checker'
import { jumpChecker } from '../store/actions/jump-checker'
import { isDiagonalSquare, isDiagonalJumpSquare, isForward, isIntermediateSquareOccupiedByOpponent, isNewSquareOccupied, getIntermediateSquare } from '../helpers/square-helper';
import { getTurn } from '../store/selectors/selectors';
import kingChecker from '../helpers/checker-helper';

function Square(props) {
    const [, drop] = useDrop({
        accept: ItemTypes.CHECKER,
        drop: (item) => {
            dropChecker(item, props);
            return {
                startSquare: item.id,
                endSquare: props.squareNumber
            };
        },
        canDrop: (item) => canDropChecker(item, props)
    })
    const squareNumber = props.squareNumber;

    if (props.squares) {
        switch (props.squares[squareNumber]) {
            case BoardColors.WHITE:
                return (<div className="square white">{squareNumber}</div>);
            case BoardColors.BLUE:
                return (<div
                    ref={drop}
                    className="square blue">
                    <Checker squareNumber={squareNumber}
                        checkers={props.checkers}
                        squares={props.squares} />
                </div>);
            default:
                return null;
        }
    }
    return null;
}

function dropChecker(original, props) {
    const fromSquare = original.id;
    const toSquare = props.squareNumber;
    if (isDiagonalSquare(fromSquare, toSquare)) {
        props.moveChecker(fromSquare, toSquare);
    }
    if (isDiagonalJumpSquare(fromSquare, toSquare)) {
        props.jumpChecker(fromSquare, toSquare);
    }
}

function canDropChecker(original, props) {
    const fromSquare = original.id;
    const toSquare = props.squareNumber;
    if (fromSquare === toSquare) {
        return false;
    }

    const checkers = props.checkers;
    const checkersColor = checkers[fromSquare];
    const turn = props.turn;

    const kingTurn = kingChecker(turn);
    if (turn !== checkersColor &&
        kingTurn !== checkersColor) {
        return false;
    }

    //if it's a forward diagonal move 
    //to an unoccupied square it's good
    if (isDiagonalSquare(fromSquare, toSquare) &&
        !isNewSquareOccupied(checkers, toSquare) &&
        isForward(checkersColor, fromSquare, toSquare)) {
        return true;
    }

    //if it's a forward diagonal jump move over 
    //an opponent to an unoccupied square it's good
    if (isDiagonalJumpSquare(fromSquare, toSquare) &&
        isIntermediateSquareOccupiedByOpponent(checkers, checkersColor, fromSquare, toSquare) &&
        !isNewSquareOccupied(checkers, toSquare) &&
        isForward(checkersColor, fromSquare, toSquare)) {
        return true;
    }

    return false;
}

export default connect(
    state => ({
        turn: getTurn(state)
    }),
    { moveChecker, jumpChecker }
)(Square);