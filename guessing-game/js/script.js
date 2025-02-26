let player1box = document.querySelector('.player1box');
let player1btn = document.querySelector('.player1btn');
let player2box = document.querySelector('.player2box');
let player2btn = document.querySelector('.player2btn');
let player3box = document.querySelector('.player3box');
let player3btn = document.querySelector('.player3btn');
let error = document.querySelector('.error');
let player = document.querySelector('.player');
let chance = document.querySelector('.chance');
let chance2 = document.querySelector('.chance2');
let span = document.querySelector('span');
let chance_s = document.querySelector('.chance_s');
let img = document.querySelector('img');

let count = 5;
let count2 = 5;

player1btn.addEventListener('click', function () {
  console.log(player1box.value);
  if (isNaN(player1box.value)) {
    error.innerHTML = 'please enter a number';
  } else {
    error.innerHTML = '';
    if (player1box.value > 10 || player1box.value < 1) {
      error.innerHTML = 'please enter a number less then 10 and greater than 1';
    } else {
      error.innerHTML = '';
      player.innerHTML = 'player-2';
      player1box.style.display = 'none';
      player1btn.style.display = 'none';
      player2box.style.display = 'inline-block';
      player2btn.style.display = 'inline-block';
      chance.style.display = 'block';
    }
  }
});

player2btn.addEventListener('click', function () {
  if (isNaN(player2box.value)) {
    error.innerHTML = 'please enter a number';
  } else {
    error.innerHTML = '';
    if (player2box.value > 10 || player2box.value < 1) {
      error.innerHTML = 'please enter a number less then 10 and greater than 1';
    } else {
      error.innerHTML = '';
      if (count > 0) {
        span.innerHTML = count;
        count--;
        if (player1box.value == player2box.value) {
          player.innerHTML = 'player-3';
          player2box.style.display = 'none';
          player2btn.style.display = 'none';
          player3box.style.display = 'inline-block';
          player3btn.style.display = 'inline-block';
          chance.style.display = 'none';
          chance2.style.display = 'block';
         
        }
      } else {
        player.innerHTML = 'player-3';
        player2box.style.display = 'none';
        player2btn.style.display = 'none';
        player3box.style.display = 'inline-block';
        player3btn.style.display = 'inline-block';
        chance.style.display = 'none';
        chance2.style.display = 'block';
        
      }
    }
  }
});

player3btn.addEventListener('click', function () {
  if (isNaN(player3box.value)) {
    error.innerHTML = 'please enter a number';
  } else {
    error.innerHTML = '';
    if (player3box.value > 10 || player3box.value < 1) {
      error.innerHTML = 'please enter a number less then 10 and greater than 1';
    } else {
      error.innerHTML = '';
      if (count2 > 0) {
        chance_s.innerHTML = count2;
        count2--;
        if (player2box.value == player3box.value) {
          winner('player 2 & 3 win');
        } else if (player1box.value == player2box.value) {
          winner('player 2 win');
        } else if (player1box.value == player3box.value) {
          winner('player 3 win');
        }
      } else {
        winner('player 1 win');
      }
    }
  }
});

function winner(win) {
  player.innerHTML = win;
  player1box.style.display = 'none';
  player1btn.style.display = 'none';
  player2box.style.display = 'none';
  player2btn.style.display = 'none';
  chance.style.display = 'none';
  img.style.display = 'block';
}
