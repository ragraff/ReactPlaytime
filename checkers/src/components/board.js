import React, { Component } from 'react';
import BoardRow from './board-row'

export default class Board extends Component {
    renderBoardRow(row) {
        return <BoardRow squares={this.props.squares}
            checkers={this.props.checkers}
            row={row} />
    }

    render() {
        return (
            <div>
                {this.renderBoardRow(0)}
                {this.renderBoardRow(1)}
                {this.renderBoardRow(2)}
                {this.renderBoardRow(3)}
                {this.renderBoardRow(4)}
                {this.renderBoardRow(5)}
                {this.renderBoardRow(6)}
                {this.renderBoardRow(7)}
            </div>
        );
    }
}