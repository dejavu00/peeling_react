import React,{Component} from 'react'
import {Row,Col} from 'antd'
import Square from './Square'
class Board extends React.Component {

    constructor() {

        super();
        this.state = {
            squares: Array(9).fill(null),
            direction: true,
            winner:''
        };
        this.lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
    }
     calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.direction?'X':'O';
        this.setState({squares});
        this.setState({
            direction:!this.state.direction,
            winner:this.calculateWinner(squares) || null
        });

    }

    renderSquare(i) {

        return (
            <Square
                value={this.state.squares[i]}
                onClick={() =>this.handleClick(i)}
            />
        );
    }

    render() {
        const status = `Next player: ${this.state.direction?'X':'O'}`;
        const winner = this.state.winner?`Winner${this.state.winner}`:''
        return (
            <div>
                <div className="status">{status}{winner}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
export default Board