import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
}

class Board extends React.Component {
	renderSquare(i) {
		return (
			<Square
				value={this.props.squares[i]}
				onClick={() => this.props.onClick(i)}
			/>
		);
	}

	render() {
		return (
			<div>
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

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [
				{
					squares: Array(9).fill(null)
				}
			],
			stepNumber: 0,
			xIsNext: true,
			comTurn: false
		};
	}

	handleClick(i) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		if (calculateWinner(squares) || squares[i]) {
			return;
		}
		squares[i] = 'X';

		let nextMove = this.comMove(squares, this.state.stepNumber, i);
		squares[nextMove] = 'O';

		this.setState({
			history: history.concat([
				{
					squares: squares
				}
			]),
			stepNumber: history.length,
			xIsNext: true
		});
	}

	comMove(squares, stepNumber, index) {
		if (stepNumber === 0) {
			if (index === 4) {
				const random = Math.round(Math.random() * 8 / 2) * 2;
				return random === 4
					? Math.round(Math.random() * 8 / 2) * 2
					: random;
			} else {
				return 4;
			}
		} else if (stepNumber === 1) {
			if (squares[8 - index] !== null) {
				if (index === 0 || index === 8) {
					return Math.round(Math.random()) * 4 + 2;
				} else {
					return Math.round(Math.random() * 8 / 8) * 8;
				}
			} else {
				return 8 - index;
			}
		} else if (stepNumber === 2) {
			const oppositeIndices = [];
			squares.forEach((square, i) => {
				if (square === 'O') {
					oppositeIndices.push(i);
				}
			});

			if (squares[oppositeIndices[0] + 1] === 'X' || squares[oppositeIndices[0] + 3] === 'X') {
				return 8 - index;
			} else {
				if (oppositeIndices[1] - oppositeIndices[0] === 2) {
					return oppositeIndices[0] + 1;
				} else {
					return oppositeIndices[0] + 3;
				}
			}
		} else if (stepNumber === 3) {
			console.log('3');
			return 8 - index;
		} else if (stepNumber === 4) {
			console.log('4');
		}
	}

	checkIfCanEnd() {}

	jumpTo(step) {
		this.setState({
			stepNumber: step,
			xIsNext: step % 2 === 0
		});
	}

	resetGame() {
		setTimeout(() => {
			this.setState({
				history: [
					{
						squares: Array(9).fill(null)
					}
				],
				stepNumber: 0,
				xIsNext: true
			});
		}, 2000);
	}

	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const winner = calculateWinner(current.squares);

		// const moves = history.map((step, move) => {
		// 	const desc = move ? `Go to move #${move}` : `Go to game start`;
		// 	return (
		// 		<li key={move}>
		// 			<button onClick={() => this.jumpTo(move)}>{desc}</button>
		// 		</li>
		// 	);
		// });

		let status;
		if (winner) {
			status = `Winner ${winner}`;
			this.resetGame();
		} else if (this.state.stepNumber === 5) {
			status = 'Draw';
			this.resetGame();
		} else {
			status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
		}

		return (
			<div className="game">
				<div className="game-info">
					<div>{status}</div>
					{/* <ol>{moves}</ol> */}
				</div>
				<div className="game-board">
					<Board
						squares={current.squares}
						onClick={i => this.handleClick(i)}
					/>
				</div>
			</div>
		);
	}
}

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[a] === squares[c]
		) {
			return squares[a];
		}
	}
	return null;
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
