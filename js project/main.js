'use strict';
const score = document.querySelector('.score'),
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea'),
    car = document.createElement('div');


start.addEventListener('click', startGame);

document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false,
};
car.classList.add('car');

const settings = {
    start: false,
    score: 0,
    speed: 3,
};

function startGame() {
    start.classList.add('hide');
    settings.start = true;
    gameArea.appendChild(car);
    requestAnimationFrame(playGame);
}

function playGame() {
    console.log('Play game');
    if (settings.start === true) {
        requestAnimationFrame(playGame);
    }
}

function startRun(event) {
    event.preventDefault();
    keys[event.key] = true; //будет видеть в ивент кей значения, которые хранятся в объекте keys
}

function stopRun(event) {
    event.preventDefault();
    keys[event.key] = false;
}

