const board = document.getElementById("board");
let cards = [];
let flippedCards = [];
let matchedPairs = 0;

const modal = document.getElementById('winModal');
const restartBtn = document.getElementById('restartBtn');


function onWin() {
    modal.classList.remove('hidden');
}

restartBtn.addEventListener('click', () => {
    modal.classList.add("hidden");
    startGame();
});


function shuffleCards(array){
    return array.sort(() => 0.5 - Math.random());
}

function startGame(){
    const icons = [
        '../memory-game-img/1.png',
        '../memory-game-img/2.png',
        '../memory-game-img/3.png',
        '../memory-game-img/4.png',
        '../memory-game-img/5.png',
        '../memory-game-img/6.png',
        '../memory-game-img/7.png',
        '../memory-game-img/8.png',
    ]
    const pairs = shuffleCards([...icons, ...icons]);

    board.innerHTML = '';
    matchedPairs = 0;
    flippedCards = [];

    pairs.forEach((element, index) => {
        modal.classList.add('hidden');
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.icon = element;

        card.innerHTML = `
        <div class="card-inner">
          <div class="card-front"></div>
          <div class="card-back"><img src="${element}" alt="card image" /></div>
        </div>
      `;
        card.dataset.index = index;
        card.addEventListener('click', flipEM);
        board.appendChild(card);
        cards[index] = card;
    });
}

function flipEM() {
    if (this.classList.contains('flipped') || flippedCards.length === 2) return;
  
    this.classList.add('flipped');
    flippedCards.push(this);
  
    if (flippedCards.length === 2) {
      setTimeout(checkIfMatch, 800);
    }
}
  
function checkIfMatch() {
  const [card1, card2] = flippedCards;

  if (card1.dataset.icon === card2.dataset.icon) {
    matchedPairs++;
    flippedCards = [];

    if (matchedPairs === cards.length / 2) {
      setTimeout(onWin, 200);
    }
  } else {
    setTimeout(() => {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
      flippedCards = [];
    }, 500);
  }
}
  
function copyText(){
  const text = 'Hey cutie ;)';

  navigator.clipboard.writeText(text)
      .then(() => {
        window.location.href = "../gifts/gifts.html";
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
}