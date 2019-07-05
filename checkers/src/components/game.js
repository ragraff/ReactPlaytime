import React, { Component } from 'react';
import Board from './board';
import BoardColors from '../enums/board-colors';
import { connect } from 'react-redux'
import { getSquareNumber } from '../helpers/square-helper';
import { getCheckers, getTurn } from '../store/selectors/selectors';


class Game extends Component {
    squares = [];
    chips = [];
    constructor(props) {
        super(props);
        this.setupGameBoard();
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={this.squares}
                        checkers={this.props.checkers} />
                </div>
                <div className="game-info">
                    Go {this.props.turn}, it's your turn!!!
                </div>
            </div>
        )
    }

    setupGameBoard() {
        this.squares = this.setSquares();
    }

    setSquares() {
        let squares = [];
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                let squareNumber = getSquareNumber(i, j);
                if (i % 2 === 1 ^ j % 2 === 0) {
                    squares[squareNumber] = BoardColors.BLUE;
                }
                else {
                    squares[squareNumber] = BoardColors.WHITE;
                }
            }
        }
        return squares;
    }
}

export default connect(
    state => ({
        checkers: getCheckers(state),
        turn: getTurn(state)
    })
)(Game);