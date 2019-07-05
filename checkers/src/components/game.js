import React, { Component } from 'react';
import Board from './board';
import { connect } from 'react-redux'
import * as selectors from '../store/selectors/selectors';
import { setSquares } from '../helpers/init-helper';


class Game extends Component {
    squares = [];
    constructor(props) {
        super(props);
        this.squares = setSquares();
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={this.squares} />
                </div>
                <div className="game-info">
                    {this.props.winner ? this.props.winner + ' wins!!!' :
                        'Go ' + this.props.turn + ', it\'s your turn!!!'}
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        turn: selectors.getTurn(state),
        winner: selectors.getWinner(state)
    })
)(Game);