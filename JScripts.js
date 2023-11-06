let playerScore = 0;
let comScore = 0;

const buttonRock = document.getElementById("Rock");
const buttonPaper = document.getElementById("Paper");
const buttonScissor = document.getElementById("Scissor");


buttonRock.addEventListener("click", function () {
    game(1);
});
buttonPaper.addEventListener("click", function () {
    game(2);
});
buttonScissor.addEventListener("click", function () {
    game(3);
});

function game(play) {
    let playerSelect = playerInput(play);

    let computerSelection = getComputerChoice();
    let scoreBoard = document.getElementsByClassName("scoreBoard")[0];
    let lastPlay = document.getElementsByClassName("lastPlay")[0];


    [playerScore, comScore] = gameLogic(computerSelection, playerSelect, scoreBoard, lastPlay)

    validateScore(playerScore, comScore, scoreBoard, computerSelection, playerSelect, lastPlay);

}


function gameLogic(comInput, playerInput) {

    if (comInput === playerInput) {

    } else if ((playerInput === "Rock" && comInput === "Scissor") ||
        (playerInput === "Scissor" && comInput === "Paper") ||
        (playerInput === "Paper" && comInput === "Rock")) {
        playerScore++;
    } else {
        comScore++;

    }

    return [playerScore, comScore];

}

function validateScore(playerScore, comScore, scoreBoard, comInput, playerInput, lastPlay) {

    if (playerScore > comScore) {
        scoreBoard.textContent = `Player wins! Com: ${comScore} P: ${playerScore}`;
        lastPlay.textContent = `with ${playerInput} against ${comInput}`;

    } else if (playerInput === comInput) {
        lastPlay.textContent = `DRAW ${playerInput} VS ${comInput}`;

    } else {
        scoreBoard.textContent = `Computer wins! Com: ${comScore} P: ${playerScore}`;
        lastPlay.textContent = `with ${playerInput} against ${comInput}`;


    }
}

function playerInput(playerSelection) {

    playerSelection = getWeaponChoice(playerSelection);

    return playerSelection;
}

function getWeaponChoice(number) {
    if (number === 1) {
        return "Rock";
    }
    if (number === 2) {
        return "Paper";

    }
    if (number === 3) {
        return "Scissor";

    }

}

function getComputerChoice() {
    const comMoveArr = ["Rock", "Paper", "Scissor"];
    return comMoveArr[Math.floor(Math.random() * comMoveArr.length)];
}