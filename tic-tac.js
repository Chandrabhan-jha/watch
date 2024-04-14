const cells = document.querySelectorAll('.cell');
const messageEl = document.querySelector('.message');
const resetBtn = document.getElementById('reset-btn');

let currentPlayer = 'X';
let gameOver = false;
let gameBoard = ['', '', '', '', '', '', '', '', ''];

function handleCellClick(event) {
  const cellIndex = event.target.dataset.cellIndex;

  if (gameOver || gameBoard[cellIndex] !== '') {
    return;
  }

  gameBoard[cellIndex] = currentPlayer;
  event.target.textContent = currentPlayer;

  checkWinner();
  switchPlayer();

  if (gameOver) {
    messageEl.textContent = `${currentPlayer === 'X' ? 'O' : 'X'} Wins!`;
  } else if (isBoardFull()) {
    messageEl.textContent = "It's a Tie!";
  }
}

function checkWinner() {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningConditions.length; i++) {
    const condition = winningConditions[i];
    const cell1 = gameBoard[condition[0]];
    const
