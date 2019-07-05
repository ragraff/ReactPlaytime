import React, { Component } from 'react';
import Square from './square'
import { getSquareNumber } from '../helpers/square-helper';

class BoardRow extends Component {
    renderSquare(column) {
        return <Square squares={this.props.squares}
            squareNumber={getSquareNumber(this.props.row, column)} />
    }

    render() {
        return (
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                {this.renderSquare(6)}
                {this.renderSquare(7)}
            </div>
        );
    }
}

export default BoardRow;