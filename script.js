const elements = {
  options: document.querySelectorAll('.pick-screen > div'),
  userPickScreen: document.querySelector('.pick-screen'),
  showPicksScreen: document.querySelector('.show-picks-screen'),
  showUserPick: document.querySelector('#user-pick'),
  showHouse: document.querySelector('#house-pick'),
  housePickText: document.querySelector('#house-pick h2'),
  scoreDiv: document.querySelector('#score'),
  resultDiv: document.querySelector('.result'),
  resultText: document.querySelector('.result span'),
  playAgainButton: document.querySelector('#play-again'),
  rulesButton: document.querySelector('#rules'),
  modal: document.querySelector('#rules-modal'),
  backshadow: document.querySelector('#backshadow'),
  closeModal: document.querySelector('.close-modal'),
};

let userPick;
let userPickValue;
let housePickValue;
let userPickClone;
let housePickDiv;
let score = 0;

const houseOptions = ['paper', 'rock', 'scissors'];

function getHousePick(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  housePickValue = list[randomIndex];
  return housePickValue;
}

function showHousePick() {
  const housePick = getHousePick(houseOptions);
  housePickDiv = document.createElement('div');
  const housePickImg = document.createElement('img');

  housePickDiv.classList.add(housePick);
  housePickImg.setAttribute('src', `images/icon-${housePick}.svg`);

  housePickDiv.appendChild(housePickImg);
  elements.housePickText.innerHTML = 'THE HOUSE IS PICKING...';

  setTimeout(() => {
    elements.housePickText.classList.add('hide')
    elements.showHouse.appendChild(housePickDiv);
    elements.housePickText.innerHTML = 'THE HOUSE PICKED';
  }, 1000);
}

function getUserPick(event) {
  userPick = event.target.parentNode;
  userPickValue = userPick.classList.value;
  userPickClone = userPick.cloneNode(true);

  elements.showUserPick.appendChild(userPickClone);
  elements.userPickScreen.style.display = 'none';
  elements.showPicksScreen.style.display = 'grid';

  showHousePick();
  getResult();
}

function getResult() {
  let result;
  if (
    (userPickValue === 'paper' && housePickValue === 'rock') ||
    (userPickValue === 'rock' && housePickValue === 'scissors') ||
    (userPickValue === 'scissors' && housePickValue === 'paper')
  ) {
    result = 'YOU WIN';
    score++;
  } else if (userPickValue === housePickValue) {
    result = 'DRAW';
  } else {
    result = 'YOU LOSE';
  }

  setTimeout(() => {
    elements.resultDiv.style.display = 'flex';
    elements.resultText.innerHTML = result;
    elements.scoreDiv.innerHTML = score;
  }, 1500);
}

function playAgain() {
  elements.showPicksScreen.style.display = 'none';
  elements.resultDiv.style.display = 'none';
  elements.userPickScreen.style.display = 'grid';
  elements.showUserPick.removeChild(userPickClone);
  elements.showHouse.removeChild(housePickDiv);
  elements.housePickText.classList.remove('hide')
}

function showRules() {
  elements.modal.classList.add('active');
  elements.backshadow.classList.add('active');
}

function hideRules() {
  elements.modal.classList.remove('active');
  elements.backshadow.classList.remove('active');
}

elements.options.forEach(option => option.addEventListener('click', getUserPick));
elements.playAgainButton.addEventListener('click', playAgain);
elements.rulesButton.addEventListener('click', showRules);
elements.backshadow.addEventListener('click', hideRules);
elements.closeModal.addEventListener('click', hideRules);
