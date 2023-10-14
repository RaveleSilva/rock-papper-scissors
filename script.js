const options = document.querySelectorAll('.pick-screen > div');
const userPickScreen = document.querySelector('.pick-screen');
const showPicksScreen = document.querySelector('.show-picks-screen')
const showUserPick = document.querySelector('#user-pick')
const houseOptions = ['paper', 'rock', 'scissors']
let userPick;
let userPickValue;

function getUserPick(event) {
  userPick = event.target.parentNode
  userPickValue = userPick.classList.value
  console.log(userPick)

  showUserPick.appendChild(userPick)
  userPickScreen.style.display = 'none'
  showPicksScreen.style.display = 'flex'
}



options.forEach(option => option.addEventListener('click', getUserPick))