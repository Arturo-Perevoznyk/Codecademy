// let hours, minutes, seconds, milliseconds = [0, 0, 0, 0];
let milliseconds = 0;
let minutes = 0;
let hours = 0;
let seconds = 0;
let timerDisplay = document.querySelector('.timerDisplay');
let startButton = document.getElementById('startTimer');
let pauseButton = document.getElementById('pauseTimer');
let resetButton = document.getElementById('resetTimer');
let int = null;

startButton.addEventListener('click', () => {
    if (int == null) {
        int = setInterval(displayTime, 10);
    }
})

pauseButton.addEventListener('click', () => {
    clearInterval(int);
    int = null;
})

resetButton.addEventListener('click', () => {
    clearInterval(int);
    int = null;
    milliseconds = 0;
    minutes = 0;
    hours = 0;
    seconds = 0;
    timerDisplay.innerHTML = '00 : 00 : 000'
})

function displayTime() {
    if (milliseconds === 990) {
        seconds++;
        milliseconds = 0;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
            }
        }
    } else {
        milliseconds = milliseconds + 10;
    }

    let min = minutes >= 10 ? minutes : `0${minutes}`;
    let sec = seconds >= 10 ? seconds : `0${seconds}`;
    let mm = milliseconds >= 100 ? `${milliseconds}` : milliseconds >= 10 ? `0${milliseconds}` : `000`;

    timerDisplay.innerHTML = `${min} : ${sec} : ${mm}`;
}