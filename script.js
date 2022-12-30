'use strict';

const score0El = document.querySelector('#score--0');
const score1E2 = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

score0El.textContent = 0;
score1E2.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//rolling dice
btnRoll.addEventListener('click', function () {
  //generate random dice
  const dice = Math.trunc(Math.random() * 6) + 1;
  //display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //check for 1
  if (dice !== 1) {
    currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch to next player
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  //add current score to active player total score
  scores[activePlayer] += currentScore;
  // scores[1] = scores[1] +currentScore
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  //check if players scores is 100
  if (scores[activePlayer] >= 10) {
    //finish the game
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    //if true player wins

    //switch player
    switchPlayer();
  }
});
