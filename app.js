const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeleft = document.querySelector('.time-left');
let score = document.querySelector('.score');
let currentTime = timeleft.textContent;

let result = 0;
let hitposition;

function randomSquare(){
    square.forEach(item => {
        item.classList.remove('mole');
    })
    let randomPosition = square[Math.floor(Math.random()* 9)];
    randomPosition.classList.add('mole');
    hitposition = randomPosition.id;
}

square.forEach(item => {
    item.addEventListener('mouseup', () => {
        if (item.id = hitposition){
            result += 1;
            score.textContent = result;
        }
    })
})

function moveMole(){
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);
}

function countDown(){
    currentTime -= 1;
    timeleft.textContent = currentTime;
    if (currentTime <= 0){
        clearInterval(timerId);
        alert('Game over! Your result is' + result);
    }
}

let timerId = setInterval(countDown, 1000);
moveMole();