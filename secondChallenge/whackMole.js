let score = 0;
let timeLeft = 30;
let currentHole = null;
let timerId;
let moleTimerId;

const modal = document.getElementById('modal');
function randomHole() {
  const holes = document.querySelectorAll('.hole');
  holes.forEach(hole => hole.innerHTML = '');

  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];

  const mole = document.createElement('div');
  mole.classList.add('mole');
  mole.addEventListener('click', whack);
  hole.appendChild(mole);

  currentHole = hole.id;
}

function whack() {
  score++;
  document.getElementById('score').textContent = score;
  this.remove();
}

function startGame() {
  score = 0;
  timeLeft = 30;
  document.getElementById('score').textContent = score;
  document.getElementById('time').textContent = timeLeft;

  clearInterval(timerId);
  clearInterval(moleTimerId);

  moleTimerId = setInterval(randomHole, 800);
  timerId = setInterval(() => {
    timeLeft--;
    document.getElementById('time').textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      clearInterval(moleTimerId);
      if(score >= 30){
        modal.classList.remove('hidden');
      }else{
        alert("Game over! You only scored: " + score + ' Try again!');
      }
    }
  }, 1000);
}

restartBtn.addEventListener('click', () => {
    modal.classList.add("hidden");
    startGame();
});

function copyText(){
    const text = "You're so pretty!";
  
    navigator.clipboard.writeText(text)
        .then(() => {
          window.location.href = "../gifts/gifts.html";
        })
        .catch(err => {
          console.error("Failed to copy: ", err);
        });
  }