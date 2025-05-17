const modal = document.getElementById('modal');
const hMsg = document.getElementById('hMsg');
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let lesbianScore = 0;

document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const outcome = determineWinner(playerChoice, computerChoice);

    updateUI(playerChoice, computerChoice, outcome);
  });
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(player, computer) {
    let res = '';
    if (player == computer) {
        if(player === 'scissors'){
            lesbianScore++;
            showLesbianOverlay();
        }
        res =  "draw";
    }else if(
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
    ){
    playerScore++;
    res = "win";
    }else{
    computerScore++;
    res = "lose";
    }
    checkWinner();
    return res;
}

function showLesbianOverlay() {
    const overlay = document.getElementById("draw-overlay");
    overlay.style.display = "flex";
    setTimeout(() => {
      overlay.style.display = "none";
    }, 1000);
  }

function checkWinner(){
    if(computerScore >= 15){
        playerScore = 0;
        computerScore = 0;
        lesbianScore = 0;
        modal.classList.add("hidden");
        updateUI("-", '-', "-");
        alert("You lost! Try again!")
    }else if(lesbianScore >= 7){
        hMsg.innerHTML = "LESBIAN LESBIAN LESBIAN";
        modal.classList.remove("hidden");
    }else if(playerScore >= 10){
        hMsg.innerHTML = "NICE ONE (kinda sad you didn't win throught scissoring)"
        modal.classList.remove("hidden");
    }
}

function updateUI(player, computer, outcome) {
  document.getElementById("player-choice").textContent = `You chose: ${player}`;
  document.getElementById("computer-choice").textContent = `Computer chose: ${computer}`;
  const outcomeText = outcome === "win" ? "You win!" : outcome === "lose" ? "You lose!" : "It's a draw!";
  document.getElementById("outcome").textContent = `Result: ${outcomeText}`;
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("lesbian-score").textContent = lesbianScore;
  document.getElementById("computer-score").textContent = computerScore;
}

restartBtn.addEventListener('click', () => {
    modal.classList.add("hidden");
    playerScore = 0;
    computerScore = 0;
    lesbianScore = 0;
    updateUI("-", '-', "-");
});

function copyText(){
    const text = "My favourite girl!";
  
    navigator.clipboard.writeText(text)
        .then(() => {
          window.location.href = "../gifts/gifts.html";
        })
        .catch(err => {
          console.error("Failed to copy: ", err);
        });
  }
