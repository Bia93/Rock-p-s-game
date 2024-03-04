let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result = document.querySelector(".result > p");
const scissors = document.getElementById("s");
const rock = document.getElementById("r");
const paper = document.getElementById("p");

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "s") return "Scissors";
  return "Papper";
}
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result.innerHTML = `${convertToWord(userChoice)}  beats ${convertToWord(
    computerChoice
  )}. YOU WIN!`;
}
function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result.innerHTML = `${convertToWord(userChoice)}  loses ${convertToWord(
    computerChoice
  )}. YOU lost!`;
}
function draw(userChoice, computerChoice) {
  result.innerHTML = `${convertToWord(userChoice)}  beats ${convertToWord(
    computerChoice
  )}. DRAW!`;
}
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs": //r e de alegerea userului si s alegerea calculatorului
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp": // p alegerea userului si p a calculatorului
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "pp":
    case "ss":
    case "rr":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock.addEventListener("click", function () {
    game("r");
  });
  paper.addEventListener("click", function () {
    game("p");
  });
  scissors.addEventListener("click", function () {
    game("s");
  });
}

main();
