const gameButtons = document.querySelectorAll(".game-button");
const startGameButton = document.querySelector(".start-button");
const resultTxt = document.querySelector(".results");
let gameState, winner, turnPlayer;
let buttonsDisabled = 0;


startGameButton.addEventListener("click", restartGame);
gameButtons.forEach(button => {
	button.addEventListener("click", () => chooseButton(button));
});


// Restart the game
function restartGame() {
	gameState = "start";
	turnPlayer = 1;
	winner = 0;
	buttonsDisabled = 0;
	resultTxt.innerHTML = "PLAYER <span style='color:red'>X</span> TURN";

	gameButtons.forEach(button => {
		button.classList.remove("disabled");
		button.classList.remove("button-winner");
		button.innerHTML = "-";
		button.style.color = "white";
	});
}

// Choose a button
function chooseButton(button) {
	if (gameState === "start") {
		if (!button.classList.contains("disabled")) {
			button.classList.add("disabled");
			if (turnPlayer === 1) {
				button.innerHTML = "X";
				button.style.color = "red";
			} else {
				button.innerHTML = "O";
				button.style.color = "blue";
			}
			buttonsDisabled++;
			checkWin();

			if (gameState !== "gameOver") {
				changeTurn();
			}
		}
	}
}

// Check win
function checkWin() {
	if (checkSequence(0, 1, 2) ||
		checkSequence(0, 4, 8) ||
		checkSequence(0, 3, 6) ||
		checkSequence(1, 4, 7) ||
		checkSequence(2, 5, 8) ||
		checkSequence(2, 4, 6) ||
		checkSequence(3, 4, 5) ||
		checkSequence(6, 7, 8)
	) {
		if (turnPlayer === 1) {
			winner = 1;
		} else {
			winner = 2;
		}
		gameOver();
	} else if (buttonsDisabled === 9) {
		gameOver();
	}
}

function checkSequence(b1, b2, b3) {
	if (gameButtons[b1].innerHTML !== "-" && (gameButtons[b1].innerHTML === gameButtons[b2].innerHTML && gameButtons[b2].innerHTML === gameButtons[b3].innerHTML)) {
		gameButtons[b1].classList.add("button-winner");
		gameButtons[b2].classList.add("button-winner");
		gameButtons[b3].classList.add("button-winner");
		return true;
	} else {
		return false;
	}
}

// Change turn
function changeTurn() {
	if (turnPlayer === 1) {
		resultTxt.innerHTML = "PLAYER <span style='color:blue'>O</span> TURN";
		turnPlayer = 2;
	} else {
		resultTxt.innerHTML = "PLAYER <span style='color:red'>X</span> TURN";
		turnPlayer = 1;
	}
}

// Game over
function gameOver() {
	gameState = "gameOver";

	if (winner === 1) {
		resultTxt.innerHTML = "PLAYER <span style='color:red'>X</span> WINS!";
	} else if (winner === 2) {
		resultTxt.innerHTML = "PLAYER <span style='color:red'>O</span> WINS!";
	} else {
		resultTxt.innerHTML = "GAME OVER!";
	}
}
