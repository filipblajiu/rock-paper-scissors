// 1 - Rock
// 2 - Paper
// 3 - Scissors

let playerScore = 0;
let computerScore = 0;

document.getElementById("rock").addEventListener("click", function(){
    console.log("Player: Rock");
    resetEmoji();
    let play = rockPlay();
    document.getElementById("RockPlay").getElementsByClassName("human")[0].className += " played";
    document.getElementById("score-player").innerHTML = playerScore;
    document.getElementById("score-computer").innerHTML = computerScore;
    document.getElementById("play").innerHTML = play;
    console.log(play);
});

document.getElementById("paper").addEventListener("click", function(){
    console.log("Player: Paper");
    resetEmoji();
    let play = paperPlay();
    document.getElementById("PaperPlay").getElementsByClassName("human")[0].className += " played";
    document.getElementById("score-player").innerHTML = playerScore;
    document.getElementById("score-computer").innerHTML = computerScore;
    document.getElementById("play").innerHTML = play;
    console.log(play);
});

document.getElementById("scissors").addEventListener("click", function(){
    console.log("Player: Scissors");
    resetEmoji();
    let play = scissorsPlay();
    document.getElementById("ScissorsPlay").getElementsByClassName("human")[0].className += " played";
    document.getElementById("score-player").innerHTML = playerScore;
    document.getElementById("score-computer").innerHTML = computerScore;
    document.getElementById("play").innerHTML = play;
    console.log(play);
});

function computerPlay(){
    let play = Math.floor(Math.random() * 3) + 1;
    let toHand = "";
    switch (play) {
        case 1:
            toHand = "Rock"
            break;
        case 2:
            toHand = "Paper"
            break;
        case 3:
            toHand = "Scissors"
            break;
    }
    resetEmoji();
    document.getElementById(toHand + "Play").getElementsByClassName("robot")[0].className += " played";
    console.log("Computer: " + toHand);
    return play;
}

function rockPlay(){
    let computer = computerPlay();
    switch (computer) {
        case 1:
            return "Tie!"
            break;
        case 2:
            computerScore += 1;
            return "Loser! Paper beats Rock!"
            break;
        case 3:
            playerScore += 1;
            return "Winer! Rock beats Scissors!"
            break;
    }
}

function paperPlay(){
    let computer = computerPlay();
    switch (computer) {
        case 1:
            playerScore += 1;
            return "Winer! Paper beats Rock!"
            break;
        case 2:
            return "Tie!"
            break;
        case 3:
            computerScore += 1;
            return "Loser! Scissors beats Paper!"
            break;
    }
}

function scissorsPlay(){
    let computer = computerPlay();
    switch (computer) {
        case 1:
            computerScore += 1;
            return "Loser! Rock beats Scissors!"
            break;
        case 2:
            playerScore += 1;
            return "Winer! Scissors beats Paper!"
            break;
        case 3:
            return "Tie!"
            break;
    }
}

function resetEmoji(){
    let reset = document.getElementsByClassName("played");
    if (reset.length > 0) {
        for (let i = 0; i < reset.length; i++) {
            reset[i].classList.remove('played');
        }
    }
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})