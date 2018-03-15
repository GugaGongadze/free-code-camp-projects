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
			comIsNext: false,
			playerIsX: null
		};
	}

	handleClick(i) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		if (calculateWinner(squares) || squares[i]) {
			return;
		}

		squares[i] = this.state.playerIsX ? 'X' : 'O';
		this.setState({
			history: history.concat([{ squares }]),
			stepNumber: history.length,
			comIsNext: true
		});

		setTimeout(() => {
			if (squares.includes(null)) {
				let nextMove = this.comMove(squares, this.state.stepNumber, i);

				squares[nextMove] = this.state.playerIsX ? 'O' : 'X';
			}
			this.setState({
				history: history.concat([{ squares: squares }]),
				comIsNext: false
			});
		}, 1000);
	}

	comMove(squares, stepNumber, index) {
		const filledSquares = [];
		squares.forEach((square, i) => {
			if (square !== null) {
				filledSquares.push(i);
			}
		});

		return generateRandNumExcluding(8, filledSquares);
	}

	jumpTo(step) {
		this.setState({
			stepNumber: step,
			comIsNext: step % 2 === 0
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
				comIsNext: false,
				playerIsX: null
			});
		}, 2000);
	}

	onButtonClick(e) {
		if (e.target.textContent === 'X') {
			this.setState({
				playerIsX: true
			});
		} else {
			this.setState({
				playerIsX: false,
				comIsNext: true
			});
			const history = this.state.history.slice(
				0,
				this.state.stepNumber + 1
			);

			const current = history[history.length - 1];
			const squares = current.squares.slice();

			squares[4] = 'X';

			setTimeout(() => {
				this.setState({
					history: history.concat([{ squares }]),
					stepNumber: history.length,
					comIsNext: false
				});
			}, 1000);
		}
	}

	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const winner = calculateWinner(current.squares);
		const playerIsX = this.state.playerIsX;

		let status;
		if (winner) {
			// status = `Winner ${winner}`;
			if (playerIsX && winner === 'X') {
				status = 'Winner: Player';
			} else if (playerIsX && winner !== 'O') {
				status = 'Winner: Computer';
			} else if (!playerIsX && winner === 'X') {
				status = 'Winner: Computer';
			} else {
				status = 'Winner: Player';
			}
			this.resetGame();
		} else if (this.state.stepNumber === 5) {
			status = 'Draw';
			this.resetGame();
		} else {
			status = `Next: ${this.state.comIsNext ? 'Computer' : 'Player'}`;
		}

		if (playerIsX === null) {
			return (
				<div className="game">
					<div className="game-info">
						<div className="greeting-screen">
							<div>Do you want to play as</div>
							<div className="button-wrapper">
								<button
									className="greeting-button"
									onClick={this.onButtonClick.bind(this)}
								>
									X
								</button>
								<span>or</span>
								<button
									className="greeting-button"
									onClick={this.onButtonClick.bind(this)}
								>
									O
								</button>
							</div>
							<div>?</div>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className="game">
					<div className="game-info">
						<div>{status}</div>
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

function generateRandNumExcluding(limit, excludedNums) {
	const num = Math.floor(Math.random() * limit + 1);
	return excludedNums.includes(num)
		? generateRandNumExcluding(limit, excludedNums)
		: num;
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
